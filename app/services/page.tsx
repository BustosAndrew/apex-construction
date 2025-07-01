'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Home, Hammer, Palette, Wrench, Building, Lightbulb, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Home,
    title: 'Foundation Construction',
    description: 'Professional concrete foundation services for new homes, additions, and commercial buildings.',
    features: ['Excavation & Site Prep', 'Rebar Installation', 'Concrete Pouring', 'Waterproofing', 'Quality Inspection'],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    icon: Building,
    title: 'Driveways & Walkways',
    description: 'Durable concrete driveways and walkways that enhance your property\'s curb appeal and functionality.',
    features: ['Site Preparation', 'Reinforcement Installation', 'Decorative Options', 'Sealing & Protection', 'Maintenance Plans'],
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    icon: Palette,
    title: 'Decorative Concrete',
    description: 'Beautiful stamped, stained, and polished concrete solutions that combine aesthetics with durability.',
    features: ['Stamped Patterns', 'Color Staining', 'Polished Finishes', 'Exposed Aggregate', 'Custom Designs'],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    icon: Hammer,
    title: 'Patios & Outdoor Spaces',
    description: 'Custom concrete patios and outdoor living areas perfect for entertaining and relaxation.',
    features: ['Design Consultation', 'Site Layout', 'Drainage Solutions', 'Decorative Elements', 'Seating Walls'],
    image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    icon: Wrench,
    title: 'Concrete Repair & Restoration',
    description: 'Professional repair services to restore and extend the life of your existing concrete structures.',
    features: ['Crack Repair', 'Surface Restoration', 'Structural Reinforcement', 'Waterproofing', 'Preventive Maintenance'],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    icon: Lightbulb,
    title: 'Consultation & Design',
    description: 'Expert consultation services to help you plan and design the perfect concrete solution for your needs.',
    features: ['Site Assessment', 'Design Development', 'Material Selection', 'Cost Estimation', 'Project Planning'],
    image: 'https://images.pexels.com/photos/7876655/pexels-photo-7876655.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
];

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gray-900 text-white" ref={heroRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Concrete Construction Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional concrete solutions for residential properties
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" ref={servicesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact">
                      Get Free Estimate
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Concrete Project?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact us today for a free consultation and estimate for your concrete construction needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}