import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Apex Concrete Construction Services | Custom Home Builder & Remodeling',
  description:
    'A full service custom home builder and remodeling company specializing in providing families beautiful and functional spaces that last for generations.',
  keywords: [
    'construction',
    'home builder',
    'remodeling',
    'custom homes',
    'apex concrete',
  ],
  authors: [{ name: 'Apex Concrete Construction Services' }],
  creator: 'Apex Concrete Construction Services',
  publisher: 'Apex Concrete Construction Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://apexconcreteconstruction.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Apex Concrete Construction Services | Custom Home Builder & Remodeling',
    description:
      'A full service custom home builder and remodeling company specializing in providing families beautiful and functional spaces that last for generations.',
    url: 'https://apexconcreteconstruction.com',
    siteName: 'Apex Concrete Construction Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Concrete Construction Services - Custom Home Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Apex Concrete Construction Services | Custom Home Builder & Remodeling',
    description:
      'A full service custom home builder and remodeling company specializing in providing families beautiful and functional spaces that last for generations.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Organization',
              name: 'Apex Concrete Construction Services',
              url: 'https://apexconcreteconstruction.com',
              logo: 'https://apexconcreteconstruction.com/logo.png',
              description:
                'A full service custom home builder and remodeling company specializing in providing families beautiful and functional spaces that last for generations.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'customer service',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
