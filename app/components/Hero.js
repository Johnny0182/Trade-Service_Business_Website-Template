'use client';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#0D1F3C',
      }}
    >
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        opacity: 0.35,
      }} />

      {/* Blue gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(105deg, rgba(13,31,60,0.97) 0%, rgba(13,31,60,0.85) 50%, rgba(13,31,60,0.5) 100%)',
      }} />

      {/* Red accent stripe */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 6,
        height: '100%',
        background: 'linear-gradient(to bottom, #C8202A, #FF4444, #C8202A)',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '80px 24px' }}>
        <div style={{ maxWidth: 720 }}>
          {/* Top badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(200, 32, 42, 0.2)',
            border: '1px solid rgba(200, 32, 42, 0.5)',
            borderRadius: 100,
            padding: '6px 16px',
            color: '#FF6B6B',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 24,
            animation: 'fadeInUp 0.6s ease forwards',
          }}>
            <span style={{ color: '#FF4444', fontSize: 16 }}>●</span>
            Los Angeles&apos;s Most Trusted Plumbers
          </div>

          {/* Main Title */}
          <h1 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.05,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            animation: 'fadeInUp 0.7s 0.1s ease both',
            marginBottom: 8,
          }}>
            FAST,
          </h1>
          <h1 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 700,
            color: '#C8202A',
            lineHeight: 1.05,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            animation: 'fadeInUp 0.7s 0.2s ease both',
            marginBottom: 8,
          }}>
            RELIABLE &amp;
          </h1>
          <h1 style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.05,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            animation: 'fadeInUp 0.7s 0.3s ease both',
            marginBottom: 28,
          }}>
            AFFORDABLE.
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 36,
            animation: 'fadeInUp 0.7s 0.4s ease both',
          }}>
            Primos Plumbing has proudly served the greater Los Angeles area for over <strong style={{ color: 'white' }}>15 years</strong>. 
            Clogged drains, broken pipes, or no hot water — our certified technicians arrive same-day, 
            fix it right the first time, and leave your home spotless.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 14,
            marginBottom: 40,
            animation: 'fadeInUp 0.7s 0.5s ease both',
          }}>
            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'linear-gradient(135deg, #C8202A, #A0171F)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: 10,
              fontWeight: 800,
              fontSize: 17,
              letterSpacing: '0.02em',
              boxShadow: '0 8px 30px rgba(200,32,42,0.5)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              animation: 'pulse 2.5s 2s ease infinite',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(200,32,42,0.65)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,32,42,0.5)';
              }}
            >
              📅 Schedule Free Estimate
            </a>
            <a href="tel:3235557270" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.5)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: 10,
              fontWeight: 800,
              fontSize: 17,
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.borderColor = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              }}
            >
              📞 (323) 555-7270
            </a>
          </div>

          {/* Ratings + Trust badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            animation: 'fadeInUp 0.7s 0.6s ease both',
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 12,
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                background: '#C8202A',
                color: 'white',
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 700,
                fontSize: 22,
                padding: '6px 12px',
                borderRadius: 8,
              }}>4.9</div>
              <div>
                <div style={{ color: '#FFD700', fontSize: 18, letterSpacing: 2 }}>★★★★★</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 2 }}>Based on 1,200+ reviews</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 12,
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ fontSize: 28 }}>🛡️</div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>Licensed &amp; Insured</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>CA Lic #789456</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 12,
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ fontSize: 28 }}>⚡</div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>Same-Day Service</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>24 / 7 Emergency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
