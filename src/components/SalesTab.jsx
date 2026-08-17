import React from 'react';
import { Calendar, Tag, Percent, Sparkles, ShoppingBag } from 'lucide-react';

export default function SalesTab({ calendar = [] }) {
  return (
    <div>
      <div style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Upcoming Indian Sales Calendar</h2>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Historical discount trends and upcoming price drops</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {calendar.map((sale, idx) => (
          <div key={idx} style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
              <div>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  background: 'rgba(56, 189, 248, 0.12)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'inline-block',
                  marginBottom: '0.4rem'
                }}>
                  {sale.status}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{sale.name}</h3>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              <Calendar size={14} color="#38bdf8" />
              <span>Expected: <strong>{sale.expectedDates}</strong></span>
            </div>

            {/* Discount Categories */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
              {sale.discountCategories?.map((cat, cIdx) => (
                <span key={cIdx} style={{
                  fontSize: '0.72rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)'
                }}>
                  {cat}
                </span>
              ))}
            </div>

            {/* Smart Tip */}
            <div style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '0.6rem 0.8rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.75rem',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <Sparkles size={14} />
              <span>{sale.alertTip}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
