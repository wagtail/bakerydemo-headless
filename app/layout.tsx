import type { Metadata, Viewport } from 'next';
import './styles/bootstrap.min.css';
import './styles/font-marcellus.css';
import './styles/main.css';
import Footer from '../components/layout/Footer';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'The Wagtail Bakery',
  description: 'The Wagtail Bakery demo site',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <hr />
        <Footer />
      </body>
    </html>
  );
}
