// app/layout.tsx
import './globals.css';
import { Inter, GFS_Didot } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const gfsDidot = GFS_Didot({
  subsets: ['greek'],
  weight: '400',
  display: 'swap',
  variable: '--font-gfs-didot',
});

export const metadata = {
  title: 'PhantomX',
  description: 'See Beyond Numbers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${gfsDidot.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
