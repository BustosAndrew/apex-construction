'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: "Modern Home Foundation",
    category: "FOUNDATION",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Complete foundation system for a 3,200 sq ft custom home with basement and garage."
  },
  {
    title: "Decorative Driveway",
    category: "DRIVEWAY",
    image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Stamped concrete driveway with integrated walkways and decorative borders."
  },
  {
    title: "Outdoor Entertainment Patio",
    category: "PATIO",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Large concrete patio with fire pit area and built-in seating walls."
  },
  {
    title: "Pool Deck & Surrounds",
    category: "POOL DECK",
    image: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Slip-resistant concrete pool deck with decorative scoring and staining."
  }
];

export default function FeaturedProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Featured Concrete Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our latest residential concrete construction projects
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold text-primary mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" variant="outline" className="text-inherit border-white hover:bg-white hover:text-gray-900" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}