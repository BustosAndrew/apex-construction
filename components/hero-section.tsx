'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-black/40 z-10' />
        <img
          src='https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
          alt='Concrete construction work in progress'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 lg:px-8 relative z-20'>
        <div className='max-w-4xl mx-auto text-center text-white'>
          <motion.h1
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Solid Foundations
            <br />
            Built To Last.
          </motion.h1>

          <motion.p
            className='text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert concrete construction services for residential homes. From
            foundations and driveways to patios and decorative concrete, we
            deliver durable solutions that enhance your property's value and
            beauty.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant='outline'
              size='lg'
              className='text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900'
              asChild
            >
              <Link href='/projects'>
                <Play className='mr-2 h-5 w-5' />
                View Our Work
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2' />
        </motion.div>
      </motion.div>
    </section>
  );
}
