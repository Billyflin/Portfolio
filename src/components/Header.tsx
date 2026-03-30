import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', text: 'Perfil' },
  { href: '#projects', text: 'Proyectos' },
  { href: '#skills', text: 'Stack' },
  { href: '#certifications', text: 'Credenciales' },
];

type HeaderProps = {
  introDone: boolean;
};

export function Header({ introDone }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        const sections = ['certifications', 'skills', 'projects', 'about'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 180) {
            setActiveSection(section);
            break;
          }
        }
        ticking = false;
      });
    };

    const syncScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['certifications', 'skills', 'projects', 'about'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 180) {
          setActiveSection(section);
          break;
        }
      }
    };

    syncScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-[1400] ease-out',
        scrolled ? 'py-3' : 'py-5',
        introDone ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
      )}
    >
      <nav className="mx-auto flex w-[min(1200px,calc(100%-1rem))] items-center justify-between rounded-full border border-[var(--line)] bg-[rgba(5,8,22,0.72)] px-3 py-2.5 shadow-[0_10px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl md:w-[min(1200px,calc(100%-1.5rem))] md:px-6 md:py-3">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 md:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[rgba(96,165,250,0.12)] md:h-10 md:w-10">
            <Sparkles className="h-4 w-4 text-[var(--accent-2)]" />
          </div>
          <div className="min-w-0">
            <p className="truncate font-mono-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] md:text-xs md:tracking-[0.28em]">Billyflin</p>
            <p className="truncate text-xs font-semibold text-[var(--ink)] md:text-sm">Portfolio</p>
          </div>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.55)] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm transition-colors',
                activeSection === item.href.slice(1)
                  ? 'bg-white text-slate-950'
                  : 'text-[var(--muted)] hover:bg-white/10 hover:text-[var(--ink)]'
              )}
            >
              {item.text}
            </a>
          ))}
        </div>

        <a
          href="/Billy_Martinez_CV.pdf"
          target="_blank"
          className="hidden items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(96,165,250,0.12)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[rgba(96,165,250,0.18)] md:inline-flex"
          rel="noreferrer"
        >
          CV
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.55)] md:hidden"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="h-5 w-5 text-[var(--ink)]" /> : <Menu className="h-5 w-5 text-[var(--ink)]" />}
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div className="mx-auto mt-3 w-[min(1200px,calc(100%-1rem))] rounded-[1.5rem] border border-[var(--line)] bg-[rgba(5,8,22,0.92)] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-[var(--ink)] hover:bg-white/5"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
