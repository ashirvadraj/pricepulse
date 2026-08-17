import React, { useState } from 'react';
import { Smartphone, Download, Terminal, CheckCircle2, Copy, Shield, Sparkles } from 'lucide-react';

export default function ApkGuideTab() {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Android APK Build & Install</h2>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>How to export and install your PricePulse Android App</p>
      </div>

      {/* Step 1: Direct EAS APK Command */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
          <div style={{
            background: 'var(--brand-primary)',
            color: 'white',
            width: 26,
            height: 26,
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
            fontWeight: 800
          }}>
            1
          </div>
          <h3 style={{ fontSize: '0.98rem', fontWeight: 700 }}>Generate Standalone .APK via EAS</h3>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          The project is pre-configured with <code>app.json</code> and <code>eas.json</code>. Run this one-line command to compile a standalone <code>.apk</code> you can install on any Android phone:
        </p>

        <div style={{
          background: '#090d16',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: '#38bdf8'
        }}>
          <code>npx eas build -p android --profile preview</code>
          <button
            onClick={() => copyToClipboard('npx eas build -p android --profile preview', 'eas')}
            style={{
              background: 'var(--bg-surface-elevated)',
              border: 'none',
              color: 'var(--text-secondary)',
              padding: '0.25rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            {copiedCmd === 'eas' ? <CheckCircle2 size={13} color="var(--status-emerald)" /> : <Copy size={13} />}
            <span style={{ fontSize: '0.7rem' }}>{copiedCmd === 'eas' ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Step 2: Instant Expo Go Mobile Test */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
          <div style={{
            background: 'var(--brand-accent)',
            color: 'white',
            width: 26,
            height: 26,
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
            fontWeight: 800
          }}>
            2
          </div>
          <h3 style={{ fontSize: '0.98rem', fontWeight: 700 }}>Test on Phone Instantly (Expo Go)</h3>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          Scan the development QR code with the free <strong>Expo Go</strong> app on your Android device to test live without building an APK first:
        </p>

        <div style={{
          background: '#090d16',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: '#38bdf8'
        }}>
          <code>npx expo start --tunnel</code>
          <button
            onClick={() => copyToClipboard('npx expo start --tunnel', 'start')}
            style={{
              background: 'var(--bg-surface-elevated)',
              border: 'none',
              color: 'var(--text-secondary)',
              padding: '0.25rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            {copiedCmd === 'start' ? <CheckCircle2 size={13} color="var(--status-emerald)" /> : <Copy size={13} />}
            <span style={{ fontSize: '0.7rem' }}>{copiedCmd === 'start' ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* APK Features Summary */}
      <div style={{
        background: 'rgba(16, 185, 129, 0.08)',
        border: '1px solid rgba(16, 185, 129, 0.25)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.15rem'
      }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34d399', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Sparkles size={15} /> Native Android APK Capabilities Included:
        </h4>
        <ul style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
          <li>Amazon India & Flipkart Direct URL Share Sheet integration</li>
          <li>Local Push Notifications for target price drops</li>
          <li>Offline caching for instant search and price graphs</li>
          <li>Adaptive icon and splash screen configuration</li>
        </ul>
      </div>
    </div>
  );
}
