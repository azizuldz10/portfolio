import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ConnectSection from '@/components/ConnectSection';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="flex flex-col min-h-screen">
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <AchievementsSection />
          <ConnectSection />
        </main>
      </div>
    </>
  );
}
