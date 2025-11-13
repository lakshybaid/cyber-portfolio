import { useState, useEffect } from 'react';
import BootScreen from '@/components/BootScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const hasSeenBoot = sessionStorage.getItem('bootScreenSeen');
    if (hasSeenBoot) {
      setBootComplete(true);
    }
  }, []);

  const handleBootComplete = () => {
    setBootComplete(true);
    sessionStorage.setItem('bootScreenSeen', 'true');
  };

  if (!bootComplete) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  return (
    <div className="min-h-screen">
      <div className="scanline" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
