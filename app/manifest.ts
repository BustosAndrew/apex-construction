import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Apex Concrete Construction Services',
    short_name: 'Apex Construction',
    description:
      'A full service custom home builder and remodeling company specializing in providing families beautiful and functional spaces that last for generations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1f2937',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    categories: ['business', 'construction', 'home improvement'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with our construction experts',
        url: '/contact',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Our Services',
        short_name: 'Services',
        description: 'View our construction and remodeling services',
        url: '/services',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Projects',
        short_name: 'Projects',
        description: 'Browse our completed construction projects',
        url: '/projects',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'About Us',
        short_name: 'About',
        description: 'Learn more about Apex Construction Services',
        url: '/about',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
    ],
  };
}
