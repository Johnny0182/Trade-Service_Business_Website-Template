'use client';

const areas = [
  'South Gate', 'Compton', 'Inglewood', 'Hawthorne', 'Gardena',
  'Torrance', 'Long Beach', 'Carson', 'Paramount', 'Bellflower',
  'Downey', 'Norwalk', 'Lynwood', 'Huntington Park', 'Maywood',
  'Bell Gardens', 'Cudahy', 'Vernon', 'Commerce', 'Montebello',
  'East Los Angeles', 'Los Angeles', 'Culver City', 'El Segundo', 'Lawndale',
];

export default function ServiceAreasSection() {
  const keepVisualOnly = (e) => e.preventDefault();

  return (
    <section id="areas" style={{ background: '#F4F7FB', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(200,32,42,0.1)',
            border: '1px solid rgba(200,32,42,0.25)',
            color: '#C8202A',
            padding: '6px 20px',
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            📍 Where We Serve
          </div>
          <h2 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#0D1F3C',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            lineHeight: 1.2,
          }}>
            SERVICE <span style={{ color: '#C8202A' }}>AREAS</span>
          </h2>
          <p style={{ color: '#6B7A99', marginTop: 14, fontSize: 16 }}>
            Primos Plumbing serves all of Los Angeles County and surrounding cities.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="areas-chip-wrap" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          marginBottom: 48,
        }}>
          {areas.map((area, i) => (
            <a
              key={i}
              href="#contact"
              style={{
                background: 'white',
                border: '1px solid rgba(13,31,60,0.1)',
                color: '#0D1F3C',
                padding: '10px 20px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C8202A';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = '#C8202A';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#0D1F3C';
                e.currentTarget.style.borderColor = 'rgba(13,31,60,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              📍 {area}
            </a>
          ))}
        </div>

        {/* Not in list CTA */}
        <div className="areas-cta" style={{
          background: 'linear-gradient(135deg, #0D1F3C, #1A3260)',
          borderRadius: 20,
          padding: 'clamp(30px, 5vw, 48px)',
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}>
          <div className="areas-cta-text" style={{ textAlign: 'left', flex: 1, minWidth: 250 }}>
            <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 26, color: 'white', textTransform: 'uppercase', marginBottom: 8 }}>
              Don&apos;t See Your City?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>
              Call us anyway — we may still be able to serve your area. We&apos;re always expanding our coverage.
            </p>
          </div>
          <div className="areas-cta-buttons" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#contact" onClick={keepVisualOnly} className="areas-cta-btn" style={{
              background: '#C8202A',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontWeight: 800,
              fontSize: 15,
              whiteSpace: 'nowrap',
            }}>
              📞 (323) 000-0000
            </a>
            <a href="#contact" className="areas-cta-btn" style={{
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'white',
              padding: '14px 28px',
              borderRadius: 10,
              fontWeight: 800,
              fontSize: 15,
              whiteSpace: 'nowrap',
            }}>
              Get a Quote →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .areas-chip-wrap { gap: 10px !important; }
          .areas-chip-wrap a { font-size: 13px !important; padding: 8px 14px !important; }
          .areas-cta { justify-content: center !important; }
          .areas-cta-text { text-align: center !important; min-width: 0 !important; }
          .areas-cta-buttons { width: 100%; }
          .areas-cta-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  );
}