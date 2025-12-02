'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Eye,
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
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
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      '/retaining.webp',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    ],
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
    gallery: [
      'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      '/stamped.jpg',
      '/stamped2.jpg',
      'https://images.pexels.com/photos/2724747/pexels-photo-2724747.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/7061661/pexels-photo-7061661.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2724746/pexels-photo-2724746.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Outdoor Entertainment Patio / Slabs',
    category: 'PATIO',
    image: '/slabs2.jpg',
    description:
      'Large concrete patio with fire pit area, built-in seating walls, and decorative scoring. Perfect for outdoor entertaining with family and friends.',
    features: ['Fire Pit Area', 'Seating Walls', 'Decorative Scoring', 'Slabs'],
    year: '2023',
    gallery: [
      '/slabs.jpg',
      '/slabs2.jpg',
      '/slabs3.jpg',
      'https://images.pexels.com/photos/1643382/pexels-photo-1643382.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2165963/pexels-photo-2165963.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      '/slabs3.jpg',
    ],
  },
  {
    title: 'Decorative Pavers',
    category: 'WALKWAY',
    image: '/pavers.jpg',
    description:
      'Curved decorative concrete walkway with integrated landscaping areas. Features stamped texture and acid staining for a natural stone appearance.',
    features: ['Curved Design', 'Landscape Integration', 'Natural Stone Look'],
    year: '2023',
    gallery: [
      '/pavers.jpg',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2724750/pexels-photo-2724750.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2165964/pexels-photo-2165964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2724751/pexels-photo-2724751.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    ],
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
    gallery: [
      'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      '/decking.jpg',
      'https://images.pexels.com/photos/2165962/pexels-photo-2165962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2724752/pexels-photo-2724752.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Excavation / Site Preparation',
    category: 'EXCAVATION',
    image: '/excavate.jpg',
    description:
      'Comprehensive excavation and site preparation services for residential properties. Includes grading, trenching, and soil stabilization.',
    features: ['Grading', 'Trenching', 'Soil Stabilization'],
    year: '2023',
    gallery: [
      '/excavate.jpg',
      '/excavate2.jpg',
      '/pipe.jpg',
      'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1078885/pexels-photo-1078885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/162568/excavators-hydraulic-excavators-construction-machine-162568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    ],
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleProjectClick = (projectIndex: number) => {
    setSelectedProject(projectIndex);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  const handleImageClick = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedProject !== null && selectedImageIndex !== null) {
      const project = projects[selectedProject];
      setSelectedImageIndex(
        selectedImageIndex > 0
          ? selectedImageIndex - 1
          : project.gallery.length - 1,
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject !== null && selectedImageIndex !== null) {
      const project = projects[selectedProject];
      setSelectedImageIndex(
        selectedImageIndex < project.gallery.length - 1
          ? selectedImageIndex + 1
          : 0,
      );
    }
  };

  // If a project is selected, show its gallery
  if (selectedProject !== null) {
    const project = projects[selectedProject];
    return (
      <main className='min-h-screen'>
        <Navigation />

        {/* Dark top section for navigation visibility */}
        <div className='h-20 bg-gray-900'></div>

        {/* Project Gallery Section */}
        <section className='pt-4 pb-16 bg-gray-50'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
              {/* Back Button */}
              <motion.div
                className='mb-8'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant='outline'
                  onClick={handleBackToProjects}
                  className='mb-4'
                >
                  <ArrowLeft className='mr-2 h-4 w-4' />
                  Back to All Projects
                </Button>
              </motion.div>

              {/* Project Header */}
              <motion.div
                className='text-center mb-8'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className='flex items-center justify-center gap-4 mb-4'>
                  <span className='bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold'>
                    {project.category}
                  </span>
                  <span className='bg-gray-200 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold'>
                    {project.year}
                  </span>
                </div>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  {project.title}
                </h1>
                <p className='text-lg text-gray-600 max-w-3xl mx-auto mb-6'>
                  {project.description}
                </p>
                <div className='flex flex-wrap justify-center gap-2'>
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className='bg-white text-gray-700 px-3 py-1 rounded-full text-sm border'
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                className='bg-white rounded-lg shadow-lg p-6'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
                  Project Gallery
                </h2>
                <div
                  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto pr-2'
                  style={{ scrollbarWidth: 'thin' }}
                >
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer'
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                      <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <Eye className='text-white h-8 w-8' />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                className='text-center mt-12'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Interested in a Similar Project?
                </h3>
                <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                  Contact us today to discuss your concrete construction needs
                  and get a free estimate.
                </p>
                <Button size='lg' asChild>
                  <Link href='/contact'>
                    Get Free Estimate
                    <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <motion.div
            className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            <div className='relative max-w-4xl max-h-full w-full h-full flex items-center justify-center'>
              {/* Close Button */}
              <button
                onClick={handleCloseLightbox}
                className='absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
              >
                <X className='h-6 w-6' />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className='absolute left-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
              >
                <ChevronLeft className='h-6 w-6' />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className='absolute right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
              >
                <ChevronRight className='h-6 w-6' />
              </button>

              {/* Main Image */}
              <motion.img
                src={project.gallery[selectedImageIndex]}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                className='max-w-full max-h-full object-contain rounded-lg'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Counter */}
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm'>
                {selectedImageIndex + 1} / {project.gallery.length}
              </div>
            </div>
          </motion.div>
        )}

        <Footer />
      </main>
    );
  }

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
                      onClick={() => handleProjectClick(index)}
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
                  <Button
                    variant='outline'
                    className='w-full'
                    onClick={() => handleProjectClick(index)}
                  >
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
