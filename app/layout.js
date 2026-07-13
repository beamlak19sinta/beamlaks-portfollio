import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Beamlak Sintayehu | Frontend Developer',
  description:
    'Portfolio of Beamlak Sintayehu — Information Systems Graduate, Frontend Developer specializing in React & Next.js. Based in Addis Ababa, Ethiopia.',
  keywords: [
    'Beamlak Sintayehu',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer',
    'Ethiopia',
    'Addis Ababa',
    'Portfolio',
  ],
  authors: [{ name: 'Beamlak Sintayehu', url: 'https://github.com/beamlak19sinta' }],
  creator: 'Beamlak Sintayehu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Beamlak Sintayehu | Frontend Developer',
    description:
      'Explore my portfolio — projects, skills, and experience as a React & Next.js developer.',
    siteName: 'Beamlak Sintayehu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beamlak Sintayehu | Frontend Developer',
    description: 'React & Next.js developer based in Addis Ababa, Ethiopia.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
