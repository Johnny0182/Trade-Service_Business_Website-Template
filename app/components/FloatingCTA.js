'use client';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}>
      {/* Call Button */}
      <a
        href="tel:3235557270"
        title="Call Primos Plumbing"
        style={{
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #C8202A, #8B0000)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          boxShadow: '0 8px 30px rgba(200,32,42,0.5)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          animation: 'ringBell 2s 1s ease-in-out infinite',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.12)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(200,32,42,0.65)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,32,42,0.5)';
        }}
      >
        📞
      </a>

      {/* Schedule Button */}
      <a
        href="#contact"
        title="Schedule Service"
        style={{
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0D1F3C, #1A4B8C)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          boxShadow: '0 8px 30px rgba(13,31,60,0.4)',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        📅
      </a>

      <style>{`
        @keyframes ringBell {
          0%, 90%, 100% { transform: scale(1); }
          92% { transform: scale(1.1) rotate(-5deg); }
          94% { transform: scale(1.1) rotate(5deg); }
          96% { transform: scale(1.1) rotate(-3deg); }
          98% { transform: scale(1.1) rotate(3deg); }
        }
      `}</style>
    </div>
  );
}
