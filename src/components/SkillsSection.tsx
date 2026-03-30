import { Reveal } from '@/components/ui/reveal';

const skillGroups = [
  {
    name: 'Lenguajes',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'C++'],
  },
  {
    name: 'Frontend y Frameworks',
    items: ['React', 'Vue.js', 'Tailwind CSS', 'Node.js', 'Spring'],
  },
  {
    name: 'Cloud y Datos',
    items: ['AWS', 'Google Cloud', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    name: 'Tooling',
    items: ['Docker', 'Git', 'CI/CD', 'Cloudflare', 'Arduino', 'GitHub'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 px-4 py-10 md:scroll-mt-32 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Stack</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ink)] md:text-6xl">
              Tecnología organizada como sistema, no como nube de badges.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--muted)]">
            El objetivo aquí es comunicar orden, amplitud y foco. Menos ruido visual, mejor lectura.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.name}
              className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.14)] md:rounded-[1.75rem] md:p-6"
              delay={index * 0.08}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)] md:text-2xl">{group.name}</h3>
                <div className="rounded-full border border-[var(--line)] px-3 py-1 font-mono-ui text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] md:text-[11px] md:tracking-[0.24em]">
                  {group.items.length} items
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5 md:mt-6 md:gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.46)] px-3.5 py-2.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--line-strong)] hover:bg-[rgba(96,165,250,0.08)] md:px-4 md:py-3"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
