import { ArrowUpRight, Camera, BriefcaseBusiness, GitBranch } from 'lucide-react';
import billyflin from '@/assets/img/Billyflin.jpg';
import { Reveal } from '@/components/ui/reveal';

const tags = [
  'SAP CAP',
  'CDS',
  'SAP Fiori',
  'AWS',
  'Google Cloud',
  'Machine Learning',
  'Python',
  'Automation',
  'Software Architecture',
  'Data Analysis',
];
const links = [
  { label: 'GitHub', href: 'https://github.com/Billyflin', Icon: GitBranch },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/billyflin', Icon: BriefcaseBusiness },
  { label: 'Instagram', href: 'https://www.instagram.com/billyfliin/', Icon: Camera },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-10 md:scroll-mt-32 md:px-6 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)]">
          <div className="relative h-full min-h-[320px] md:min-h-[420px]">
            <img src={billyflin} alt="Billy Martínez" className="h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,8,22,0.9))]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-white/50">Profile</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Billy Martínez</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                Me gusta la informática de verdad: producto, arquitectura, interfaces y también hardware.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 backdrop-blur md:rounded-[2rem] md:p-7" delay={0.08}>
            <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]">About</p>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-[var(--muted)] md:mt-6 md:space-y-5 md:text-lg md:leading-8">
              <p>
                Me interesa el software cuando deja de ser solo interfaz y empieza a tocar operación,
                criterios técnicos y decisiones que importan en el tiempo.
              </p>
              <p>
                Una parte importante de mi experiencia ha pasado por BeCloud, trabajando en torno a
                soluciones SAP, CAP con CDS, SAP Fiori, despliegues distribuidos y arquitectura.
              </p>
              <p>
                En paralelo también me he metido en sistemas propios como Clinipets y en exploración
                con hardware, sensores y automatización. Me gusta entender cómo se conectan las cosas,
                no quedarme solo en una capa.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[1.35rem] border border-[var(--line)] bg-[rgba(96,165,250,0.08)] p-5 md:rounded-[1.5rem] md:p-6" delay={0.12}>
              <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Base</p>
              <p className="mt-3 text-lg font-medium text-[var(--ink)]">Universidad de la Frontera</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Ingeniería Informática · Chile</p>
            </Reveal>
            <Reveal className="rounded-[1.35rem] border border-[var(--line)] bg-[var(--panel)] p-5 md:rounded-[1.5rem] md:p-6" delay={0.18}>
              <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Focus</p>
              <p className="mt-3 text-lg font-medium text-[var(--ink)]">Producto y arquitectura</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Interfaces, operación, integración y sistemas empresariales</p>
            </Reveal>
            <Reveal className="rounded-[1.35rem] border border-[var(--line)] bg-[var(--panel)] p-5 md:col-span-2 md:rounded-[1.5rem] md:p-6" delay={0.24}>
              <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Mail</p>
              <a href="mailto:billymartinezc@gmail.com" className="mt-3 block text-lg font-medium text-[var(--ink)] hover:text-[var(--accent-2)]">
                billymartinezc@gmail.com
              </a>
            </Reveal>
          </div>

          <Reveal className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel-strong)] p-5 md:rounded-[2rem] md:p-6" delay={0.28}>
            <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-white/45">Links</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {links.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
