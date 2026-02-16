'use client';

const reviews = [
  {
    name: 'Rosa Martinez',
    location: 'South Gate, CA',
    rating: 5,
    date: 'January 2025',
    text: 'I called Primos Plumbing at 10pm on a Sunday because my kitchen sink was backing up and water was going everywhere. They picked up immediately, showed up within 45 minutes, and had the problem fixed in under an hour. The technician even cleaned under the sink before he left. AMAZING service. Will never use anyone else.',
    avatar: 'R',
    source: 'Google',
  },
  {
    name: 'James Kim',
    location: 'Inglewood, CA',
    rating: 5,
    date: 'December 2024',
    text: 'Primos replaced our entire water heater and re-piped our laundry area in one day. Marco himself came to give us the estimate and the price was 30% lower than two other quotes we got. The crew was professional, fast, and didn\'t leave a single mess. Highly recommend to anyone in LA.',
    avatar: 'J',
    source: 'Yelp',
  },
  {
    name: 'Angela Flores',
    location: 'Compton, CA',
    rating: 5,
    date: 'November 2024',
    text: 'Our main sewer line was completely blocked and we were getting sewage backup in the house. I was panicking. Primos Plumbing came the same day with a camera and hydro-jetter and resolved the issue completely. They also showed me video footage of the pipe and explained everything in Spanish, which made me feel so much more comfortable.',
    avatar: 'A',
    source: 'Google',
  },
  {
    name: 'David Nguyen',
    location: 'Torrance, CA',
    rating: 5,
    date: 'October 2024',
    text: 'Had a really stubborn clog in my bathroom that another company couldn\'t fix. Primos came in with the hydro-jetting equipment and demolished it. Price was fair and they were done in an hour. These guys are the real deal.',
    avatar: 'D',
    source: 'Google',
  },
  {
    name: 'Maria Gonzalez',
    location: 'Long Beach, CA',
    rating: 5,
    date: 'September 2024',
    text: 'I used the coupon from their website and saved $75 on a drain cleaning and pipe repair combo. The savings were real and the service was top tier. Diego even called me two days later to make sure everything was still working properly. That follow-up care is rare these days.',
    avatar: 'M',
    source: 'Yelp',
  },
  {
    name: 'Tony Reeves',
    location: 'Lynwood, CA',
    rating: 5,
    date: 'August 2024',
    text: 'As a property manager I work with a lot of plumbers. Primos is hands-down the best in Los Angeles. They show up on time, communicate clearly, and their pricing is always competitive. I now use them exclusively for all 23 of my units.',
    avatar: 'T',
    source: 'Google',
  },
];

const sourceColors = { Google: '#4285F4', Yelp: '#C8202A' };

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ background: '#F4F7FB', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
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
            ⭐ Real Reviews
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
            WHAT OUR <span style={{ color: '#C8202A' }}>CUSTOMERS SAY</span>
          </h2>

          {/* Aggregate rating */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <div style={{
              background: '#0D1F3C',
              color: 'white',
              borderRadius: 12,
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 48, fontWeight: 700, color: '#FFD700' }}>4.9</div>
              <div>
                <div style={{ color: '#FFD700', fontSize: 22, letterSpacing: 3 }}>★★★★★</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 2 }}>1,200+ reviews across Google & Yelp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {reviews.map((review, i) => (
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(13,31,60,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,31,60,0.06)';
              }}
            >
              {/* Source badge */}
              <div style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: sourceColors[review.source] + '15',
                border: `1px solid ${sourceColors[review.source]}40`,
                color: sourceColors[review.source],
                padding: '3px 10px',
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 700,
              }}>
                {review.source}
              </div>

              {/* Stars */}
              <div style={{ color: '#FFB800', fontSize: 18, letterSpacing: 2, marginBottom: 14 }}>
                {'★'.repeat(review.rating)}
              </div>

              {/* Review text */}
              <p style={{
                color: '#4A5568',
                fontSize: 14,
                lineHeight: 1.75,
                marginBottom: 20,
                fontStyle: 'italic',
              }}>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0D1F3C, #1A4B8C)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'white',
                  flexShrink: 0,
                }}>
                  {review.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0D1F3C', fontSize: 15 }}>{review.name}</div>
                  <div style={{ color: '#8392A5', fontSize: 12 }}>{review.location} · {review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: '#6B7A99', fontSize: 15, marginBottom: 20 }}>
            Join over 12,000 satisfied Los Angeles homeowners and businesses.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #C8202A, #A0171F)',
            color: 'white',
            padding: '14px 40px',
            borderRadius: 10,
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: '0.03em',
          }}>
            Become Our Next Happy Customer →
          </a>
        </div>
      </div>
    </section>
  );
}
