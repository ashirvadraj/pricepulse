import React, { useState } from 'react';
import { Bell, Trash2, TrendingDown, ArrowDownRight, ExternalLink, Check, AlertCircle, Sparkles } from 'lucide-react';

export default function WatchlistTab({ watchlist = [], onRemove, onUpdateTarget }) {
  const [editingTargetId, setEditingTargetId] = useState(null);
  const [tempTarget, setTempTarget] = useState('');
  const [notificationBanner, setNotificationBanner] = useState(null);

  const handleEdit = (item) => {
    setEditingTargetId(item.id);
    setTempTarget(item.targetPrice.toString());
  };

  const handleSave = (item) => {
    const val = parseInt(tempTarget, 10);
    if (!isNaN(val) && val > 0) {
      onUpdateTarget(item.productId, val);
    }
    setEditingTargetId(null);
  };

  const triggerTestNotification = (item) => {
    setNotificationBanner({
      title: '🚨 Price Drop Alert Received!',
      body: `Hurry! ${item.product.name} just dropped to ₹${item.currentPrice.toLocaleString('en-IN')}. Lowest price right now!`
    });
    setTimeout(() => {
      setNotificationBanner(null);
    }, 5000);
  };

  return (
    <div>
      {/* Active Notification Toast Simulation */}
      {notificationBanner && (
        <div style={{
          background: 'linear-gradient(135deg, #10b981, #059669)',
          color: 'white',
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1rem',
          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <Bell size={22} className="animate-bounce" />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: '0.85rem' }}>{notificationBanner.title}</div>
            <div style={{ fontSize: '0.78rem', opacity: 0.95 }}>{notificationBanner.body}</div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Product Watchlist</h2>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Automated 24/7 price drop monitor & offer radar</p>
        </div>
        <span style={{
          background: 'rgba(56, 189, 248, 0.12)',
          color: '#38bdf8',
          padding: '0.25rem 0.65rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: 700
        }}>
          {watchlist.length} Tracking
        </span>
      </div>

      {watchlist.length === 0 ? (
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px dashed var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 1.5rem',
          textAlign: 'center'
        }}>
          <Bell size={40} color="var(--text-muted)" style={{ margin: '0 auto 0.75rem' }} />
          <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Your Watchlist is Empty</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Search for any product and tap "Track Price" to get notified as soon as discounts go live!
          </p>
        </div>
      ) : (
        <div className="watchlist-list">
          {watchlist.map((item) => (
            <div key={item.id} className="watchlist-card">
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <img
                  src={item.product?.image}
                  alt={item.product?.name}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 'var(--radius-md)',
                    objectFit: 'cover',
                    border: '1px solid var(--border-subtle)'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.3rem' }}>
                    {item.product?.name}
                  </h4>

                  {/* Pricing Comparison */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>
                      ₹{item.currentPrice?.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Added at: ₹{item.addedPrice?.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Price Reduction Badge */}
                  {item.priceDrop > 0 ? (
                    <div className="drop-badge">
                      <ArrowDownRight size={14} /> Price Reduced by ₹{item.priceDrop.toLocaleString('en-IN')} ({item.dropPercent}% OFF)
                    </div>
                  ) : (
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                      Price is stable. Watching for drops below ₹{item.targetPrice?.toLocaleString('en-IN')}.
                    </div>
                  )}
                </div>

                {/* Remove action */}
                <button
                  onClick={() => onRemove(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.3rem',
                    borderRadius: 'var(--radius-sm)'
                  }}
                  title="Remove from Watchlist"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Target Price Configuration & Alerts */}
              <div style={{
                marginTop: '0.85rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Target Alert: <strong style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>₹{item.targetPrice?.toLocaleString('en-IN')}</strong>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  {editingTargetId === item.id ? (
                    <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                      <input
                        type="number"
                        value={tempTarget}
                        onChange={(e) => setTempTarget(e.target.value)}
                        style={{
                          width: '80px',
                          background: 'var(--bg-surface-elevated)',
                          border: '1px solid var(--border-active)',
                          color: 'white',
                          padding: '0.2rem 0.4rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.75rem'
                        }}
                      />
                      <button
                        onClick={() => handleSave(item)}
                        style={{
                          background: 'var(--status-emerald)',
                          border: 'none',
                          color: 'black',
                          padding: '0.25rem 0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer'
                        }}
                      >
                        <Check size={12} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEdit(item)}
                      style={{
                        background: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.72rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer'
                      }}
                    >
                      Set Target Price
                    </button>
                  )}

                  <button
                    onClick={() => triggerTestNotification(item)}
                    style={{
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#38bdf8',
                      fontSize: '0.72rem',
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.2rem'
                    }}
                  >
                    <Bell size={11} /> Test Alert
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
