'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ready For Your Concrete Project?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer comprehensive concrete construction services with thorough communication, project management, on-site organization, and solid, quality construction every time. We're ready to partner with you on your concrete project and make the construction process easier for you.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8 py-4 bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="/contact">
                GET FREE ESTIMATE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center space-x-6 text-white">
              <a href="tel:+1-555-123-4567" className="flex items-center hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </a>
              <a href="mailto:renzoherrera217@gmail.com" className="flex items-center hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                renzoherrera217@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}