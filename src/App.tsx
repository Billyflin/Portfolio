import { useEffect, useState } from 'react';
import { AboutSection } from '@/components/AboutSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PlainResumePage } from '@/components/PlainResumePage';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { Waves } from '@/components/ui/wave-background';

const INTRO_TIMINGS = {
  waves: 220,
  title: 950,
  dim: 3400,
  header: 4300,
  content: 4900,
} as const;

type IntroStage = 'idle' | 'waves' | 'title' | 'dim' | 'header' | 'content';

export default function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const [introStage, setIntroStage] = useState<IntroStage>('idle');

  useEffect(() => {
    if (pathname === '/plain') {
      setIntroStage('content');
      return;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReducedMotion) {
      setIntroStage('content');
      return;
    }

    const timeline: Array<[number, IntroStage]> = [
      [INTRO_TIMINGS.waves, 'waves'],
      [INTRO_TIMINGS.title, 'title'],
      [INTRO_TIMINGS.dim, 'dim'],
      [INTRO_TIMINGS.header, 'header'],
      [INTRO_TIMINGS.content, 'content'],
    ];

    const timeouts = timeline.map(([delay, stage]) =>
      window.setTimeout(() => setIntroStage(stage), delay)
    );

    return () => timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }, [pathname]);

  const wavesVisible = introStage !== 'idle';
  const titleVisible = introStage === 'title' || introStage === 'dim' || introStage === 'header' || introStage === 'content';
  const dimVisible = introStage === 'dim' || introStage === 'header' || introStage === 'content';
  const headerVisible = introStage === 'header' || introStage === 'content';
  const contentVisible = introStage === 'content';

  useEffect(() => {
    if (pathname === '/plain') return;

    const shouldLockScroll = introStage !== 'content';
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    if (shouldLockScroll) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [introStage, pathname]);

  if (pathname === '/plain') {
    return <PlainResumePage />;
  }

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
          className="absolute inset-0 transition-all duration-[2200] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: wavesVisible ? 1 : 0,
            transform: wavesVisible ? 'scale(1)' : 'scale(1.035)',
            filter: wavesVisible ? 'blur(0px)' : 'blur(10px)',
          }}
        >
        <Waves
          className="h-full w-full"
          strokeColor={dimVisible ? 'rgba(34,211,238,0.18)' : 'rgba(34,211,238,0.48)'}
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
          className="absolute inset-0 transition-all duration-[2200] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background:
              'radial-gradient(circle at 50% 18%, rgba(5,8,22,0.04) 0%, rgba(5,8,22,0.22) 24%, rgba(5,8,22,0.48) 48%, rgba(5,8,22,0.76) 72%, rgba(5,8,22,0.9) 100%)',
            clipPath: dimVisible
              ? 'circle(165% at 50% 18%)'
              : 'circle(0% at 50% 18%)',
            opacity: dimVisible ? 1 : 0,
          }}
        />
        <div
          className="absolute inset-0 transition-all duration-[2000] ease-out"
          style={{
            background:
              'radial-gradient(circle at 50% 18%, rgba(255,255,255,0.05), transparent 28%)',
            opacity: dimVisible ? 0.06 : wavesVisible ? 0.16 : 0,
          }}
        />
      </div>

      <div className="relative z-10">
        <Header introDone={headerVisible} />
        <HeroSection titleVisible={titleVisible} restVisible={contentVisible} />

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
