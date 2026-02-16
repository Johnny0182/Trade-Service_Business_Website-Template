import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ServiceAreasSection from './components/ServiceAreasSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ContactSection />
      <ServicesSection />
      <WhyChooseUs />
      <AboutSection />
      <ReviewsSection />
      <FAQSection />
      <ServiceAreasSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
