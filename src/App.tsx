import { PlainResumePage } from './components/PlainResumePage';

export type Locale = 'en' | 'es';

type AppProps = {
  locale?: Locale;
  page?: 'portfolio' | 'plain';
};

const credentials = [
  {
    issuer: 'AWS / Coursera',
    name: 'Cloud Technology Consultant',
    year: '2024',
    href: 'https://coursera.org/share/b6c862b295cf8f33acf3bfacf1a1f34d',
  },
  {
    issuer: 'AWS / Coursera',
    name: 'Cloud Solutions Architect',
    year: '2024',
    href: 'https://coursera.org/share/e39b52b82410a6d0327ac715e3fb971c',
  },
  {
    issuer: 'AWS Academy',
    name: 'Machine Learning Foundations',
    year: '2025',
    href: 'https://www.credly.com/earner/earned/badge/481d0f69-e4bd-4f1f-9933-301a8ba2f255',
  },
  {
    issuer: 'Google',
    name: 'Advanced Data Analytics',
    year: '2024',
    href: 'https://coursera.org/share/b44ac3af30dd271b9fc0933a3eb26f48',
  },
] as const;

const content = {
  en: {
    nav: { work: 'Selected work', experience: 'Experience', capabilities: 'Capabilities', contact: 'Let’s talk' },
    localeLabel: 'ES',
    localeHref: '/es/',
    hero: {
      status: 'Open to remote contractor roles · Full US-hours overlap',
      title: <>I turn complex business requirements <span>into software teams can ship.</span></>,
      intro: 'SAP Technical Consultant and full-stack engineer. I work directly with clients, turn ambiguity into architecture, and stay through implementation and delivery.',
      primaryCta: 'See selected work',
      resumeCta: 'Solutions CV',
      portraitAlt: 'Billy Martínez with a dog in front of a colorful mural',
      disciplines: ['Solution discovery', 'SAP BTP', 'Full-stack delivery', 'Cloud decisions', 'Client communication'],
    },
    proof: [
      { value: '2025—now', label: 'SAP Consultant at BeCloud' },
      { value: 'End to end', label: 'Discovery → architecture → delivery' },
      { value: 'B2 English', label: 'Full overlap with US working hours' },
    ],
    work: {
      kicker: '01 / Selected work',
      title: 'Evidence over buzzwords.',
      intro: 'The strongest work is often private. These cases explain the problem, my ownership, and the technical judgment without exposing client information or inventing impact.',
      cases: [
        {
          number: '01',
          kind: 'Current role · BeCloud',
          name: 'SAP solution delivery',
          headline: 'From a client conversation to a working SAP solution.',
          body: 'My contract says SAP Consultant. In practice, I work across solution architecture and full-stack delivery: requirements, interface, domain model, integration, deployment, and environment troubleshooting.',
          evidence: [
            'Run discovery with clients and translate needs into technical work',
            'Design and build across SAP BTP, Fiori, CAP/CDS and Work Zone',
            'Work with HANA, Joule, integrations and distributed deployments',
          ],
          tags: ['SAP BTP', 'Fiori', 'CAP / CDS', 'Work Zone', 'HANA', 'Joule'],
          tone: 'orange',
          label: 'Confidential client work',
        },
        {
          number: '02',
          kind: 'Architecture decision · In progress',
          name: 'Confidential cloud platform',
          headline: 'Changing the foundation when the economics stop making sense.',
          body: 'I evaluated the cost and technical fit of an existing AWS direction, proposed a clean re-platform to Google Cloud, and built enough alignment to restart on a foundation better suited to the product and team.',
          evidence: [
            'Compared cloud economics and operational tradeoffs',
            'Recommended AWS → Google Cloud and defended the decision',
            'Aligned stakeholders around “start again, but start well”',
          ],
          tags: ['AWS → GCP', 'Cost architecture', 'Technical strategy', 'Stakeholder alignment'],
          tone: 'blue',
          label: 'Anonymized · Work in progress',
        },
        {
          number: '03',
          kind: 'Independent product · Private repository',
          name: 'Clinipets',
          headline: 'A veterinary platform designed for real operational constraints.',
          body: 'A B2B2C system connecting clinics, veterinary teams, tutors, and pets. I own the product and architecture end to end—from tenant boundaries and clinical integrity to mobile/web delivery and infrastructure.',
          evidence: [
            'Conflict-safe scheduling and clinic-scoped roles',
            'Versioned clinical records, signatures, and auditable addenda',
            'Signed idempotent payments, private-file quarantine, and outbox notifications',
          ],
          tags: ['Kotlin / Spring', 'KMP', 'Next.js', 'PostgreSQL', 'R2', 'Docker'],
          tone: 'acid',
          label: 'Selected screens available in interviews',
        },
        {
          number: '04',
          kind: 'Open project · University team',
          name: 'UFRO Sustentable',
          headline: 'Turning on-campus recycling into a tested mobile experience.',
          body: 'Android application with clean-point maps, QR scanning, rewards, Firebase, and behavior-driven tests. The repository reports 89.23% line coverage and 77.88% branch coverage.',
          evidence: [
            'Kotlin application for a real university sustainability initiative',
            'QR, location, rewards, and Firebase-backed flows',
            '83 JVM tests with documented coverage and a historical Sonar quality gate',
          ],
          tags: ['Kotlin', 'Android', 'Firebase', 'BDD', 'Cucumber'],
          tone: 'paper',
          label: 'View repository',
          href: 'https://github.com/Billyflin/UfroSustentableApp',
        },
      ],
    },
    experience: {
      kicker: '02 / Experience',
      title: 'Technical depth that still works in the client room.',
      intro: 'I am most useful at the boundary between business, product, and engineering: clarifying the real problem, choosing a defensible approach, and helping deliver it.',
      roles: [
        { period: 'Jan 2025 — Present', company: 'BeCloud Consulting', title: 'SAP Consultant · Solution architecture & full-stack delivery', body: 'Client discovery, solution design, implementation, integration, and platform operations across the SAP BTP ecosystem.' },
        { period: 'Oct 2023 — Sep 2024', company: 'Happ Rent', title: 'Full-Stack Developer', body: 'Product delivery across frontend and backend in a rental-technology environment.' },
        { period: '2020 — 2026', company: 'Universidad de La Frontera', title: 'Ingeniería Informática · Final semester', body: 'Three courses remaining. Coursework completion expected in 2026.' },
      ],
    },
    capabilities: {
      kicker: '03 / Capabilities',
      title: 'Organized by responsibility, not by logo.',
      groups: [
        { index: 'A', title: 'Client & solution', items: ['Discovery', 'Requirements translation', 'Solution design', 'Technical tradeoffs', 'Stakeholder alignment'] },
        { index: 'B', title: 'SAP full stack', items: ['SAP BTP', 'CAP / CDS', 'Fiori', 'Work Zone', 'HANA', 'Joule'] },
        { index: 'C', title: 'Product & backend', items: ['TypeScript / React', 'Kotlin / Spring', 'Node.js', 'REST / OpenAPI', 'PostgreSQL', 'Multi-tenant systems'] },
        { index: 'D', title: 'Cloud & delivery', items: ['Google Cloud', 'AWS', 'Docker', 'CI/CD', 'Observability', 'Cost-aware architecture'] },
      ],
    },
    about: {
      kicker: '04 / Working style',
      quote: 'I can join the client call—and still open the codebase afterwards.',
      paragraphs: [
        'I have been programming long enough to know that tools change faster than fundamentals. My advantage is not memorizing one stack; it is understanding the whole system, making a clear decision, and learning whatever the delivery requires.',
        'I am based in Temuco, Chile, available as a remote contractor with full overlap for US working hours. Spanish is native; English is B2 and operational for technical conversations.',
      ],
      facts: [['Current focus', 'Solutions Engineering / Technical Consulting'], ['Location', 'Temuco, Chile · Remote'], ['Education', 'Ingeniería Informática · Final semester']],
    },
    credentials: { kicker: '05 / Verified learning', title: 'Cloud and data credentials.', intro: 'Credentials support the work; they are not a substitute for it. Each item links to a verifiable record.' },
    contact: { kicker: '06 / Contact', title: 'Need someone who can understand the operation and build the solution?', note: 'Remote contractor · Full US-hours overlap · Discreetly exploring selected roles', backendCv: 'Backend / Platform CV' },
  },
  es: {
    nav: { work: 'Trabajo', experience: 'Experiencia', capabilities: 'Capacidades', contact: 'Conversemos' },
    localeLabel: 'EN',
    localeHref: '/',
    hero: {
      status: 'Disponible para roles contractor remotos · Jornada completa US',
      title: <>Convierto requisitos complejos del negocio <span>en software que el equipo puede entregar.</span></>,
      intro: 'Consultor técnico SAP e ingeniero full-stack. Trabajo directamente con clientes, convierto ambigüedad en arquitectura y sigo involucrado hasta la implementación y entrega.',
      primaryCta: 'Ver trabajo',
      resumeCta: 'CV de soluciones',
      portraitAlt: 'Billy Martínez junto a un perro frente a un mural colorido',
      disciplines: ['Descubrimiento', 'SAP BTP', 'Entrega full-stack', 'Decisiones cloud', 'Comunicación con clientes'],
    },
    proof: [
      { value: '2025—hoy', label: 'Consultor SAP en BeCloud' },
      { value: 'De punta a punta', label: 'Discovery → arquitectura → entrega' },
      { value: 'Inglés B2', label: 'Jornada completa compatible con EE. UU.' },
    ],
    work: {
      kicker: '01 / Trabajo seleccionado',
      title: 'Evidencia antes que palabras de moda.',
      intro: 'El trabajo más importante suele ser privado. Estos casos explican el problema, mi responsabilidad y el criterio técnico sin exponer información del cliente ni inventar impacto.',
      cases: [
        {
          number: '01', kind: 'Rol actual · BeCloud', name: 'Entrega de soluciones SAP', headline: 'Desde una conversación con el cliente hasta una solución SAP funcionando.',
          body: 'Mi contrato dice Consultor SAP. En la práctica trabajo en arquitectura de soluciones y entrega full-stack: requisitos, interfaz, modelo de dominio, integraciones, despliegue y resolución de problemas del ambiente.',
          evidence: ['Hago discovery con clientes y traduzco necesidades en trabajo técnico', 'Diseño y construyo con SAP BTP, Fiori, CAP/CDS y Work Zone', 'Trabajo con HANA, Joule, integraciones y despliegues distribuidos'],
          tags: ['SAP BTP', 'Fiori', 'CAP / CDS', 'Work Zone', 'HANA', 'Joule'], tone: 'orange', label: 'Trabajo confidencial',
        },
        {
          number: '02', kind: 'Decisión de arquitectura · En curso', name: 'Plataforma cloud confidencial', headline: 'Cambiar la base cuando la economía deja de tener sentido.',
          body: 'Evalué el costo y encaje técnico de una dirección existente en AWS, propuse una migración limpia hacia Google Cloud y conseguí el alineamiento necesario para reiniciar sobre una base más adecuada para el producto y el equipo.',
          evidence: ['Comparé economía cloud y costos operacionales', 'Recomendé AWS → Google Cloud y defendí la decisión', 'Alineé a los involucrados en torno a “partir de nuevo, pero partir bien”'],
          tags: ['AWS → GCP', 'Arquitectura de costos', 'Estrategia técnica', 'Alineamiento'], tone: 'blue', label: 'Anonimizado · En curso',
        },
        {
          number: '03', kind: 'Producto propio · Repositorio privado', name: 'Clinipets', headline: 'Una plataforma veterinaria diseñada para restricciones operacionales reales.',
          body: 'Sistema B2B2C que conecta clínicas, equipos veterinarios, tutores y mascotas. Me hago cargo del producto y la arquitectura de punta a punta: límites entre tenants, integridad clínica, aplicaciones e infraestructura.',
          evidence: ['Agenda sin conflictos y roles aislados por clínica', 'Fichas versionadas, firmas y correcciones auditables', 'Pagos firmados e idempotentes, cuarentena de archivos y notificaciones outbox'],
          tags: ['Kotlin / Spring', 'KMP', 'Next.js', 'PostgreSQL', 'R2', 'Docker'], tone: 'acid', label: 'Capturas seleccionadas disponibles en entrevistas',
        },
        {
          number: '04', kind: 'Proyecto abierto · Equipo universitario', name: 'UFRO Sustentable', headline: 'Convertir el reciclaje universitario en una experiencia móvil probada.',
          body: 'Aplicación Android con mapa de puntos limpios, lectura QR, recompensas, Firebase y pruebas BDD. El repositorio reporta 89,23% de cobertura de líneas y 77,88% de ramas.',
          evidence: ['Aplicación Kotlin para una iniciativa real de sustentabilidad universitaria', 'Flujos de QR, ubicación, recompensas y Firebase', '83 pruebas JVM con cobertura documentada y quality gate histórico de Sonar'],
          tags: ['Kotlin', 'Android', 'Firebase', 'BDD', 'Cucumber'], tone: 'paper', label: 'Ver repositorio', href: 'https://github.com/Billyflin/UfroSustentableApp',
        },
      ],
    },
    experience: {
      kicker: '02 / Experiencia', title: 'Profundidad técnica que también funciona frente al cliente.', intro: 'Aporto más valor en el límite entre negocio, producto e ingeniería: aclarando el problema real, eligiendo un enfoque defendible y ayudando a entregarlo.',
      roles: [
        { period: 'Ene 2025 — Actualidad', company: 'BeCloud Consulting', title: 'Consultor SAP · Arquitectura de soluciones y entrega full-stack', body: 'Discovery con clientes, diseño, implementación, integración y operación de plataforma dentro del ecosistema SAP BTP.' },
        { period: 'Oct 2023 — Sep 2024', company: 'Happ Rent', title: 'Full-Stack Developer', body: 'Entrega de producto en frontend y backend dentro de un entorno tecnológico de arriendo.' },
        { period: '2020 — 2026', company: 'Universidad de La Frontera', title: 'Ingeniería Informática · Último semestre', body: 'Tres ramos pendientes. Finalización académica esperada durante 2026.' },
      ],
    },
    capabilities: {
      kicker: '03 / Capacidades', title: 'Ordenadas por responsabilidad, no por logo.',
      groups: [
        { index: 'A', title: 'Cliente y solución', items: ['Discovery', 'Traducción de requisitos', 'Diseño de soluciones', 'Decisiones técnicas', 'Alineamiento de stakeholders'] },
        { index: 'B', title: 'SAP full stack', items: ['SAP BTP', 'CAP / CDS', 'Fiori', 'Work Zone', 'HANA', 'Joule'] },
        { index: 'C', title: 'Producto y backend', items: ['TypeScript / React', 'Kotlin / Spring', 'Node.js', 'REST / OpenAPI', 'PostgreSQL', 'Sistemas multi-tenant'] },
        { index: 'D', title: 'Cloud y entrega', items: ['Google Cloud', 'AWS', 'Docker', 'CI/CD', 'Observabilidad', 'Arquitectura consciente de costos'] },
      ],
    },
    about: {
      kicker: '04 / Forma de trabajo', quote: 'Puedo entrar a la reunión con el cliente y después abrir el código.',
      paragraphs: ['Llevo suficiente tiempo programando para saber que las herramientas cambian más rápido que los fundamentos. Mi ventaja no es memorizar un stack: es entender el sistema completo, tomar una decisión clara y aprender lo que la entrega necesite.', 'Vivo en Temuco, Chile, y estoy disponible como contractor remoto con jornada completa compatible con Estados Unidos. Español nativo; inglés B2 operativo para conversaciones técnicas.'],
      facts: [['Enfoque actual', 'Solutions Engineering / Consultoría técnica'], ['Ubicación', 'Temuco, Chile · Remoto'], ['Formación', 'Ingeniería Informática · Último semestre']],
    },
    credentials: { kicker: '05 / Aprendizaje verificable', title: 'Credenciales de cloud y datos.', intro: 'Las credenciales respaldan el trabajo; no lo reemplazan. Cada elemento enlaza a un registro verificable.' },
    contact: { kicker: '06 / Contacto', title: '¿Necesitas a alguien que entienda la operación y construya la solución?', note: 'Contractor remoto · Jornada completa US · Explorando oportunidades de forma discreta', backendCv: 'CV Backend / Platform' },
  },
} as const;

function Header({ locale }: { locale: Locale }) {
  const t = content[locale];
  return <header className="site-header"><a className="brand" href="#top" aria-label={locale === 'en' ? 'Go to the top' : 'Ir al inicio'}>BM<span>/26</span></a><nav className="desktop-nav" aria-label={locale === 'en' ? 'Primary navigation' : 'Navegación principal'}><a href="#work">{t.nav.work}</a><a href="#experience">{t.nav.experience}</a><a href="#capabilities">{t.nav.capabilities}</a></nav><div className="header-actions"><a className="locale-link" href={t.localeHref} lang={locale === 'en' ? 'es' : 'en'}>{t.localeLabel}</a><a className="header-cta" href="mailto:billymartinezc@gmail.com">{t.nav.contact}<span className="icon-arrow" aria-hidden="true">↗</span></a></div></header>;
}

function Hero({ locale }: { locale: Locale }) {
  const t = content[locale];
  const resumeHref = locale === 'en' ? '/Billy_Martinez_Resume_Solutions_EN.pdf' : '/Billy_Martinez_CV_Soluciones_ES.pdf';
  return <><section className="hero" id="top"><div className="hero-copy"><div className="eyebrow hero-enter hero-enter--1"><span className="status-dot" aria-hidden="true" />{t.hero.status}</div><h1 className="hero-title hero-enter hero-enter--2">{t.hero.title}</h1><div className="hero-bottom hero-enter hero-enter--3"><p>{t.hero.intro}</p><div className="hero-actions"><a className="button button--primary" href="#work">{t.hero.primaryCta}<span className="icon-arrow" aria-hidden="true">↘</span></a><a className="text-link" href={resumeHref} target="_blank" rel="noreferrer">{t.hero.resumeCta}<span className="icon-arrow" aria-hidden="true">↗</span></a></div></div></div><figure className="portrait hero-enter hero-enter--4"><picture><source srcSet="/billy-martinez-480.webp 480w, /billy-martinez-960.webp 960w" sizes="(max-width: 760px) 100vw, 44vw" type="image/webp" /><img src="/billy-martinez-960.webp" alt={t.hero.portraitAlt} width="960" height="640" fetchPriority="high" decoding="async" /></picture><figcaption><span>Billy Martínez</span><span><span aria-hidden="true">●</span> Temuco, CL</span></figcaption></figure><div className="discipline-strip" aria-label={locale === 'en' ? 'Areas of work' : 'Áreas de trabajo'}>{t.hero.disciplines.map((item) => <span key={item}>{item}</span>)}</div></section><section className="proof-strip" aria-label={locale === 'en' ? 'Profile snapshot' : 'Resumen del perfil'}>{t.proof.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</section></>;
}

function WorkSection({ locale }: { locale: Locale }) {
  const t = content[locale].work;
  return <section className="section work-section" id="work"><div className="section-heading"><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2><p className="section-intro">{t.intro}</p></div><div className="case-list">{t.cases.map((item) => <article className={`case-study case-study--${item.tone}`} key={item.number}><div className="case-meta"><span>{item.number}</span><span>{item.kind}</span></div><div className="case-body"><div className="case-copy"><p className="case-name">{item.name}</p><h3>{item.headline}</h3><p>{item.body}</p></div><ul className="case-evidence" aria-label={locale === 'en' ? `Evidence from ${item.name}` : `Evidencia de ${item.name}`}>{item.evidence.map((point) => <li key={point}>{point}</li>)}</ul></div><div className="case-footer"><ul aria-label={locale === 'en' ? `Technologies used in ${item.name}` : `Tecnologías utilizadas en ${item.name}`}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>{'href' in item ? <a href={item.href} target="_blank" rel="noreferrer">{item.label}<span className="icon-arrow" aria-hidden="true">↗</span></a> : <span className="private-label">{item.label}</span>}</div></article>)}</div></section>;
}

function ExperienceSection({ locale }: { locale: Locale }) {
  const t = content[locale].experience;
  return <section className="experience-section" id="experience"><div className="experience-lead"><p className="section-kicker section-kicker--light">{t.kicker}</p><h2>{t.title}</h2><p>{t.intro}</p></div><div className="timeline">{t.roles.map((role) => <article key={role.company}><p>{role.period}</p><div><h3>{role.company}</h3><strong>{role.title}</strong><p>{role.body}</p></div></article>)}</div></section>;
}

function CapabilitiesSection({ locale }: { locale: Locale }) {
  const t = content[locale].capabilities;
  return <section className="section stack-section" id="capabilities"><div className="section-heading section-heading--compact"><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2></div><div className="skill-grid">{t.groups.map((group) => <article className="skill-group" key={group.index}><span className="skill-index">{group.index}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>;
}

function AboutSection({ locale }: { locale: Locale }) {
  const t = content[locale].about;
  return <section className="about-section" id="about"><div className="about-lead"><p className="section-kicker section-kicker--light">{t.kicker}</p><blockquote>“{t.quote}”</blockquote></div><div className="about-copy">{t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<dl className="profile-facts">{t.facts.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl></div></section>;
}

function CredentialsSection({ locale }: { locale: Locale }) {
  const t = content[locale].credentials;
  return <section className="section credentials-section" id="credentials"><div className="credentials-heading"><div><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2></div><p>{t.intro}</p></div><div className="credential-list">{credentials.map((credential) => <a href={credential.href} target="_blank" rel="noreferrer" key={credential.name}><span className="credential-issuer">{credential.issuer}</span><strong>{credential.name}</strong><span className="credential-year">{credential.year}</span><span className="icon-arrow" aria-hidden="true">↗</span></a>)}</div></section>;
}

function ContactSection({ locale }: { locale: Locale }) {
  const t = content[locale].contact;
  return <footer className="contact-section" id="contact"><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2><a className="contact-email" href="mailto:billymartinezc@gmail.com">billymartinezc@gmail.com<span className="icon-arrow" aria-hidden="true">↗</span></a><p className="contact-note">{t.note}</p><div className="footer-row"><p>© {new Date().getFullYear()} Billy Martínez</p><div className="social-links"><a href="https://github.com/Billyflin" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/billyflin" target="_blank" rel="noreferrer">LinkedIn</a><a href={locale === 'en' ? '/Billy_Martinez_Resume_Backend_EN.pdf' : '/Billy_Martinez_CV_Backend_ES.pdf'} target="_blank" rel="noreferrer">{t.backendCv}</a><a href="mailto:billymartinezc@gmail.com">Email</a></div></div></footer>;
}

export default function App({ locale = 'en', page = 'portfolio' }: AppProps) {
  if (page === 'plain') return <PlainResumePage locale={locale} />;
  return <><a className="skip-link" href="#main-content">{locale === 'en' ? 'Skip to content' : 'Saltar al contenido'}</a><Header locale={locale} /><main id="main-content"><Hero locale={locale} /><WorkSection locale={locale} /><ExperienceSection locale={locale} /><CapabilitiesSection locale={locale} /><AboutSection locale={locale} /><CredentialsSection locale={locale} /></main><ContactSection locale={locale} /></>;
}
