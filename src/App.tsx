import { PlainResumePage } from './components/PlainResumePage';

export type Locale = 'en' | 'es';

type AppProps = {
  locale?: Locale;
  page?: 'portfolio' | 'plain' | 'notFound';
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
      intro: 'SAP Technical Consultant and full-stack engineer. I refine functional requirements into architecture, improve flows and UX within SAP standards, and stay through implementation, testing, and delivery.',
      primaryCta: 'See selected work',
      resumeCta: 'Solutions CV',
      portraitAlt: 'Billy Martínez with Oliver outdoors in Temuco',
      disciplines: ['Requirement refinement', 'SAP BTP', 'Full-stack delivery', 'Quality automation', 'Technical coordination'],
    },
    proof: [
      { value: '2025—now', label: 'SAP Consultant at BeCloud' },
      { value: 'End to end', label: 'Requirements → architecture → build → QA' },
      { value: 'B2 English', label: 'Full overlap with US working hours' },
    ],
    work: {
      kicker: '01 / Selected work',
      title: 'Evidence over buzzwords.',
      intro: 'The strongest work is often private. These cases explain the problem, my ownership, and the technical judgment without exposing client information or inventing impact.',
      cases: [
        {
          number: '01',
          kind: 'Current role · Confidential work',
          name: 'SAP solution delivery',
          headline: 'From refined requirements to a testable SAP delivery.',
          body: 'My contract says SAP Consultant. In practice, I turn functional requirements into architecture and full-stack delivery: interface and UX, domain model, integration, deployment, test automation, and environment troubleshooting.',
          evidence: [
            'Refine requirements with the functional consultant and propose architecture, flow, and UX improvements',
            'Design and build across SAP BTP, Fiori, CAP/CDS, Work Zone, HANA, and Joule',
            'Introduced automated testing and a QA stage beyond direct dev-to-production fixes',
            'Independent public CAP/Fiori reference with 12 service tests covering role authorization, concurrent stock protection, and resilient OData integration, plus green CI',
          ],
          tags: ['SAP BTP', 'Fiori / UI5', 'CAP / CDS', 'Work Zone', 'Automated testing', 'QA delivery'],
          tone: 'orange',
          label: 'Inspect independent CAP reference',
          href: 'https://github.com/Billyflin/sap-cap-fiori-btp',
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
          architecture: {
            summary: 'View simplified system map',
            title: 'Clinipets public architecture map',
            layers: [
              { label: 'Clients', items: ['KMP mobile', 'Next.js web'] },
              { label: 'Domain API', items: ['Kotlin / Spring', 'Multi-tenant boundaries', 'Clinic-scoped roles'] },
              { label: 'Data & services', items: ['PostgreSQL', 'R2', 'Idempotent payments', 'Outbox notifications'] },
            ],
            transversal: { label: 'Cross-cutting trust', items: ['Audit trail', 'Versioned clinical records', 'Clinical integrity'] },
          },
        },
        {
          number: '04',
          kind: 'Independent reference · Open source',
          name: 'Grounded Knowledge Assistant',
          headline: 'Making AI answers fail closed when the evidence is missing.',
          body: 'A deliberately small TypeScript RAG reference that makes retrieval, source grounding, citation validation, and safe refusal behavior inspectable and testable.',
          evidence: [
            '12 automated tests, including prompt-like source content and invented citations',
            '100% hit@3, support/refusal accuracy, and citation validity on the committed fixture evaluation',
            'Zero-key deterministic CI plus an optional server-only OpenAI provider boundary',
          ],
          tags: ['Next.js', 'TypeScript', 'RAG', 'OpenAI', 'Evaluation', 'CI'],
          tone: 'paper',
          label: 'Inspect grounded RAG reference',
          href: 'https://github.com/Billyflin/grounded-knowledge-assistant',
        },
      ],
    },
    experience: {
      kicker: '02 / Experience',
      title: 'Technical judgment that continues through QA.',
      intro: 'I am most useful between a functional requirement and a production delivery: challenging the initial solution, choosing a defensible architecture, implementing it, and guiding validation.',
      roles: [
        { period: 'Jan 2025 — Present', company: 'BeCloud Consulting', title: 'SAP Consultant · Architecture, full-stack delivery & quality', body: 'Requirement refinement with a functional consultant; architecture, Fiori/UI5 UX, implementation, integration, automated testing, and coordination with QA and design across SAP BTP.' },
        { period: 'Oct 2023 — Sep 2024', company: 'Happ Rent', title: 'Full-Stack Developer', body: 'Product delivery across frontend and backend in a rental-technology environment.' },
        { period: '2020 — 2026', company: 'Universidad de La Frontera', title: 'Ingeniería Informática · Final semester', body: 'Three courses remaining. Coursework completion expected in 2026.' },
      ],
    },
    capabilities: {
      kicker: '03 / Capabilities',
      title: 'Organized by responsibility, not by logo.',
      groups: [
        { index: 'A', title: 'Technical delivery', items: ['Requirement refinement', 'Solution architecture', 'Fiori / UI5 UX', 'Technical tradeoffs', 'QA & design coordination'] },
        { index: 'B', title: 'SAP full stack', items: ['SAP BTP', 'CAP / CDS', 'Fiori', 'Work Zone', 'HANA', 'Joule'] },
        { index: 'C', title: 'Product & backend', items: ['TypeScript / React', 'Kotlin / Spring', 'Node.js', 'REST / OpenAPI', 'PostgreSQL', 'Multi-tenant systems'] },
        { index: 'D', title: 'Cloud & delivery', items: ['Google Cloud', 'AWS', 'Docker', 'CI/CD', 'Observability', 'Cost-aware architecture'] },
      ],
    },
    about: {
      kicker: '04 / Working style',
      quote: 'I do not stop at the ticket—I question the architecture, flow, and failure modes.',
      paragraphs: [
        'I have been programming long enough to know that tools change faster than fundamentals. My advantage is not memorizing one stack; it is understanding the whole system, making a clear decision, and learning whatever the delivery requires.',
        'I am based in Temuco, Chile, available as a remote contractor with full overlap for US working hours. Spanish is native; English is B2 and operational for technical conversations.',
      ],
      facts: [['Current focus', 'SAP BTP architecture / Full-stack delivery'], ['Location', 'Temuco, Chile · Remote'], ['Education', 'Ingeniería Informática · Final semester']],
    },
    credentials: { kicker: '05 / Verified learning', title: 'Cloud and data credentials.', intro: 'Credentials support the work; they are not a substitute for it. Each item links to a verifiable record.' },
    contact: { kicker: '06 / Contact', title: 'Need someone who can understand the operation and build the solution?', note: 'Remote contractor · Full US-hours overlap · Discreetly exploring selected roles', backendCv: 'Backend / Platform CV', recruiterProfile: 'Recruiter profile' },
  },
  es: {
    nav: { work: 'Trabajo', experience: 'Experiencia', capabilities: 'Capacidades', contact: 'Conversemos' },
    localeLabel: 'EN',
    localeHref: '/',
    hero: {
      status: 'Disponible para roles contractor remotos · Jornada completa US',
      title: <>Convierto requisitos complejos del negocio <span>en software que el equipo puede entregar.</span></>,
      intro: 'Consultor técnico SAP e ingeniero full-stack. Refino requerimientos funcionales en arquitectura, mejoro flujos y UX dentro de los estándares SAP y sigo involucrado hasta la implementación, pruebas y entrega.',
      primaryCta: 'Ver trabajo',
      resumeCta: 'CV de soluciones',
      portraitAlt: 'Billy Martínez junto a Oliver al aire libre en Temuco',
      disciplines: ['Refinamiento técnico', 'SAP BTP', 'Entrega full-stack', 'Calidad automatizada', 'Coordinación técnica'],
    },
    proof: [
      { value: '2025—hoy', label: 'Consultor SAP en BeCloud' },
      { value: 'De punta a punta', label: 'Requisitos → arquitectura → desarrollo → QA' },
      { value: 'Inglés B2', label: 'Jornada completa compatible con EE. UU.' },
    ],
    work: {
      kicker: '01 / Trabajo seleccionado',
      title: 'Evidencia antes que palabras de moda.',
      intro: 'El trabajo más importante suele ser privado. Estos casos explican el problema, mi responsabilidad y el criterio técnico sin exponer información del cliente ni inventar impacto.',
      cases: [
        {
          number: '01', kind: 'Rol actual · Trabajo confidencial', name: 'Entrega de soluciones SAP', headline: 'Desde requisitos refinados hasta una entrega SAP comprobable.',
          body: 'Mi contrato dice Consultor SAP. En la práctica convierto requisitos funcionales en arquitectura y entrega full-stack: interfaz y UX, modelo de dominio, integraciones, despliegue, automatización de pruebas y resolución de problemas del ambiente.',
          evidence: ['Refino requerimientos con el consultor funcional y propongo mejoras de arquitectura, flujo y UX', 'Diseño y construyo con SAP BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA y Joule', 'Introduje pruebas automatizadas y una etapa de QA más allá de corregir directamente entre desarrollo y producción', 'Referencia CAP/Fiori pública e independiente con 12 pruebas sobre autorización por roles, protección de stock concurrente e integración OData resiliente, más CI verde'],
          tags: ['SAP BTP', 'Fiori / UI5', 'CAP / CDS', 'Work Zone', 'Pruebas automatizadas', 'Entrega con QA'], tone: 'orange', label: 'Ver referencia CAP independiente', href: 'https://github.com/Billyflin/sap-cap-fiori-btp',
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
          architecture: {
            summary: 'Ver mapa simplificado del sistema',
            title: 'Mapa público de arquitectura de Clinipets',
            layers: [
              { label: 'Clientes', items: ['KMP móvil', 'Next.js web'] },
              { label: 'API de dominio', items: ['Kotlin / Spring', 'Límites multi-tenant', 'Roles por clínica'] },
              { label: 'Datos y servicios', items: ['PostgreSQL', 'R2', 'Pagos idempotentes', 'Notificaciones outbox'] },
            ],
            transversal: { label: 'Integridad transversal', items: ['Auditoría', 'Fichas clínicas versionadas', 'Integridad clínica'] },
          },
        },
        {
          number: '04', kind: 'Referencia independiente · Código abierto', name: 'Grounded Knowledge Assistant', headline: 'Hacer que las respuestas de IA fallen de forma segura cuando falta evidencia.',
          body: 'Referencia RAG deliberadamente acotada en TypeScript que vuelve inspeccionables y comprobables la recuperación, el uso de fuentes, la validación de citas y el rechazo seguro.',
          evidence: ['12 pruebas automatizadas, incluyendo contenido con apariencia de prompt y citas inventadas', '100% de hit@3, precisión de respuesta/rechazo y validez de citas en la evaluación versionada', 'CI determinista sin claves y un adaptador OpenAI opcional que sólo corre en el servidor'],
          tags: ['Next.js', 'TypeScript', 'RAG', 'OpenAI', 'Evaluación', 'CI'], tone: 'paper', label: 'Ver referencia RAG comprobable', href: 'https://github.com/Billyflin/grounded-knowledge-assistant',
        },
      ],
    },
    experience: {
      kicker: '02 / Experiencia', title: 'Criterio técnico que continúa hasta QA.', intro: 'Aporto más valor entre un requerimiento funcional y una entrega productiva: cuestionando la solución inicial, eligiendo una arquitectura defendible, implementándola y guiando su validación.',
      roles: [
        { period: 'Ene 2025 — Actualidad', company: 'BeCloud Consulting', title: 'Consultor SAP · Arquitectura, entrega full-stack y calidad', body: 'Refinamiento de requerimientos junto al consultor funcional; arquitectura, UX Fiori/UI5, implementación, integración, pruebas automatizadas y coordinación con QA y diseño en SAP BTP.' },
        { period: 'Oct 2023 — Sep 2024', company: 'Happ Rent', title: 'Full-Stack Developer', body: 'Entrega de producto en frontend y backend dentro de un entorno tecnológico de arriendo.' },
        { period: '2020 — 2026', company: 'Universidad de La Frontera', title: 'Ingeniería Informática · Último semestre', body: 'Tres ramos pendientes. Finalización académica esperada durante 2026.' },
      ],
    },
    capabilities: {
      kicker: '03 / Capacidades', title: 'Ordenadas por responsabilidad, no por logo.',
      groups: [
        { index: 'A', title: 'Entrega técnica', items: ['Refinamiento de requisitos', 'Arquitectura de soluciones', 'UX Fiori / UI5', 'Decisiones técnicas', 'Coordinación de QA y diseño'] },
        { index: 'B', title: 'SAP full stack', items: ['SAP BTP', 'CAP / CDS', 'Fiori', 'Work Zone', 'HANA', 'Joule'] },
        { index: 'C', title: 'Producto y backend', items: ['TypeScript / React', 'Kotlin / Spring', 'Node.js', 'REST / OpenAPI', 'PostgreSQL', 'Sistemas multi-tenant'] },
        { index: 'D', title: 'Cloud y entrega', items: ['Google Cloud', 'AWS', 'Docker', 'CI/CD', 'Observabilidad', 'Arquitectura consciente de costos'] },
      ],
    },
    about: {
      kicker: '04 / Forma de trabajo', quote: 'No me quedo con el ticket: cuestiono la arquitectura, el flujo y los modos de falla.',
      paragraphs: ['Llevo suficiente tiempo programando para saber que las herramientas cambian más rápido que los fundamentos. Mi ventaja no es memorizar un stack: es entender el sistema completo, tomar una decisión clara y aprender lo que la entrega necesite.', 'Vivo en Temuco, Chile, y estoy disponible como contractor remoto con jornada completa compatible con Estados Unidos. Español nativo; inglés B2 operativo para conversaciones técnicas.'],
      facts: [['Enfoque actual', 'Arquitectura SAP BTP / Entrega full-stack'], ['Ubicación', 'Temuco, Chile · Remoto'], ['Formación', 'Ingeniería Informática · Último semestre']],
    },
    credentials: { kicker: '05 / Aprendizaje verificable', title: 'Credenciales de cloud y datos.', intro: 'Las credenciales respaldan el trabajo; no lo reemplazan. Cada elemento enlaza a un registro verificable.' },
    contact: { kicker: '06 / Contacto', title: '¿Necesitas a alguien que entienda la operación y construya la solución?', note: 'Contractor remoto · Jornada completa US · Explorando oportunidades de forma discreta', backendCv: 'CV Backend / Platform', recruiterProfile: 'Perfil para reclutamiento' },
  },
} as const;

function Header({ locale }: { locale: Locale }) {
  const t = content[locale];
  return <header className="site-header"><a className="brand" href="#top" aria-label={locale === 'en' ? 'Go to the top' : 'Ir al inicio'}>BM<span>/26</span></a><nav className="desktop-nav" aria-label={locale === 'en' ? 'Primary navigation' : 'Navegación principal'}><a href="#work">{t.nav.work}</a><a href="#experience">{t.nav.experience}</a><a href="#capabilities">{t.nav.capabilities}</a></nav><div className="header-actions"><a className="locale-link" href={t.localeHref} lang={locale === 'en' ? 'es' : 'en'}>{t.localeLabel}</a><a className="header-cta" href="mailto:hello@billyflin.dev">{t.nav.contact}<span className="icon-arrow" aria-hidden="true">↗</span></a></div></header>;
}

function Hero({ locale }: { locale: Locale }) {
  const t = content[locale];
  const resumeHref = locale === 'en' ? '/Billy_Martinez_Resume_Solutions_EN.pdf' : '/Billy_Martinez_CV_Soluciones_ES.pdf';
  return <><section className={`hero hero--${locale}`} id="top"><div className="hero-copy"><div className="eyebrow hero-enter hero-enter--1"><span className="status-dot" aria-hidden="true" />{t.hero.status}</div><h1 className="hero-title hero-enter hero-enter--2">{t.hero.title}</h1><div className="hero-bottom hero-enter hero-enter--3"><p>{t.hero.intro}</p><div className="hero-actions"><a className="button button--primary" href="#work">{t.hero.primaryCta}<span className="icon-arrow" aria-hidden="true">↘</span></a><a className="text-link" href={resumeHref} target="_blank" rel="noreferrer">{t.hero.resumeCta}<span className="icon-arrow" aria-hidden="true">↗</span></a></div></div></div><figure className="portrait"><picture><source srcSet="/billy-martinez-oliver-portrait-2026-640.webp 640w, /billy-martinez-oliver-portrait-2026-960.webp 960w, /billy-martinez-oliver-portrait-2026-1440.webp 1440w, /billy-martinez-oliver-portrait-2026-1920.webp 1920w" sizes="(max-width: 760px) 100vw, 44vw" type="image/webp" /><img src="/billy-martinez-oliver-portrait-2026-1440.webp" alt={t.hero.portraitAlt} width="1440" height="2160" fetchPriority="high" decoding="async" /></picture><figcaption><span>Billy Martínez</span><span><span aria-hidden="true">●</span> Temuco, CL</span></figcaption></figure><div className="discipline-strip" aria-label={locale === 'en' ? 'Areas of work' : 'Áreas de trabajo'}>{t.hero.disciplines.map((item) => <span key={item}>{item}</span>)}</div></section><section className="proof-strip" aria-label={locale === 'en' ? 'Profile snapshot' : 'Resumen del perfil'}>{t.proof.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</section></>;
}

function WorkSection({ locale }: { locale: Locale }) {
  const t = content[locale].work;
  return <section className="section work-section" id="work"><div className="section-heading"><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2><p className="section-intro">{t.intro}</p></div><div className="case-list">{t.cases.map((item) => <article className={`case-study case-study--${item.tone}`} key={item.number}><div className="case-meta"><span>{item.number}</span><span>{item.kind}</span></div><div className="case-body"><div className="case-copy"><p className="case-name">{item.name}</p><h3>{item.headline}</h3><p>{item.body}</p></div><div className="case-aside"><ul className="case-evidence" aria-label={locale === 'en' ? `Evidence from ${item.name}` : `Evidencia de ${item.name}`}>{item.evidence.map((point) => <li key={point}>{point}</li>)}</ul>{'architecture' in item && <details className="architecture-details"><summary>{item.architecture.summary}</summary><section className="architecture-map" aria-label={item.architecture.title}><h4>{item.architecture.title}</h4><div className="architecture-flow">{item.architecture.layers.map((layer) => <div className="architecture-layer" key={layer.label}><strong>{layer.label}</strong><ul>{layer.items.map((entry) => <li key={entry}>{entry}</li>)}</ul></div>)}</div><div className="architecture-transversal"><strong>{item.architecture.transversal.label}</strong><ul>{item.architecture.transversal.items.map((entry) => <li key={entry}>{entry}</li>)}</ul></div></section></details>}</div></div><div className="case-footer"><ul aria-label={locale === 'en' ? `Technologies used in ${item.name}` : `Tecnologías utilizadas en ${item.name}`}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>{'href' in item ? <a href={item.href} target="_blank" rel="noreferrer">{item.label}<span className="icon-arrow" aria-hidden="true">↗</span></a> : <span className="private-label">{item.label}</span>}</div></article>)}</div></section>;
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
  return <footer className="contact-section" id="contact"><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2><a className="contact-email" href="mailto:hello@billyflin.dev">hello@billyflin.dev<span className="icon-arrow" aria-hidden="true">↗</span></a><p className="contact-note">{t.note}</p><div className="footer-row"><p>© {new Date().getFullYear()} Billy Martínez</p><div className="social-links"><a href="https://github.com/Billyflin" target="_blank" rel="me noreferrer">GitHub</a><a href="https://www.linkedin.com/in/billyflin" target="_blank" rel="me noreferrer">LinkedIn</a><a href={locale === 'en' ? '/plain/' : '/es/plain/'}>{t.recruiterProfile}</a><a href={locale === 'en' ? '/Billy_Martinez_Resume_Backend_EN.pdf' : '/Billy_Martinez_CV_Backend_ES.pdf'} target="_blank" rel="noreferrer">{t.backendCv}</a><a href="mailto:hello@billyflin.dev">Email</a></div></div></footer>;
}

function NotFoundPage() {
  return <main className="not-found-page"><div className="not-found-mark" aria-hidden="true">404</div><div className="not-found-copy"><p className="section-kicker">Lost route · Ruta no encontrada</p><h1>This page does not exist.<span>Esta página no existe.</span></h1><p>The useful part is still here. Choose your language and return to Billy Martínez’s professional portfolio.</p><div className="not-found-actions"><a className="button button--primary" href="/">Continue in English <span aria-hidden="true">↗</span></a><a className="button button--light" href="/es/">Continuar en español <span aria-hidden="true">↗</span></a></div></div></main>;
}

export default function App({ locale = 'en', page = 'portfolio' }: AppProps) {
  if (page === 'plain') return <PlainResumePage locale={locale} />;
  if (page === 'notFound') return <NotFoundPage />;
  return <><a className="skip-link" href="#main-content">{locale === 'en' ? 'Skip to content' : 'Saltar al contenido'}</a><Header locale={locale} /><main id="main-content"><Hero locale={locale} /><WorkSection locale={locale} /><ExperienceSection locale={locale} /><CapabilitiesSection locale={locale} /><AboutSection locale={locale} /><CredentialsSection locale={locale} /></main><ContactSection locale={locale} /></>;
}
