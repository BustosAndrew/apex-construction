'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your message! We'll get back to you within 24 hours.",
        );
        reset();
      } else {
        const errorData = await response.json();
        setSubmitError(
          errorData.error || 'Failed to send message. Please try again.',
        );
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Clock,
      title: 'Hours',
      value: 'Fri-Sun: 8AM-6PM',
      link: '#',
    },
  ];

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
              Contact Us
            </motion.h1>
            <motion.p
              className='text-xl text-gray-300 mb-8'
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to start your concrete construction project? Get in touch
              with our team today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20' ref={formRef}>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className='shadow-lg'>
                <CardHeader>
                  <CardTitle className='text-2xl'>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <Input
                          placeholder='Your Name'
                          {...register('name')}
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className='text-red-500 text-sm mt-1'>
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Input
                          type='email'
                          placeholder='Your Email'
                          {...register('email')}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className='text-red-500 text-sm mt-1'>
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <Input
                          type='tel'
                          placeholder='Your Phone'
                          {...register('phone')}
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && (
                          <p className='text-red-500 text-sm mt-1'>
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <select
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                            errors.projectType
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                          {...register('projectType')}
                        >
                          <option value=''>Select Project Type</option>
                          <option value='foundation'>
                            Foundation Construction
                          </option>
                          <option value='driveway'>Driveway & Walkways</option>
                          <option value='patio'>Patio & Outdoor Spaces</option>
                          <option value='decorative'>
                            Decorative Concrete
                          </option>
                          <option value='repair'>Concrete Repair</option>
                          <option value='consultation'>Consultation</option>
                        </select>
                        {errors.projectType && (
                          <p className='text-red-500 text-sm mt-1'>
                            {errors.projectType.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Textarea
                        placeholder='Tell us about your concrete project...'
                        rows={6}
                        {...register('message')}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type='submit'
                      size='lg'
                      className='w-full'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className='ml-2 h-4 w-4' />
                    </Button>

                    {submitMessage && (
                      <p className='text-green-600 text-center font-medium'>
                        {submitMessage}
                      </p>
                    )}

                    {submitError && (
                      <p className='text-red-600 text-center font-medium'>
                        {submitError}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='space-y-8'>
                <div>
                  <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                    Get In Touch
                  </h2>
                  <p className='text-lg text-gray-600'>
                    Ready to transform your property with professional concrete
                    construction? Contact us today to discuss your project and
                    schedule a consultation.
                  </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className='flex items-start space-x-4'
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className='flex-shrink-0'>
                        <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                          <item.icon className='h-6 w-6 text-primary' />
                        </div>
                      </div>
                      <div>
                        <h3 className='font-semibold text-gray-900'>
                          {item.title}
                        </h3>
                        {item.link !== '#' ? (
                          <a
                            href={item.link}
                            className='text-gray-600 hover:text-primary transition-colors'
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className='text-gray-600'>{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
