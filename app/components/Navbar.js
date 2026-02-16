'use client';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Plumbing Services', href: '#services' },
  { label: 'Drain Cleaning', href: '#services' },
  { label: 'Water Heaters', href: '#services' },
  { label: 'Coupons', href: '#contact' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const keepVisualOnly = (e) => e.preventDefault();

  return (
    <>
      <nav style={{
        background: '#0D1F3C',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}>
        <div className="nav-inner" style={{
          maxWidth: 1720,
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(14px, 2vw, 28px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}>
          {/* Logo */}
          <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C8202A, #1A4B8C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Oswald, sans-serif',
              fontSize: 20,
              fontWeight: 700,
              color: 'white',
              flexShrink: 0,
              border: '2px solid rgba(255,255,255,0.2)',
            }}>PP</div>
            <div>
              <div className="nav-brand-primary" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 22, fontWeight: 700, color: 'white', lineHeight: 1.1, letterSpacing: '0.03em' }}>
                PRIMOS
              </div>
              <div className="nav-brand-secondary" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 13, fontWeight: 400, color: '#C8202A', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                PLUMBING
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1, minWidth: 0, justifyContent: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '6px clamp(6px, 0.6vw, 10px)',
                  borderRadius: 6,
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255,255,255,0.85)';
                  e.target.style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Group */}
          <div className="nav-cta-group" style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <a href="#contact" className="nav-phone-cta" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'white',
              padding: '8px 14px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
              onClick={keepVisualOnly}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
            >
              <span style={{ fontSize: 18 }}>📞</span>
              <span className="nav-phone-text">(323) 000-0000</span>
            </a>
            <a href="#contact" className="nav-schedule-cta" style={{
              background: 'linear-gradient(135deg, #C8202A, #A0171F)',
              color: 'white',
              padding: '10px 18px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(200,32,42,0.4)',
              transition: 'transform 0.2s',
            }}
              onClick={keepVisualOnly}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Schedule Now
            </a>
            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: 26,
                display: 'none',
                cursor: 'pointer',
              }}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-nav" style={{
            background: '#0D1F3C',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '16px 24px 24px',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.9)',
                  padding: '12px 0',
                  fontSize: 16,
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={keepVisualOnly}
              style={{
                display: 'block',
                marginTop: 16,
                background: '#C8202A',
                color: 'white',
                padding: '14px',
                textAlign: 'center',
                borderRadius: 8,
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              📞 Call (323) 000-0000
            </a>
          </div>
        )}
      </nav>

      <style>{`
        .nav-logo { flex-shrink: 0; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .mobile-nav { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 1450px) {
          .desktop-nav a { font-size: 11.5px !important; padding-left: 6px !important; padding-right: 6px !important; }
        }
        @media (max-width: 1260px) {
          .nav-phone-text { display: none !important; }
          .nav-phone-cta { padding: 8px 10px !important; }
        }
        @media (max-width: 768px) {
          .nav-inner {
            padding: 0 12px !important;
            height: 64px !important;
          }
          .nav-brand-primary { font-size: 18px !important; }
          .nav-brand-secondary { font-size: 10px !important; letter-spacing: 0.12em !important; }
          .nav-phone-cta { padding: 8px 10px !important; }
          .nav-phone-text { display: none !important; }
          .nav-schedule-cta { display: none !important; }
          .mobile-nav { padding: 12px 12px 20px !important; }
        }
      `}</style>
    </>
  );
}