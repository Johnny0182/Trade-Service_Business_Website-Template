'use client';

const steps = [
  { num: '01', icon: '📞', title: 'Call or Book Online', desc: 'Reach us by phone or use our online form 24/7. Tell us your issue and we\'ll get you scheduled immediately.' },
  { num: '02', icon: '⚡', title: 'Same-Day Dispatch', desc: 'A certified Primos technician is dispatched to your location, usually within 60–90 minutes of your call.' },
  { num: '03', icon: '🔍', title: 'Diagnose & Quote', desc: 'We inspect the problem and give you an upfront, transparent price — no surprises and no pressure.' },
  { num: '04', icon: '🔧', title: 'Fix It Right', desc: 'Our licensed plumbers complete the repair with quality parts and proven methods, backed by a 12-month warranty.' },
];

const whyUs = [
  { icon: '💰', title: 'Upfront Pricing', desc: 'No bait-and-switch. We quote the full price before we touch anything.' },
  { icon: '🏆', title: 'Licensed & Insured', desc: 'CA State License #789456. Full liability coverage on every job.' },
  { icon: '⏱', title: 'On-Time, Every Time', desc: 'We call 30 min ahead and show up within the window we promised.' },
  { icon: '🌍', title: 'Bilingual Team', desc: 'Spanish & English speaking technicians. We serve all of LA\'s communities.' },
  { icon: '🛠', title: 'Premium Parts', desc: 'We only use manufacturer-approved parts — no cheap knock-offs.' },
  { icon: '🤝', title: '100% Guarantee', desc: 'Not satisfied? We\'ll come back and make it right at no extra charge.' },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* How It Works */}
      <section style={{ background: '#0D1F3C', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.8)',
              padding: '6px 20px',
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              🔄 Our Process
            </div>
            <h2 style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              lineHeight: 1.2,
            }}>
              HOW IT <span style={{ color: '#C8202A' }}>WORKS</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 14, fontSize: 16, maxWidth: 480, margin: '14px auto 0' }}>
              Getting your plumbing fixed is simple. Four steps and we're done.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            alignItems: 'stretch',
          }}>
            {steps.map((step, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative', height: '100%' }}>
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: 40,
                    right: '-20px',
                    width: 40,
                    height: 2,
                    background: 'rgba(255,255,255,0.15)',
                    display: 'none',
                  }} />
                )}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20,
                  padding: '32px 24px',
                  transition: 'background 0.3s, border-color 0.3s',
                  cursor: 'default',
                  width: '100%',
                  minHeight: 'clamp(260px, 30vw, 300px)',
                  height: '100%',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(200,32,42,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(200,32,42,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <div style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#C8202A',
                    letterSpacing: '0.1em',
                    marginBottom: 14,
                  }}>
                    STEP {step.num}
                  </div>
                  <div style={{ fontSize: 44, marginBottom: 16 }}>{step.icon}</div>
                  <h3 style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: 18,
                    fontWeight: 600,
                    color: 'white',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                    letterSpacing: '0.03em',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'white', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
              🏅 Why Primos
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
              THE PRIMOS <span style={{ color: '#C8202A' }}>DIFFERENCE</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {whyUs.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: 16,
                background: '#F4F7FB',
                borderRadius: 14,
                padding: '22px 20px',
                border: '1px solid rgba(13,31,60,0.06)',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 600, color: '#0D1F3C', textTransform: 'uppercase', marginBottom: 6 }}>
                    {item.title}
                  </div>
                  <div style={{ color: '#6B7A99', fontSize: 14, lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
