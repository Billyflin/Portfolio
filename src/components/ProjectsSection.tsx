import { ArrowUpRight, Building2, Rocket, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

const workAreas = [
  {
    title: 'BeCloud',
    description:
      'Mi experiencia laboral más importante ha sido en BeCloud, una empresa que vende soluciones SAP. Ahí he ido pasando de desarrollar interfaces a entender mejor arquitectura, preventa y decisiones de plataforma.',
    points: ['SAP CAP + CDS', 'SAP Fiori', 'Despliegues distribuidos', 'Balanceo de carga'],
    Icon: Building2,
  },
  {
    title: 'Clinipets',
    description:
      'Es uno de los sistemas donde más he trabajado. Nació para la veterinaria de mi pareja y terminó creciendo bastante en módulos, automatizaciones e integración con servicios reales.',
    points: ['Agenda y fichas', 'Stock e insumos', 'WhatsApp + recordatorios', 'OTP + Google Cloud + Mistral'],
    Icon: ShieldCheck,
  },
  {
    title: 'Ingeniería por hobby',
    description:
      'Fuera del trabajo sigo metido en informática igual. Me gusta explorar hardware, circuitos y automatización con Seeeduino XIAO C6 y módulos de todo tipo, porque disfruto entender cómo se conectan las cosas.',
    points: ['Seeeduino XIAO C6', 'Partículas de aire', 'Regadores automáticos', 'Presencia y cámaras WiFi'],
    Icon: Rocket,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-10 md:scroll-mt-32 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mb-10 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ink)] md:text-6xl">
              Hoy me representa más hablar del tipo de sistemas que he construido.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--muted)]">
            Prefiero contar en qué tipo de sistemas he trabajado y qué cosas he ido aprendiendo, antes que llenar esto con proyectos antiguos que ya no me representan mucho.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {workAreas.map(({ title, description, points, Icon }, index) => (
            <Reveal
              key={title}
              className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.14)] md:rounded-[1.75rem] md:p-6"
              delay={index * 0.08}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[rgba(34,211,238,0.08)]">
                  <Icon className="h-5 w-5 text-[var(--accent-2)]" />
                </span>
                <span className="rounded-full border border-[var(--line)] px-3 py-1 font-mono-ui text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] md:text-[11px] md:tracking-[0.22em]">
                  Current level
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[var(--ink)] md:mt-6 md:text-2xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {points.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.48)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--ink)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel-strong)] p-5 md:rounded-[1.75rem] md:p-8" delay={0.12}>
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-white/45">Contexto</p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)] md:text-3xl">
                No todo lo importante puede publicarse.
              </h3>
            </div>
            <div className="space-y-4 text-sm leading-7 text-[var(--muted)] md:text-base">
              <p>
                Varias de las soluciones en las que he trabajado son internas, empresariales o demasiado ligadas a operación real como para convertirlas en “case study” público sin empezar a exagerar.
              </p>
              <p>
                Por eso prefiero que este portfolio muestre mejor hacia dónde estoy apuntando: producto serio, arquitectura, automatización y sistemas que realmente se usan.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/billyflin"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(34,211,238,0.08)] px-4 py-3 text-sm font-semibold text-[var(--ink)]"
                >
                  Ver experiencia en LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
