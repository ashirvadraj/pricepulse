import React from 'react';
import { ExternalLink, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export default function StoreCard({ store, productName }) {
  const getStoreStyles = (name) => {
    switch (name.toLowerCase()) {
      case 'amazon india':
        return { color: '#ff9900', badge: 'Amazon.in' };
      case 'flipkart':
        return { color: '#2874f0', badge: 'Flipkart' };
      case 'croma':
        return { color: '#00e9bf', badge: 'Croma' };
      case 'reliance digital':
        return { color: '#e42529', badge: 'Reliance' };
      default:
        return { color: '#38bdf8', badge: name };
    }
  };

  const storeMeta = getStoreStyles(store.name);

  return (
    <div className={`store-card ${store.isLowest ? 'lowest' : ''}`}>
      <div style={{ flex: 1, paddingRight: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span style={{
            fontSize: '0.78rem',
            fontWeight: 800,
            color: storeMeta.color,
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            border: `1px solid ${storeMeta.color}33`
          }}>
            {store.name}
          </span>
          {store.isLowest && (
            <span className="store-badge-lowest">
              <Zap size={11} /> Lowest Price
            </span>
          )}
        </div>

        {/* Pricing */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.2rem' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>
            ₹{store.price.toLocaleString('en-IN')}
          </span>
          {store.originalPrice > store.price && (
            <>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                ₹{store.originalPrice.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--status-emerald)', fontWeight: 700 }}>
                {store.discountPercent}% OFF
              </span>
            </>
          )}
        </div>

        {/* Bank Offer & Delivery Details */}
        <div style={{ marginTop: '0.4rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#38bdf8' }}>
            <Zap size={12} /> {store.offerText}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.15rem', color: 'var(--text-muted)' }}>
            <CheckCircle2 size={12} color="var(--status-emerald)" /> {store.delivery}
          </div>
        </div>
      </div>

      {/* Outbound Link Button */}
      <div>
        <a
          href={store.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: store.isLowest ? 'var(--brand-primary)' : 'var(--bg-surface-elevated)',
            color: '#ffffff',
            border: store.isLowest ? 'none' : '1px solid var(--border-subtle)',
            padding: '0.65rem 0.95rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.82rem',
            fontWeight: 700,
            textDecoration: 'none',
            transition: 'all 0.15s ease',
            whiteSpace: 'nowrap',
            boxShadow: store.isLowest ? '0 4px 12px rgba(37, 99, 235, 0.4)' : 'none'
          }}
        >
          <span>Buy Now</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
