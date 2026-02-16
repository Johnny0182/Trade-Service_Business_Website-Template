'use client';

const services = [
  {
    icon: '🚿',
    title: 'Drain Cleaning',
    desc: 'Stubborn clogs no match for our hydro-jetting technology. We clear kitchen sinks, bathtubs, floor drains, and main sewer lines — fast.',
    highlight: 'Most Popular',
    price: 'From $89',
  },
  {
    icon: '🔥',
    title: 'Water Heater Services',
    desc: 'Repair or replace any brand of water heater. We install energy-efficient tankless units and traditional tanks with same-day availability.',
    highlight: '',
    price: 'Free Estimate',
  },
  {
    icon: '🔧',
    title: 'Pipe Repair & Replacement',
    desc: 'Leaky pipes, burst lines, re-piping entire homes — our master plumbers handle it all with minimal disruption to your walls or floors.',
    highlight: '',
    price: 'Free Estimate',
  },
  {
    icon: '📷',
    title: 'Sewer Camera Inspection',
    desc: 'Using HD cameras, we diagnose sewer problems before digging. Identify root intrusion, cracks, and blockages with pinpoint accuracy.',
    highlight: 'High-Tech',
    price: 'From $149',
  },
  {
    icon: '💧',
    title: 'Leak Detection',
    desc: 'Hidden leaks waste hundreds of gallons monthly. Our non-invasive electronic detection finds the source without tearing up your property.',
    highlight: '',
    price: 'From $99',
  },
  {
    icon: '🚽',
    title: 'Toilet & Fixture Repair',
    desc: 'Running toilets, clogged toilets, faucet drips, garbage disposals — all the small fixes that make a big difference in your daily life.',
    highlight: '',
    price: 'From $75',
  },
  {
    icon: '🌊',
    title: 'Hydro Jetting',
    desc: 'Industrial-grade water pressure blasts away grease, scale, and root infiltration from your pipes. The ultimate drain solution.',
    highlight: 'Professional Grade',
    price: 'From $299',
  },
  {
    icon: '🚨',
    title: '24/7 Emergency Plumbing',
    desc: 'Disasters don\'t wait for business hours. Our emergency team is dispatched immediately — nights, weekends, and holidays.',
    highlight: 'Always Available',
    price: 'Call Now',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: '#F4F7FB', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
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
            🔧 What We Do
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
            OUR PLUMBING <span style={{ color: '#C8202A' }}>SERVICES</span>
          </h2>
          <p style={{ color: '#6B7A99', marginTop: 14, fontSize: 16, maxWidth: 520, margin: '14px auto 0' }}>
            From routine maintenance to complex emergencies — Primos Plumbing does it all. 
            Every job comes with our 100% satisfaction guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                borderRadius: 16,
                padding: '28px 24px',
                boxShadow: '0 4px 20px rgba(13,31,60,0.06)',
                border: '1px solid rgba(13,31,60,0.06)',
                position: 'relative',
                transition: 'transform 0.25s, box-shadow 0.25s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 50px rgba(13,31,60,0.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,31,60,0.06)';
              }}
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div style={{
                  position: 'absolute',
                  top: -10,
                  right: 20,
                  background: service.highlight === 'Always Available' ? '#C8202A' :
                               service.highlight === 'Most Popular' ? '#1D6FD8' : '#0D1F3C',
                  color: 'white',
                  padding: '3px 12px',
                  borderRadius: 100,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  {service.highlight}
                </div>
              )}

              <div style={{ fontSize: 44, marginBottom: 14 }}>{service.icon}</div>
              <h3 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 20,
                fontWeight: 600,
                color: '#0D1F3C',
                marginBottom: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}>
                {service.title}
              </h3>
              <p style={{ color: '#6B7A99', fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>
                {service.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#C8202A',
                }}>
                  {service.price}
                </span>
                <a
                  href="#contact"
                  style={{
                    background: '#0D1F3C',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                  }}
                >
                  Book Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: 50,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0D1F3C, #1A3260)',
          borderRadius: 20,
          padding: '40px 24px',
        }}>
          <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 28, color: 'white', textTransform: 'uppercase', marginBottom: 8 }}>
            DON'T SEE YOUR ISSUE LISTED?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, fontSize: 16 }}>
            We handle ALL plumbing problems. Call us and describe your issue — we'll tell you exactly how we can help.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            background: '#C8202A',
            color: 'white',
            padding: '14px 36px',
            borderRadius: 10,
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: '0.03em',
          }}>
            📞 Call (323) 000-0000
          </a>
        </div>
      </div>
    </section>
  );
}
