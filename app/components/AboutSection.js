'use client';

const stats = [
  { number: '15+', label: 'Years in Business' },
  { number: '12,000+', label: 'Jobs Completed' },
  { number: '4.9 ★', label: 'Average Rating' },
  { number: '100%', label: 'Satisfaction Guarantee' },
];

const features = [
  { icon: '✅', text: 'All technicians background-checked & drug-tested' },
  { icon: '✅', text: 'We arrive in a clearly marked company vehicle' },
  { icon: '✅', text: 'Upfront pricing — no hidden fees, ever' },
  { icon: '✅', text: '12-month labor warranty on all repairs' },
  { icon: '✅', text: 'We clean up after every job — like we were never there' },
  { icon: '✅', text: 'Spanish-speaking technicians available' },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ background: 'white', padding: 'clamp(60px, 8vw, 100px) 24px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 60,
          alignItems: 'center',
        }}>
          {/* Left — Story */}
          <div>
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
              marginBottom: 20,
            }}>
              🏠 Our Story
            </div>

            <h2 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              color: '#0D1F3C',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              marginBottom: 24,
            }}>
              BORN IN LOS ANGELES,<br />
              <span style={{ color: '#C8202A' }}>BUILT ON TRUST</span>
            </h2>

            <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: 16, marginBottom: 18 }}>
              Primos Plumbing was founded in 2009 by brothers Marco and Diego Reyes, who grew up in 
              South Gate, CA watching their father fix every broken pipe and leaky faucet in their neighborhood — 
              often for free, just because that's what neighbors did.
            </p>
            <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: 16, marginBottom: 18 }}>
              When they saw families being overcharged and underserved by plumbing companies that didn't 
              speak their language — literally or figuratively — they decided to do something about it. 
              Starting with one truck and a whole lot of hustle, they built a plumbing company rooted 
              in the community values they were raised with: honesty, hard work, and taking care of your primos (cousins).
            </p>
            <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
              Today, Primos Plumbing operates a fleet of 12 fully-stocked trucks across Los Angeles County, 
              serving over 1,200 homes and businesses each month. Marco and Diego still personally review 
              every customer complaint, and their father still stops by the shop on Fridays.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#2D3748' }}>
                  <span style={{ color: '#16A34A', fontWeight: 700 }}>{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>

            <a href="#contact" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #0D1F3C, #1A3260)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 10,
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: '0.03em',
            }}>
              Meet the Team →
            </a>
          </div>

          {/* Right — Stats + Visual */}
          <div>
            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              marginBottom: 28,
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, #0D1F3C, #1A3260)'
                    : 'linear-gradient(135deg, #C8202A, #8B0000)',
                  borderRadius: 16,
                  padding: '28px 20px',
                  textAlign: 'center',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                }}>
                  <div style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 700,
                    color: '#FFD700',
                    marginBottom: 8,
                  }}>{s.number}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Coupon Card */}
            <div style={{
              background: 'linear-gradient(135deg, #FFF8F0, #FFF)',
              border: '3px dashed #C8202A',
              borderRadius: 20,
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: 'rgba(200,32,42,0.06)',
              }} />
              <div style={{
                display: 'inline-block',
                background: '#C8202A',
                color: 'white',
                padding: '4px 14px',
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                🎟️ EXCLUSIVE COUPON
              </div>
              <h3 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: 700,
                color: '#C8202A',
                lineHeight: 1,
                marginBottom: 8,
              }}>
                $75 OFF
              </h3>
              <p style={{ color: '#0D1F3C', fontSize: 15, fontWeight: 700, marginBottom: 6 }}>
                Any Plumbing Service Over $200
              </p>
              <p style={{ color: '#6B7A99', fontSize: 13, marginBottom: 16 }}>
                Valid for new customers only. Cannot be combined with other offers. Expires 12/31/2025.
              </p>
              <div style={{
                background: '#F4F7FB',
                borderRadius: 8,
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 18, fontWeight: 700, letterSpacing: '0.15em', color: '#0D1F3C' }}>
                  PRIMO75
                </span>
                <span style={{ fontSize: 13, color: '#6B7A99' }}>Use code at booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
