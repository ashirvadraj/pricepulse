import React, { useState, useEffect } from 'react';
import './index.css';
import {
  searchProducts, salesCalendar, computeVerdict,
  getWatchlist, getEnrichedWatchlist, addToWatchlist, removeFromWatchlist
} from './data.js';

function SearchIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke={p.color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>; }
function TrendingDownIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>; }
function BellIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>; }
function CalendarIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>; }
function ZapIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill={p.fill||"none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>; }
function ExternalLinkIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>; }
function ChevronRightIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke={p.color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>; }
function ArrowLeftIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>; }
function CheckIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke={p.color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>; }
function Trash2Icon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>; }
function ArrowDownRightIcon(p) { return <svg xmlns="http://www.w3.org/2000/svg" width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>; }

export default function App() {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [watchlistToast, setWatchlistToast] = useState(null);

  useEffect(() => {
    try {
      const r = searchProducts('');
      setResults(r);
      if (r.length > 0) setSelectedProduct(r[0]);
      setWatchlist(getEnrichedWatchlist());
    } catch (err) {
      console.error('Init error:', err);
    }
  }, []);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    try {
      const r = searchProducts(searchQuery);
      setResults(r);
      if (r.length > 0) setSelectedProduct(r[0]);
    } catch (err) {
      console.error('Search error:', err);
    }
  };

  const handleChipClick = (q) => {
    setSearchQuery(q);
    try {
      const r = searchProducts(q);
      setResults(r);
      if (r.length > 0) setSelectedProduct(r[0]);
    } catch (err) {
      console.error('Chip search error:', err);
    }
  };

  const handleAddToWatchlist = (product) => {
    addToWatchlist(product.id, Math.floor(product.currentLowest * 0.95));
    setWatchlist(getEnrichedWatchlist());
    setWatchlistToast('Added to watchlist!');
    setTimeout(() => setWatchlistToast(null), 3500);
  };

  const handleRemove = (id) => {
    removeFromWatchlist(id);
    setWatchlist(getEnrichedWatchlist());
  };

  const isWatchlisted = selectedProduct && getWatchlist().some(w => w.productId === selectedProduct.id);

  const renderChart = (history, allTimeLowest) => {
    if (!history || history.length === 0) return null;
    const prices = history.map(h => h.price);
    const minP = Math.min(...prices), maxP = Math.max(...prices), range = maxP - minP || 1;
    const W = 460, H = 180, PX = 35, PY = 30, GW = W - PX * 2, GH = H - PY * 2;
    const pts = history.map((item, i) => ({
      ...item,
      x: PX + (i / (history.length - 1 || 1)) * GW,
      y: H - PY - ((item.price - minP) / range) * GH
    }));
    const pathD = pts.reduce((a, p, i) => i === 0 ? 'M ' + p.x + ',' + p.y : a + ' L ' + p.x + ',' + p.y, '');
    const areaD = pathD + ' L ' + pts[pts.length - 1].x + ',' + (H - PY) + ' L ' + pts[0].x + ',' + (H - PY) + ' Z';
    return (
      <svg viewBox={'0 0 ' + W + ' ' + H} style={{ width: '100%', height: 'auto' }}>
        <defs>
          <linearGradient id="gF" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <line x1={PX} y1={PY} x2={W - PX} y2={PY} stroke="#24355a" strokeDasharray="3 3" />
        <line x1={PX} y1={H / 2} x2={W - PX} y2={H / 2} stroke="#24355a" strokeDasharray="3 3" />
        <line x1={PX} y1={H - PY} x2={W - PX} y2={H - PY} stroke="#24355a" />
        <path d={areaD} fill="url(#gF)" />
        <path d={pathD} fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
        {pts.map((pt, i) => (
          <circle key={i} cx={pt.x} cy={pt.y} r={pt.price === allTimeLowest ? 6 : 4}
            fill={pt.price === allTimeLowest ? '#10b981' : '#2563eb'} stroke="#fff" strokeWidth="1.5" />
        ))}
      </svg>
    );
  };

  const VerdictBanner = ({ verdict }) => {
    if (!verdict) return null;
    return (
      <div className={'verdict-banner ' + verdict.status}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800 }}>{verdict.title}</div>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '100px', fontFamily: 'var(--font-mono)' }}>Score: {verdict.score}/100</span>
        </div>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.45, marginBottom: '0.5rem' }}>{verdict.description}</p>
        <div style={{ background: 'rgba(0,0,0,0.25)', padding: '0.5rem 0.75rem', borderRadius: '10px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          <div><strong>💡 Recommendation:</strong> {verdict.recommendation}</div>
          {verdict.predictedNextDrop && <div><strong>📅 Next Price Drop:</strong> {verdict.predictedNextDrop}</div>}
        </div>
      </div>
    );
  };

  const fmt = (n) => n ? n.toLocaleString('en-IN') : '0';

  return (
    <div className="app-shell">
      {/* Header */}
      <header className="app-header">
        <div className="logo-group">
          <div className="logo-badge"><ZapIcon size={22} fill="white" /></div>
          <div>
            <div className="logo-text">PricePulse</div>
            <div className="logo-sub">India Price Tracker</div>
          </div>
        </div>
      </header>

      {/* Toast */}
      {watchlistToast && (
        <div style={{ background: 'var(--status-emerald)', color: '#022c22', padding: '0.75rem 1rem', fontSize: '0.82rem', fontWeight: 700, textAlign: 'center' }}>
          ✓ {watchlistToast}
        </div>
      )}

      <main className="main-content">
        {/* SEARCH TAB */}
        {activeTab === 'search' && (
          <div>
            <form onSubmit={handleSearch} className="search-container">
              <div className="search-input-wrapper">
                <SearchIcon size={18} color="var(--text-muted)" />
                <input type="text" className="search-input" placeholder="Search product name..."
                  value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-btn">Search</button>
              </div>
            </form>

            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.6rem', marginBottom: '1rem' }}>
              {['iPhone 15', 'Sony XM5', 'MacBook Air', 'Samsung S24', 'LG OLED', 'OnePlus 12', 'iPad Air', 'Dyson'].map(k => (
                <button key={k} onClick={() => handleChipClick(k)} style={{
                  background: searchQuery === k ? 'var(--brand-primary)' : 'var(--bg-surface)',
                  color: searchQuery === k ? 'white' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)', padding: '0.35rem 0.75rem',
                  borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap'
                }}>{k}</button>
              ))}
            </div>

            {selectedProduct && (
              <div>
                {/* Product Card */}
                <div className="card" style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                    <img src={selectedProduct.image} alt={selectedProduct.name}
                      style={{ width: 80, height: 80, borderRadius: '10px', objectFit: 'cover', border: '1px solid var(--border-subtle)' }}
                      onError={e => { e.target.style.display = 'none'; }} />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56,189,248,0.1)', padding: '0.15rem 0.5rem', borderRadius: '6px' }}>
                        {selectedProduct.category}
                      </span>
                      <h2 style={{ fontSize: '0.95rem', fontWeight: 800, marginTop: '0.25rem', lineHeight: 1.3 }}>{selectedProduct.name}</h2>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.3rem' }}>
                        <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--status-emerald)', fontFamily: 'var(--font-mono)' }}>
                          ₹{fmt(selectedProduct.currentLowest)}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                          MRP ₹{fmt(selectedProduct.mrp)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                    <button onClick={() => handleAddToWatchlist(selectedProduct)} style={{
                      flex: 1, background: isWatchlisted ? 'var(--bg-surface-elevated)' : 'var(--brand-primary)',
                      color: isWatchlisted ? 'var(--status-emerald)' : 'white',
                      border: isWatchlisted ? '1px solid var(--status-emerald)' : 'none',
                      padding: '0.65rem', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer'
                    }}>
                      {isWatchlisted ? '✓ Tracking' : '🔔 Track Price'}
                    </button>
                    <button onClick={() => setActiveTab('history')} style={{
                      background: 'var(--bg-surface-elevated)', color: 'var(--text-primary)',
                      border: '1px solid var(--border-subtle)', padding: '0.65rem 0.9rem',
                      borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer'
                    }}>
                      📉 History
                    </button>
                  </div>
                </div>

                <VerdictBanner verdict={selectedProduct.verdict} />

                {/* Store Comparison */}
                <div style={{ marginTop: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 800 }}>Store Price Comparison</h3>
                    <span style={{ fontSize: '0.72rem', color: 'var(--status-emerald)', fontWeight: 700 }}>
                      Lowest on {selectedProduct.stores && selectedProduct.stores.find(s => s.isLowest) ? selectedProduct.stores.find(s => s.isLowest).name : ''}
                    </span>
                  </div>
                  <div className="store-list">
                    {selectedProduct.stores && selectedProduct.stores.map((s, i) => (
                      <div key={i} className={'store-card' + (s.isLowest ? ' lowest' : '')}>
                        <div style={{ flex: 1, paddingRight: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8' }}>{s.name}</span>
                            {s.isLowest && <span className="store-badge-lowest">⚡ Lowest</span>}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                            <span style={{ fontSize: '1.15rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>₹{fmt(s.price)}</span>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>₹{fmt(s.originalPrice)}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--status-emerald)', fontWeight: 700 }}>{s.discountPercent}% OFF</span>
                          </div>
                          <div style={{ fontSize: '0.72rem', color: '#38bdf8', marginTop: '0.25rem' }}>⚡ {s.offerText}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>✓ {s.delivery}</div>
                        </div>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                          background: s.isLowest ? 'var(--brand-primary)' : 'var(--bg-surface-elevated)',
                          color: '#fff', border: s.isLowest ? 'none' : '1px solid var(--border-subtle)',
                          padding: '0.55rem 0.85rem', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, textDecoration: 'none'
                        }}>
                          Buy <ExternalLinkIcon size={13} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Results */}
                {results.length > 1 && (
                  <div style={{ marginTop: '1.75rem' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.65rem' }}>Other Products:</h4>
                    {results.filter(p => p.id !== selectedProduct.id).map(p => (
                      <div key={p.id} onClick={() => setSelectedProduct(p)} style={{
                        background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
                        padding: '0.75rem 1rem', borderRadius: '10px', display: 'flex',
                        alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', marginBottom: '0.5rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <img src={p.image} alt="" style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover' }}
                            onError={e => { e.target.style.display = 'none'; }} />
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{p.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--status-emerald)', fontFamily: 'var(--font-mono)' }}>
                              Lowest: ₹{fmt(p.currentLowest)}
                            </div>
                          </div>
                        </div>
                        <ChevronRightIcon size={16} color="var(--text-muted)" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && selectedProduct && (
          <div>
            <button onClick={() => setActiveTab('search')} style={{
              background: 'none', border: 'none', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer', marginBottom: '1rem'
            }}>
              <ArrowLeftIcon size={16} /> Back
            </button>
            <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: 700 }}>{selectedProduct.category}</span>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem' }}>{selectedProduct.name}</h2>
            <VerdictBanner verdict={selectedProduct.verdict} />
            <div className="chart-container">
              <div className="chart-stats-grid">
                <div className="stat-box"><div className="stat-label">All-Time Low</div><div className="stat-value lowest">₹{fmt(selectedProduct.allTimeLowest)}</div></div>
                <div className="stat-box"><div className="stat-label">Average</div><div className="stat-value avg">₹{fmt(selectedProduct.averagePrice)}</div></div>
                <div className="stat-box"><div className="stat-label">All-Time High</div><div className="stat-value highest">₹{fmt(selectedProduct.allTimeHighest)}</div></div>
              </div>
              {renderChart(selectedProduct.priceHistory, selectedProduct.allTimeLowest)}
            </div>
            <div className="card" style={{ marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.75rem' }}>Sale Event Timeline</h4>
              {selectedProduct.priceHistory && selectedProduct.priceHistory.map((h, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingBottom: '0.4rem', borderBottom: i < selectedProduct.priceHistory.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  fontSize: '0.78rem', marginBottom: '0.4rem'
                }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{h.label}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{h.date}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: h.price === selectedProduct.allTimeLowest ? 'var(--status-emerald)' : 'var(--text-primary)' }}>
                    ₹{fmt(h.price)} {h.price === selectedProduct.allTimeLowest && <span style={{ fontSize: '0.65rem', color: 'var(--status-emerald)' }}>LOWEST</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WATCHLIST TAB */}
        {activeTab === 'watchlist' && (
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Product Watchlist</h2>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Price drop monitor</p>
            </div>
            {watchlist.length === 0 ? (
              <div className="card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔔</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Watchlist is Empty</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Search any product and tap "Track Price" to monitor drops!
                </p>
              </div>
            ) : watchlist.map(w => (
              <div key={w.id} className="card" style={{ marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <img src={w.product && w.product.image} alt="" style={{ width: 65, height: 65, borderRadius: '10px', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none'; }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.3 }}>{w.product && w.product.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>₹{fmt(w.currentPrice)}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Added: ₹{fmt(w.addedPrice)}</span>
                    </div>
                    {w.priceDrop > 0 ? (
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                        background: 'var(--status-emerald-bg)', color: 'var(--status-emerald)',
                        padding: '0.2rem 0.5rem', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 700, marginTop: '0.35rem'
                      }}>
                        ↘ Reduced by ₹{fmt(w.priceDrop)} ({w.dropPercent}%)
                      </div>
                    ) : (
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        Watching for drops below ₹{fmt(w.targetPrice)}
                      </div>
                    )}
                  </div>
                  <button onClick={() => handleRemove(w.id)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.2rem' }}>
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SALES TAB */}
        {activeTab === 'sales' && (
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Upcoming Indian Sales</h2>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Festival discount dates & predictions</p>
            </div>
            {salesCalendar.map((s, i) => (
              <div key={i} className="card" style={{ marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#38bdf8', background: 'rgba(56,189,248,0.12)', padding: '0.15rem 0.5rem', borderRadius: '100px', display: 'inline-block', marginBottom: '0.35rem' }}>
                  {s.status}
                </span>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 700 }}>{s.name}</h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0.3rem 0' }}>
                  📅 Expected: <strong>{s.expectedDates}</strong>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.6rem' }}>
                  {s.discountCategories && s.discountCategories.map((c, j) => (
                    <span key={j} style={{ fontSize: '0.7rem', background: 'var(--bg-surface-elevated)', padding: '0.15rem 0.4rem', borderRadius: '6px' }}>{c}</span>
                  ))}
                </div>
                <div style={{
                  background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                  padding: '0.5rem 0.7rem', borderRadius: '10px', fontSize: '0.72rem', color: '#34d399'
                }}>⚡ {s.alertTip}</div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        {[
          { id: 'search', label: 'Compare', emoji: '🔍' },
          { id: 'history', label: 'History', emoji: '📉' },
          { id: 'watchlist', label: 'Watchlist', emoji: '🔔', badge: watchlist.length },
          { id: 'sales', label: 'Sales', emoji: '📅' }
        ].map(tab => (
          <button key={tab.id}
            className={'nav-tab' + (activeTab === tab.id ? ' active' : '')}
            onClick={() => { setActiveTab(tab.id); if (tab.id === 'watchlist') setWatchlist(getEnrichedWatchlist()); }}>
            <span style={{ fontSize: '1.2rem' }}>{tab.emoji}</span>
            <span>{tab.label}</span>
            {tab.badge > 0 && <span className="nav-badge">{tab.badge}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}
