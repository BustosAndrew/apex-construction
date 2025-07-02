'use client';

import {
  Hammer,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Image
                src={'/logo.png'}
                alt='Apex Concrete Logo'
                width={40}
                height={40}
                className='h-10 w-10'
              />
              <span className='text-xl font-bold'>APEX CONCRETE</span>
            </div>
            <p className='text-gray-400 leading-relaxed'>
              Professional concrete construction services for residential
              properties. Building solid foundations and beautiful concrete
              solutions that last for generations.
            </p>
            {/* <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-primary transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-primary transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Foundation Construction
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Driveways & Walkways
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Decorative Concrete
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Patios & Outdoor Spaces
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Concrete Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <MapPin className='h-5 w-5 text-white mt-1' />
                <div>
                  <p className='text-gray-400'>123 Construction Ave</p>
                  <p className='text-gray-400'>Building City, ST 12345</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='h-5 w-5 text-white' />
                <a
                  href='tel:+1-555-123-4567'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  (555) 123-4567
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='h-5 w-5 text-white' />
                <a
                  href='mailto:renzoherrera217@gmail.com'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  renzoherrera217@gmail.com
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
          <p>
            &copy; 2024 Apex Concrete Construction Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
