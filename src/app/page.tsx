import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar 
        phone="0720.123.123" 
        address="Strada Maria Rosetti 26A, București 020487" 
      />
      <Header />
      
      <HeroSection />
      
      <ServicesSection id="services" />
      
      <TestimonialsSection id="testimonials" />
      
      <LocationSection 
        id="location" 
        address="Strada Maria Rosetti 26A, București 020487" 
      />
      
      <Footer />
      
      <StickyCallBar phone="0720.123.123" />
    </main>
  );
}
