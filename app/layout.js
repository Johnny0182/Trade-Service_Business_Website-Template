import './globals.css';

export const metadata = {
  title: 'Primos Plumbing | #1 Plumbing & Drain Experts in Los Angeles',
  description:
    'Primos Plumbing provides expert plumbing, drain cleaning, and water heater services in Los Angeles, CA. Available 24/7. Call (323) 000-0000.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
