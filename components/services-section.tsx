'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Hammer, Palette, Wrench, Building, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Home,
    title: 'Foundation Construction',
    description: 'Solid concrete foundations that provide the structural integrity your home needs for decades to come.',
  },
  {
    icon: Building,
    title: 'Driveways & Walkways',
    description: 'Durable and attractive concrete driveways and walkways that enhance your home\'s curb appeal.',
  },
  {
    icon: Palette,
    title: 'Decorative Concrete',
    description: 'Stamped, stained, and polished concrete solutions that combine beauty with functionality.',
  },
  {
    icon: Hammer,
    title: 'Patios & Outdoor Spaces',
    description: 'Custom concrete patios and outdoor living spaces perfect for entertaining and relaxation.',
  },
  {
    icon: Wrench,
    title: 'Concrete Repair',
    description: 'Professional repair services to restore and extend the life of your existing concrete structures.',
  },
  {
    icon: Lightbulb,
    title: 'Consultation & Design',
    description: 'Expert advice on concrete solutions tailored to your specific needs and budget.',
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Concrete Construction Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive concrete solutions for residential properties
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}