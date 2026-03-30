import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrambleText } from '@/components/ui/text-scramble';
import { cn } from '@/lib/utils';

const stats = [
  { kicker: 'Enfoque', value: 'Producto', label: 'Sistemas pensados para operar bien, no solo para verse bien.' },
  { kicker: 'Escala', value: 'Arquitectura', label: 'Me interesa cómo se conectan las piezas y cómo sostenerlas con criterio.' },
  { kicker: 'Curiosidad', value: 'Hardware', label: 'También exploro sensores, automatización y módulos físicos por interés real.' },
];

type HeroSectionProps = {
  titleVisible: boolean;
  restVisible: boolean;
};

export function HeroSection({ titleVisible, restVisible }: HeroSectionProps) {
  return (
    <section id="top" className="relative px-4 pb-10 pt-24 md:px-6 md:pb-18 md:pt-36">
      <div
        className={cn(
          'relative z-10 mx-auto w-full max-w-7xl transition-all duration-[1200] ease-out',
          titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        )}
      >
        <div className="max-w-5xl">
          <motion.div
            initial={false}
            animate={restVisible ? { opacity: 1, y: 0, height: 'auto', marginBottom: 24 } : { opacity: 0, y: 18, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.2, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
            className="inline-flex max-w-full items-center gap-3 rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.55)] px-3 py-2 backdrop-blur md:px-4"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]" />
            <span className="truncate font-mono-ui text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] sm:text-xs sm:tracking-[0.22em]">
              Diseño visual + ejecución técnica
            </span>
          </motion.div>

          <div className="space-y-5 md:space-y-6">
            <motion.p
              initial={false}
              animate={restVisible ? { opacity: 1, y: 0, height: 'auto' } : { opacity: 0, y: 16, height: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
              className="font-mono-ui text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.24em] md:tracking-[0.32em]"
            >
              Billy Martínez / Software / Producto / Arquitectura
            </motion.p>
            <h1 className="max-w-4xl font-display text-[2rem] font-semibold leading-[1] tracking-[-0.05em] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-[5.35rem]">
              Me interesa diseñar y construir
              <ScrambleText
                as="span"
                className="mt-2 block max-w-[16ch] text-[var(--accent-2)] sm:max-w-[18ch] md:mt-1 md:max-w-[19ch]"
                phrases={[
                  'software que ordene operación real.',
                  'interfaces claras, sobrias y firmes.',
                  'sistemas que unan negocio y tecnología.',
                  'productos que resistan el paso del tiempo.',
                ]}
                interval={4200}
                stableWidth
              />
            </h1>
            <motion.p
              initial={false}
              animate={restVisible ? { opacity: 1, y: 0, height: 'auto' } : { opacity: 0, y: 18, height: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
              className="max-w-2xl text-[15px] leading-7 text-[var(--muted)] md:text-xl md:leading-8"
            >
              Este portfolio resume una forma de pensar el software: diseño con intención,
              criterio técnico y gusto por los sistemas completos. Me interesan los productos
              donde interfaz, operación, automatización y arquitectura conviven de verdad.
            </motion.p>
          </div>

          <motion.div
            initial={false}
            animate={restVisible ? { opacity: 1, y: 0, height: 'auto', marginTop: 24 } : { opacity: 0, y: 24, height: 0, marginTop: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 md:px-7 md:py-4 md:tracking-[0.16em]"
            >
              Explorar Perfil
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/billyflin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(96,165,250,0.1)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)] transition-transform duration-200 hover:-translate-y-0.5 md:px-7 md:py-4 md:tracking-[0.16em]"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={false}
            animate={restVisible ? { opacity: 1, y: 0, height: 'auto', marginTop: 32 } : { opacity: 0, y: 24, height: 0, marginTop: 0 }}
            transition={{ duration: 0.95, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
            className="hidden max-w-3xl gap-3 sm:grid-cols-3 md:grid md:gap-4"
          >
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-4 backdrop-blur md:rounded-[1.75rem] md:p-5"
              >
                <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{stat.kicker}</p>
                <p className="mt-3 text-xl font-semibold tracking-tight text-[var(--ink)] md:mt-4 md:text-2xl">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className={cn(
          'relative z-10 mx-auto w-full max-w-7xl transition-all duration-[1200] ease-out md:mt-12',
          restVisible ? 'mt-8 translate-y-0 opacity-100 md:mt-12' : 'mt-0 translate-y-2 opacity-0'
        )}
      >
        <div className="grid gap-3 rounded-[1.35rem] border border-[var(--line)] bg-[rgba(7,11,26,0.42)] p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr_1fr] md:gap-4 md:rounded-[2rem] md:p-6">
          <div className="rounded-[1rem] border border-white/8 bg-white/[0.025] p-4 md:rounded-[1.35rem]">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-white/40">Approach</p>
            <p className="mt-3 text-base font-medium text-white md:text-lg">
              Diseño y desarrollo con foco en uso real, mantenimiento y claridad.
            </p>
          </div>
          <div className="rounded-[1rem] border border-white/8 bg-white/[0.025] p-4 md:rounded-[1.35rem]">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-white/40">Signals</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              SAP, Clinipets, Google Cloud, IA autohosteada y hardware como parte de la misma curiosidad técnica.
            </p>
          </div>
          <div className="hidden rounded-[1rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.02))] p-4 md:block md:rounded-[1.35rem]">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-cyan-200/60">Scroll</p>
            <p className="mt-3 text-sm leading-7 text-white/85">
              Más abajo está el contexto: experiencia, sistemas, stack y credenciales sin rellenar por rellenar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
