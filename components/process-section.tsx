'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      image: "https://images.pexels.com/photos/7876655/pexels-photo-7876655.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "SITE PREPARATION & PLANNING",
      description: "Thorough site assessment, excavation, and preparation to ensure proper drainage and foundation stability for your concrete project."
    },
    {
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "PRECISION CONCRETE POURING",
      description: "Expert concrete mixing and pouring techniques using high-quality materials to ensure strength, durability, and proper curing."
    },
    {
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "FINISHING & DETAILING",
      description: "Professional finishing techniques including smoothing, texturing, and decorative treatments to achieve the perfect look and feel."
    },
    {
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "QUALITY ASSURANCE",
      description: "Comprehensive inspection and quality control to ensure your concrete meets our high standards and will last for decades."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Professional Concrete Construction
          </motion.h2>
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built Right The First Time
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 text-gray-900">
                <h4 className="text-lg font-bold mb-3 text-center">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}