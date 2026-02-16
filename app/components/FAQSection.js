'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'How quickly can you respond to an emergency?',
    a: 'We dispatch emergency plumbers 24/7, including nights, weekends, and holidays. Our average response time in the Los Angeles area is under 90 minutes. For life-threatening emergencies such as gas leaks or major flooding, call 911 first, then us.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes! For most plumbing services, we provide a free on-site estimate before any work begins. We diagnose the problem, explain the solution, and give you an upfront written quote. No surprises, no pressure.',
  },
  {
    q: 'Is Primos Plumbing licensed and insured?',
    a: 'Absolutely. We hold California State Contractor\'s License #789456 and carry full liability insurance and workers\' compensation coverage. All our technicians are background-checked, drug-tested, and trained to the highest industry standards.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), Zelle, and Venmo. We also offer financing options for larger projects through our lending partners.',
  },
  {
    q: 'Do you offer any warranties on your work?',
    a: 'Yes — we back all our labor with a 12-month warranty. If the same issue returns within a year of our repair, we come back and fix it at no charge. Parts may carry manufacturer warranties of 1–5 years depending on the product.',
  },
  {
    q: 'Can you work on older homes with galvanized pipes?',
    a: 'Absolutely. We have extensive experience re-piping older Los Angeles homes with modern copper or PEX piping. We do complete or partial re-pipes with minimal disruption to your walls and can often complete smaller re-pipes in a single day.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve most of Los Angeles County, including South Gate, Compton, Inglewood, Long Beach, Torrance, Downey, Carson, and dozens more cities. Call us to check if we cover your specific area.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={{ background: 'white', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
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
            ❓ FAQ
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
            FREQUENTLY ASKED <span style={{ color: '#C8202A' }}>QUESTIONS</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: '1px solid',
                borderColor: openIndex === i ? 'rgba(200,32,42,0.3)' : 'rgba(13,31,60,0.1)',
                borderRadius: 14,
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: openIndex === i ? 'rgba(200,32,42,0.04)' : 'white',
                  border: 'none',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                <span style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#0D1F3C',
                  lineHeight: 1.4,
                }}>
                  {faq.q}
                </span>
                <span style={{
                  fontSize: 20,
                  color: openIndex === i ? '#C8202A' : '#8392A5',
                  flexShrink: 0,
                  transition: 'transform 0.3s, color 0.2s',
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  +
                </span>
              </button>
              {openIndex === i && (
                <div style={{
                  padding: '0 24px 20px',
                  color: '#4A5568',
                  fontSize: 15,
                  lineHeight: 1.75,
                  borderTop: '1px solid rgba(200,32,42,0.1)',
                  paddingTop: 16,
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ color: '#6B7A99', fontSize: 15, marginBottom: 20 }}>
            Have a question not listed here? We love to answer.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            background: '#0D1F3C',
            color: 'white',
            padding: '13px 32px',
            borderRadius: 10,
            fontWeight: 800,
            fontSize: 15,
          }}>
            Ask Us Anything →
          </a>
        </div>
      </div>
    </section>
  );
}
