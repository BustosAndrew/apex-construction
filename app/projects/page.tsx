'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Foundation System / Retaining Walls',
    category: 'FOUNDATION',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Complete foundation system for a 3,200 sq ft custom home including basement walls, footings, and garage foundation. Features proper waterproofing and drainage systems.',
    features: ['Basement Walls', 'Waterproofing', 'Steel Reinforcement'],
    year: '2024',
  },
  {
    title: 'Stamped Concrete Driveway & Walkways',
    category: 'DRIVEWAY',
    image:
      'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Beautiful stamped concrete driveway with ashlar slate pattern and earth tone coloring. Includes integrated walkways and decorative borders for enhanced curb appeal.',
    features: [
      'Stamped Pattern',
      'Integrated Walkways',
      'Color Staining',
      'Decorative Borders',
      'Sealer Application',
    ],
    year: '2024',
  },
  {
    title: 'Outdoor Entertainment Patio / Slabs',
    category: 'PATIO',
    image:
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Large concrete patio with fire pit area, built-in seating walls, and decorative scoring. Perfect for outdoor entertaining with family and friends.',
    features: ['Fire Pit Area', 'Seating Walls', 'Decorative Scoring', 'Slabs'],
    year: '2023',
  },
  {
    title: 'Decorative Pavers',
    category: 'WALKWAY',
    image:
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Curved decorative concrete walkway with integrated landscaping areas. Features stamped texture and acid staining for a natural stone appearance.',
    features: ['Curved Design', 'Landscape Integration', 'Natural Stone Look'],
    year: '2023',
  },
  {
    title: 'Decking & Fencing',
    category: 'FENCING',
    image:
      'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Custom concrete decking and fencing system for residential properties. Features durable materials and modern design to enhance outdoor spaces.',
    features: ['Durable Materials', 'Modern Design', 'Custom Solutions'],
    year: '2023',
  },
  {
    title: 'Excavation / Site Preparation',
    category: 'EXCAVATION',
    image:
      'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Comprehensive excavation and site preparation services for residential properties. Includes grading, trenching, and soil stabilization.',
    features: ['Grading', 'Trenching', 'Soil Stabilization'],
    year: '2023',
  },
];

export default function ProjectsPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-20 pb-16 bg-gray-900 text-white' ref={heroRef}>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.h1
              className='text-4xl md:text-5xl font-bold mb-6'
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Our Concrete Projects
            </motion.h1>
            <motion.p
              className='text-xl text-gray-300 mb-8'
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our portfolio of residential concrete construction
              projects
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='py-20' ref={projectsRef}>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className='group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <Button
                      variant='secondary'
                      className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'
                    >
                      <Eye className='mr-2 h-4 w-4' />
                      View Details
                    </Button>
                  </div>
                  <div className='absolute top-4 left-4'>
                    <span className='bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold'>
                      {project.category}
                    </span>
                  </div>
                  <div className='absolute top-4 right-4'>
                    <span className='bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold'>
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className='bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm'
                        >
                          {feature}
                        </span>
                      ))}
                  </div>
                  <Button variant='outline' className='w-full'>
                    Learn More
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary text-white'>
        <div className='container mx-auto px-4 lg:px-8 text-center'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold mb-6'
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Concrete Project?
          </motion.h2>
          <motion.p
            className='text-xl mb-8 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your concrete construction needs and bring your vision
            to life with our expert craftsmanship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size='lg' variant='secondary' asChild>
              <Link href='/contact'>
                Contact Us Today
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
