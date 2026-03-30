import {
  BarChart3,
  Cloud,
  Database,
  ExternalLink,
  Layers3,
  LineChart,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/ui/reveal';

const featuredCertifications = [
  {
    name: 'AWS Cloud Technology Consultant',
    date: 'Diciembre 2024',
    description: 'Ruta orientada a implementación, soporte técnico y arquitectura de workloads sobre AWS.',
    imageSrc: '/AWS-CTC.png',
    imageAlt: 'Certificado AWS Cloud Technology Consultant',
    link: 'https://coursera.org/share/b6c862b295cf8f33acf3bfacf1a1f34d',
    badgeImg: null,
    badgeAlt: '',
    badge: '',
    skills: ['AWS', 'Architecture', 'DevOps', 'Python', 'Technical Support'],
    Icon: Cloud,
  },
  {
    name: 'AWS Cloud Solutions Architect',
    date: 'Diciembre 2024',
    description: 'Ruta centrada en arquitectura distribuida, diseño de soluciones y preparación técnica sobre AWS.',
    imageSrc: '/AWS-CSA.png',
    imageAlt: 'Certificado AWS Cloud Solutions Architect',
    link: 'https://coursera.org/share/e39b52b82410a6d0327ac715e3fb971c',
    badgeImg: null,
    badgeAlt: '',
    badge: '',
    skills: ['AWS', 'Data Lakes', 'Architecture', 'Certification Prep'],
    Icon: Cloud,
  },
  {
    name: 'AWS Academy Graduate - Machine Learning Foundations',
    date: 'Septiembre 2025',
    description: 'Badge orientado a fundamentos de machine learning sobre AWS y bases de inteligencia artificial aplicada.',
    imageSrc: '/AWS-MLF.png',
    imageAlt: 'Badge AWS Academy Graduate - Machine Learning Foundations',
    link: 'https://www.credly.com/earner/earned/badge/481d0f69-e4bd-4f1f-9933-301a8ba2f255',
    badgeImg: null,
    badgeAlt: '',
    badge: '',
    skills: ['Machine Learning', 'AI', 'AWS', 'AWS Cloud Computing', 'ML Foundations'],
    Icon: BarChart3,
  },
  {
    name: 'Google Advanced Data Analytics',
    date: 'Noviembre 2024',
    description: 'Programa profesional en machine learning, estadística y modelado predictivo con Python.',
    imageSrc: '/CourseraGAD.png',
    imageAlt: 'Certificado Google Advanced Data Analytics',
    link: 'https://coursera.org/share/b44ac3af30dd271b9fc0933a3eb26f48',
    badgeImg: '/google-advanced-data-analytics-certificate.png',
    badgeAlt: 'Insignia Google Advanced Data Analytics',
    badge: 'https://www.credly.com/badges/d8079709-e5f5-404f-84b1-fdf90366e698/public_url',
    skills: ['Data Science', 'Machine Learning', 'Python', 'Statistics', 'Visualization'],
    Icon: LineChart,
  },
  {
    name: 'Google Data Analytics',
    date: 'Noviembre 2024',
    description: 'Certificado profesional para limpieza, análisis y visualización de datos con SQL y R.',
    imageSrc: '/CourseraGD.png',
    imageAlt: 'Certificado Google Data Analytics',
    link: 'https://coursera.org/share/cd01808e79ade1be04b6f4fa30887265',
    badgeImg: '/google-data-analytics-professional-certificate.2.png',
    badgeAlt: 'Insignia Google Data Analytics',
    badge: 'https://www.credly.com/badges/ab1b6b6d-f85f-4aff-9b93-480a149550e8/public_url',
    skills: ['Data Analysis', 'SQL', 'R', 'Visualization', 'Spreadsheets'],
    Icon: Database,
  },
];

const highlightedSubcerts = [
  { name: 'Automation in the AWS Cloud', Icon: Cloud, link: 'https://www.coursera.org/account/accomplishments/verify/G45VH5JF5QCA' },
  { name: 'Architecting Solutions on AWS', Icon: Cloud, link: 'https://www.coursera.org/account/accomplishments/verify/K496NT6SYNWO' },
  { name: 'The Nuts and Bolts of Machine Learning', Icon: BarChart3, link: 'https://www.coursera.org/account/accomplishments/verify/3UNP8RK9UP6U' },
  { name: 'The Power of Statistics', Icon: LineChart, link: 'https://www.coursera.org/account/accomplishments/verify/9UPK84IDGE6O' },
  { name: 'Foundations of Data Science', Icon: Database, link: 'https://www.coursera.org/account/accomplishments/verify/1TYJ2507R87S' },
  { name: 'Process Data from Dirty to Clean', Icon: Layers3, link: 'https://www.coursera.org/account/accomplishments/verify/REAQS9WTLELF' },
];

const supportingCertifications = [
  {
    name: 'Codecademy - CSS',
    date: 'Agosto 2023',
    link: 'https://www.codecademy.com/profiles/Billyflin/certificates/9da84567e8ff414b91f0b23d917fb42f',
  },
  {
    name: 'Codecademy - HTML',
    date: 'Agosto 2023',
    link: 'https://www.codecademy.com/profiles/Billyflin/certificates/c6f2b55a48f440a6a876686f7487e1a7',
  },
  {
    name: 'Google Cloud Fundamentals: Core Infrastructure',
    date: 'Julio 2022',
    link: 'https://www.coursera.org/account/accomplishments/verify/KR6EN4R7CGDJ',
  },
];

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let loaded = false;
    const loadCredly = () => {
      if (loaded || document.querySelector('script[data-credly="true"]')) return;
      loaded = true;
      const script = document.createElement('script');
      script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      script.dataset.credly = 'true';
      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadCredly();
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="scroll-mt-28 px-4 py-10 md:scroll-mt-32 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mb-10 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Credentials</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ink)] md:text-6xl">
              Certificaciones que sostienen el lado técnico del portfolio.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--muted)]">
            Priorizo cloud y análisis de datos porque son las credenciales que mejor muestran profundidad técnica.
          </p>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-2">
          {featuredCertifications.map((cert, index) => {
            const Icon = cert.Icon;
            return (
              <Reveal
                key={cert.name}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:rounded-[1.75rem]"
                delay={index * 0.08}
              >
                <div className="grid h-full md:grid-cols-[0.95fr_1.05fr]">
                  <div className="border-b border-[var(--line)] bg-[rgba(15,23,42,0.55)] p-4 md:border-b-0 md:border-r md:p-5">
                    <div className="flex aspect-[1.22/1] items-center justify-center rounded-[1.25rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-3 md:p-4">
                      <img
                        src={cert.imageSrc}
                        alt={cert.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full w-full rounded-[0.9rem] object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono-ui text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{cert.date}</p>
                        <h3 className="mt-3 text-xl font-semibold leading-tight text-[var(--ink)] md:text-3xl">{cert.name}</h3>
                      </div>
                      {cert.badgeImg ? (
                        <a
                          href={cert.badge}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1rem] border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-2"
                        >
                          <img
                            src={cert.badgeImg}
                            alt={cert.badgeAlt}
                            loading="lazy"
                            decoding="async"
                            className="max-h-full w-full object-contain"
                          />
                        </a>
                      ) : (
                        <Icon className="h-8 w-8 shrink-0 text-[var(--accent-2)]" />
                      )}
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[var(--muted)] md:text-base">{cert.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.5)] px-3 py-2 text-[11px] font-medium tracking-wide text-[var(--ink)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-4">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(96,165,250,0.12)] px-4 py-3 text-sm font-semibold text-[var(--ink)]"
                      >
                        Ver certificado
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 md:rounded-[1.75rem] md:p-6" delay={0.08}>
            <h3 className="text-xl font-semibold text-[var(--ink)] md:text-2xl">Subcredenciales destacadas</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlightedSubcerts.map((sub) => {
                const Icon = sub.Icon;
                return (
                  <a
                    key={sub.name}
                    href={sub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.1rem] border border-[var(--line)] bg-[rgba(15,23,42,0.48)] px-4 py-4 text-sm leading-6 text-[var(--ink)] transition-colors hover:border-[var(--line-strong)]"
                  >
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>{sub.name}</div>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel-strong)] p-5 md:rounded-[1.75rem] md:p-6" delay={0.14}>
            <h3 className="text-xl font-semibold text-[var(--ink)] md:text-2xl">Complementarias</h3>
            <div className="mt-6 space-y-4">
              {supportingCertifications.map((cert) => (
                <article key={cert.name} className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-[var(--ink)]">{cert.name}</h4>
                      <p className="mt-1 text-sm text-[var(--muted)]">{cert.date}</p>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
                    >
                      <ExternalLink className="h-4 w-4 text-[var(--ink)]" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
