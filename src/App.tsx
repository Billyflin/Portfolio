import { useEffect, useState } from 'react';
import { AboutSection } from '@/components/AboutSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { Waves } from '@/components/ui/wave-background';

export default function App() {
  const [wavesVisible, setWavesVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const showWavesTimeout = window.setTimeout(() => setWavesVisible(true), 180);
    const showHeaderTimeout = window.setTimeout(() => setHeaderVisible(true), 2350);
    const showContentTimeout = window.setTimeout(() => setContentVisible(true), 3300);

    return () => {
      window.clearTimeout(showWavesTimeout);
      window.clearTimeout(showHeaderTimeout);
      window.clearTimeout(showContentTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(96,165,250,0.16),_transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[12rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.12),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(67,56,202,0.1),_transparent_70%)] blur-3xl" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[520vh] overflow-hidden transition-opacity duration-[1900] ease-out"
        style={{ opacity: wavesVisible ? 1 : 0 }}
      >
        <div
          className="absolute inset-0 transition-all duration-[2400] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: wavesVisible ? 1 : 0,
            transform: wavesVisible ? 'scale(1)' : 'scale(1.04)',
            filter: wavesVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
        <Waves
          className="h-full w-full"
          strokeColor={contentVisible ? 'rgba(34,211,238,0.18)' : 'rgba(34,211,238,0.52)'}
          backgroundColor="#050816"
          pointerSize={0.26}
        />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg,rgba(5,8,22,0.08),rgba(5,8,22,0.12) 14%,rgba(5,8,22,0.18) 32%,rgba(5,8,22,0.26) 56%,rgba(5,8,22,0.36) 100%)',
          }}
        />
        <div
          className="absolute inset-0 transition-all duration-[1900] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background:
              'radial-gradient(circle at 50% 18%, rgba(5,8,22,0.04) 0%, rgba(5,8,22,0.22) 24%, rgba(5,8,22,0.48) 48%, rgba(5,8,22,0.76) 72%, rgba(5,8,22,0.9) 100%)',
            clipPath: contentVisible
              ? 'circle(165% at 50% 18%)'
              : 'circle(2% at 50% 18%)',
            opacity: contentVisible ? 1 : 0.12,
          }}
        />
        <div
          className="absolute inset-0 transition-all duration-[2200] ease-out"
          style={{
            background:
              'radial-gradient(circle at 50% 18%, rgba(255,255,255,0.05), transparent 28%)',
            opacity: wavesVisible ? 0.18 : 0,
          }}
        />
      </div>

      <div className="relative z-10">
        <Header introDone={headerVisible} />
        <HeroSection introDone={contentVisible} />

        <main className="relative z-10 pb-10">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
