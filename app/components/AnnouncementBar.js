'use client';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar" style={{
      background: 'linear-gradient(90deg, #C8202A 0%, #A0171F 50%, #C8202A 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 3s linear infinite',
      color: 'white',
      textAlign: 'center',
      padding: '10px 16px',
      fontSize: '14px',
      lineHeight: 1.5,
      fontWeight: '700',
      letterSpacing: '0.04em',
      position: 'relative',
      zIndex: 100,
      overflowWrap: 'anywhere',
      whiteSpace: 'nowrap',
    }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .announcement-bar a {
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .announcement-bar {
            padding: 10px 12px !important;
            font-size: 12px !important;
            letter-spacing: 0.02em !important;
            white-space: normal !important;
          }
          .announcement-bar span {
            font-size: 15px !important;
          }
          .announcement-bar a {
            white-space: normal;
          }
        }
      `}</style>
      🚨 LIMITED TIME: GET <span style={{ fontSize: '18px', color: '#FFD700' }}>$75 OFF</span> YOUR FIRST SERVICE CALL — USE CODE: <strong style={{ color: '#FFD700' }}>PRIMO75</strong>&nbsp;&nbsp;|&nbsp;&nbsp;
      24/7 Emergency Service Available&nbsp;&nbsp;📞 <a href="#contact" style={{ color: '#FFD700', textDecoration: 'underline' }}>(323) 555-7270</a>
    </div>
  );
}