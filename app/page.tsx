import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import ProcessSection from '@/components/process-section';
import TestimonialsSection from '@/components/testimonials-section';
import FeaturedProjects from '@/components/featured-projects';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FeaturedProjects />
      <CTASection />
      <Footer />
    </main>
  );
}