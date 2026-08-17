import React from 'react';
import { Flame, Clock, AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';

export default function VerdictBadge({ verdict, allTimeLowest, currentLowest }) {
  if (!verdict) return null;

  const getIcon = () => {
    switch (verdict.status) {
      case 'BEST_TIME':
        return <Flame size={20} color="#10b981" />;
      case 'FAIR_PRICE':
        return <Clock size={20} color="#f59e0b" />;
      case 'WAIT':
        return <AlertTriangle size={20} color="#f43f5e" />;
      default:
        return <Sparkles size={20} color="#38bdf8" />;
    }
  };

  const getBadgeTitle = () => {
    switch (verdict.status) {
      case 'BEST_TIME':
        return '🔥 BEST TIME TO BUY';
      case 'FAIR_PRICE':
        return '🟡 MODERATE DEAL (BUY OR WAIT)';
      case 'WAIT':
        return '❌ WAIT - PRICE LIKELY TO DROP';
      default:
        return 'PRICE ANALYSIS';
    }
  };

  return (
    <div className={`verdict-banner ${verdict.status}`}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {getIcon()}
          <span style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em' }}>
            {getBadgeTitle()}
          </span>
        </div>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 800,
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '0.2rem 0.6rem',
          borderRadius: 'var(--radius-full)',
          fontFamily: 'var(--font-mono)'
        }}>
          Score: {verdict.score}/100
        </span>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.45rem', lineHeight: '1.45' }}>
        {verdict.description}
      </p>

      <div style={{
        background: 'rgba(0, 0, 0, 0.25)',
        padding: '0.65rem 0.85rem',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
      }}>
        <div><strong>💡 Recommendation:</strong> {verdict.recommendation}</div>
        {verdict.predictedNextDrop && (
          <div><strong>📅 Next Predicted Sale Drop:</strong> {verdict.predictedNextDrop}</div>
        )}
      </div>
    </div>
  );
}
