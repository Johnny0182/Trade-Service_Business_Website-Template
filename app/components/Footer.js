'use client';

const footerLinks = {
  'Our Services': [
    'Drain Cleaning',
    'Water Heater Repair',
    'Pipe Repair & Replacement',
    'Sewer Camera Inspection',
    'Hydro Jetting',
    'Emergency Plumbing',
    'Leak Detection',
    'Toilet & Fixture Repair',
  ],
  'Service Areas': [
    'South Gate',
    'Compton',
    'Inglewood',
    'Long Beach',
    'Torrance',
    'Downey',
    'Lynwood',
    'All Service Areas',
  ],
  'Company': [
    'About Us',
    'Meet the Team',
    'Careers',
    'Blog',
    'Coupons & Deals',
    'Reviews',
    'FAQ',
    'Contact Us',
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#060E1A', color: 'white' }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px, 7vw, 80px) 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #C8202A, #1A4B8C)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Oswald, sans-serif',
                fontSize: 20,
                fontWeight: 700,
                color: 'white',
                border: '2px solid rgba(255,255,255,0.15)',
                flexShrink: 0,
              }}>PP</div>
              <div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 22, fontWeight: 700, lineHeight: 1.1, letterSpacing: '0.03em' }}>PRIMOS</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 12, color: '#C8202A', letterSpacing: '0.2em', textTransform: 'uppercase' }}>PLUMBING</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.75, marginBottom: 24, maxWidth: 260 }}>
              Los Angeles&apos; trusted plumbing experts since 2009. Family-owned, community-driven, and available 24/7 for all your plumbing needs.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
              {['Facebook', 'Instagram', 'Yelp', 'Google'].map((s) => (
                <a key={s} href="#" style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#C8202A'; e.currentTarget.style.borderColor = '#C8202A'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                >
                  {s[0]}
                </a>
              ))}
            </div>
            {/* Contact quick */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '📞', text: '(323) 555-7270' },
                { icon: '✉️', text: 'info@primosplumbing.com' },
                { icon: '📍', text: 'South Gate, CA 90280' },
                { icon: '🕐', text: '24/7 Emergency Available' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 16,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 20,
                color: 'white',
                borderBottom: '2px solid #C8202A',
                paddingBottom: 10,
                display: 'inline-block',
              }}>
                {heading}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: 14,
                        transition: 'color 0.2s, padding-left 0.2s',
                        display: 'block',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '6px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.paddingLeft = '0'; }}
                    >
                      → {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* License info */}
        <div style={{
          marginTop: 56,
          paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
            © {year} Primos Plumbing LLC. All rights reserved. | CA State License #789456 | Bonded & Insured
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((l) => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
