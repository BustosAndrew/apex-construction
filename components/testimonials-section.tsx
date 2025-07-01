'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "SETH",
    quote: "Everyone who worked on our home was professional and friendly, and the end result looks amazing. I would recommend Seven Ridges in a heartbeat!",
    rating: 5
  },
  {
    name: "REBECCA",
    quote: "They are very professional and knowledgeable - I really appreciate how easy they are to communicate with and you can tell they take pride in what they do.",
    rating: 5
  },
  {
    name: "JENNIFER",
    quote: "They delivered nothing but professionalism, punctuality, QUALITY, and responsiveness. You can trust them to do exactly what they say they will.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-20 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-gray-900">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}