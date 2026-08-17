import React, { useState } from 'react';
import { TrendingDown, Calendar, AlertCircle } from 'lucide-react';

export default function PriceChart({ history = [], allTimeLowest, allTimeHighest, averagePrice }) {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  if (!history || history.length === 0) {
    return (
      <div className="chart-container">
        <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No historical price data available.</p>
      </div>
    );
  }

  const prices = history.map(h => h.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 1;

  // Chart dimensions
  const width = 460;
  const height = 180;
  const paddingX = 35;
  const paddingY = 30;
  const graphWidth = width - paddingX * 2;
  const graphHeight = height - paddingY * 2;

  // Compute SVG Points
  const points = history.map((item, index) => {
    const x = paddingX + (index / (history.length - 1 || 1)) * graphWidth;
    const y = height - paddingY - ((item.price - minPrice) / priceRange) * graphHeight;
    return { ...item, x, y, index };
  });

  const pathD = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x},${height - paddingY} L ${points[0].x},${height - paddingY} Z`;

  return (
    <div className="chart-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Price History & Trends</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Interactive Indian retail price trajectory</p>
        </div>
        <span style={{ 
          fontSize: '0.72rem', 
          background: 'rgba(56, 189, 248, 0.1)', 
          color: '#38bdf8', 
          padding: '0.2rem 0.6rem', 
          borderRadius: 'var(--radius-full)',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          <Calendar size={12} /> All Recorded Sales
        </span>
      </div>

      {/* Quick Stats Grid */}
      <div className="chart-stats-grid">
        <div className="stat-box">
          <div className="stat-label">All-Time Low</div>
          <div className="stat-value lowest">₹{allTimeLowest?.toLocaleString('en-IN')}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Average Price</div>
          <div className="stat-value avg">₹{averagePrice?.toLocaleString('en-IN')}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">All-Time High</div>
          <div className="stat-value highest">₹{allTimeHighest?.toLocaleString('en-IN')}</div>
        </div>
      </div>

      {/* SVG Line Chart */}
      <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="#24355a" strokeDasharray="3 3" strokeWidth="1" />
          <line x1={paddingX} y1={height / 2} x2={width - paddingX} y2={height / 2} stroke="#24355a" strokeDasharray="3 3" strokeWidth="1" />
          <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#24355a" strokeWidth="1" />

          {/* Filled Area */}
          <path d={areaD} fill="url(#priceGradient)" />

          {/* Stroke Line */}
          <path d={pathD} fill="none" stroke="url(#lineStroke)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Data Points */}
          {points.map((pt, i) => {
            const isLowest = pt.price === minPrice;
            const isHovered = hoveredPoint?.index === i;
            return (
              <g key={i} onMouseEnter={() => setHoveredPoint(pt)} onMouseLeave={() => setHoveredPoint(null)} style={{ cursor: 'pointer' }}>
                {isLowest && (
                  <circle cx={pt.x} cy={pt.y} r={isHovered ? 8 : 6} fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                )}
                {!isLowest && (
                  <circle cx={pt.x} cy={pt.y} r={isHovered ? 6 : 4} fill={isHovered ? '#38bdf8' : '#2563eb'} stroke="#ffffff" strokeWidth="1.5" />
                )}
              </g>
            );
          })}
        </svg>

        {/* Hover / Selected Info Tooltip */}
        {hoveredPoint ? (
          <div style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-active)',
            padding: '0.5rem 0.75rem',
            borderRadius: 'var(--radius-md)',
            marginTop: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8rem'
          }}>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>{hoveredPoint.date} ({hoveredPoint.label})</span>
            </div>
            <strong style={{ color: hoveredPoint.price === minPrice ? 'var(--status-emerald)' : '#38bdf8', fontFamily: 'var(--font-mono)' }}>
              ₹{hoveredPoint.price.toLocaleString('en-IN')} {hoveredPoint.price === minPrice && '🔥 All-Time Low'}
            </strong>
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '0.4rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            Tap or hover over any point on the line to see historical sale events and prices
          </div>
        )}
      </div>
    </div>
  );
}
