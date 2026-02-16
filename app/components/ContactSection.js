'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: '', zip: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(135deg, #0D1F3C 0%, #1A3260 100%)',
        padding: 'clamp(60px, 8vw, 100px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 300, height: 300,
        borderRadius: '50%', background: 'rgba(200,32,42,0.08)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, left: -60, width: 200, height: 200,
        borderRadius: '50%', background: 'rgba(29,111,216,0.1)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(200,32,42,0.2)',
            border: '1px solid rgba(200,32,42,0.4)',
            color: '#FF7070',
            padding: '6px 20px',
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            📞 Get In Touch
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
            SCHEDULE YOUR FREE <span style={{ color: '#C8202A' }}>SERVICE CALL</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 12, fontSize: 16, maxWidth: 500, margin: '12px auto 0' }}>
            Fill out the form below or call us directly. We respond within 15 minutes — guaranteed.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 40,
          alignItems: 'start',
        }}>
          {/* Form */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            padding: 'clamp(24px, 4vw, 40px)',
            backdropFilter: 'blur(10px)',
          }}>
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                color: 'white',
              }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 28, textTransform: 'uppercase', marginBottom: 12 }}>
                  Request Received!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  A Primos Plumbing specialist will call you back within 15 minutes. 
                  For urgent issues, call us directly at <strong style={{ color: '#FFD700' }}>(323) 555-7270</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 22, color: 'white', textTransform: 'uppercase', marginBottom: 24, letterSpacing: '0.03em' }}>
                  Request a FREE Estimate
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  {[
                    { name: 'name', placeholder: 'Full Name *', type: 'text' },
                    { name: 'phone', placeholder: 'Phone Number *', type: 'tel' },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.placeholder.includes('*')}
                      style={inputStyle}
                    />
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    value={formData.zip}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, marginBottom: 14 }}
                >
                  <option value="">Select Service Needed *</option>
                  <option>Drain Cleaning / Unclogging</option>
                  <option>Water Heater Repair / Replacement</option>
                  <option>Pipe Repair / Leak Detection</option>
                  <option>Sewer Line Inspection</option>
                  <option>Hydro Jetting</option>
                  <option>Toilet / Faucet Repair</option>
                  <option>Emergency Plumbing</option>
                  <option>Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Describe your issue (optional)..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }}
                />
                <button type="submit" style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #C8202A, #A0171F)',
                  color: 'white',
                  padding: '16px 24px',
                  borderRadius: 10,
                  border: 'none',
                  fontWeight: 800,
                  fontSize: 16,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  boxShadow: '0 8px 24px rgba(200,32,42,0.4)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  🚀 Send My Free Estimate Request
                </button>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 12, textAlign: 'center' }}>
                  No spam. No obligations. We respond in under 15 minutes.
                </p>
              </form>
            )}
          </div>

          {/* Right Side Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Call Now Card */}
            <div style={{
              background: 'linear-gradient(135deg, #C8202A, #8B0000)',
              borderRadius: 20,
              padding: '32px',
              boxShadow: '0 16px 50px rgba(200,32,42,0.35)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 48, marginBottom: 8, animation: 'floatPhone 3s ease-in-out infinite' }}>📲</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>
                Call Us Anytime — 24/7
              </div>
              <a href="tel:3235557270" style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontWeight: 700,
                color: '#FFD700',
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: 12,
              }}>
                (323) 555-7270
              </a>
              <div style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: 8,
                padding: '8px 16px',
                display: 'inline-block',
                color: 'white',
                fontSize: 14,
                fontWeight: 600,
              }}>
                ⏱ Average response: 12 min
              </div>
            </div>

            {/* Info cards */}
            {[
              { icon: '🕐', title: 'Hours of Operation', lines: ['Mon – Fri: 7am – 8pm', 'Sat – Sun: 8am – 6pm', '24/7 Emergency Line Available'] },
              { icon: '📍', title: 'Service Area', lines: ['Los Angeles County', 'South Gate, Compton, Inglewood', 'Long Beach, Torrance & more'] },
              { icon: '✉️', title: 'Email Us', lines: ['info@primosplumbing.com', 'We reply within 2 hours'] },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                padding: '20px 24px',
                display: 'flex',
                gap: 16,
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Oswald, sans-serif', color: 'white', fontSize: 16, fontWeight: 600, textTransform: 'uppercase', marginBottom: 6, letterSpacing: '0.03em' }}>{item.title}</div>
                  {item.lines.map((l, j) => (
                    <div key={j} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.7 }}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatPhone {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 10,
  padding: '13px 16px',
  color: 'white',
  fontSize: 15,
  fontFamily: 'Nunito, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
  display: 'block',
};
