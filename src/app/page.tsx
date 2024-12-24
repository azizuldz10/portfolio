import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
