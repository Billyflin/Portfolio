import { useEffect } from 'react';
import { PlainResumePage } from './components/PlainResumePage';
import { TechnicalArticlePage } from './components/TechnicalArticlePage';
import { PortraitCarousel } from './components/PortraitCarousel';

export type Locale = 'en' | 'es';

type AppProps = {
  locale?: Locale;
  page?: 'portfolio' | 'plain' | 'article' | 'notFound';
};

const certifications = [
  {
    issuer: 'SAP',
    code: 'C_BAIPA',
    name: 'Solution Architect – SAP Business AI Platform',
    year: '2026',
    validUntil: { en: 'Valid to Nov 2027', es: 'Vigente a nov 2027' },
    badge: '/badges/sap-c-baipa.webp',
    href: 'https://www.credly.com/badges/b1714db2-7ff6-4de8-b710-e5e6bdfcf6ad/public_url',
  },
  {
    issuer: 'SAP',
    code: 'C_BCBDC',
    name: 'SAP Business Data Cloud',
    year: '2026',
    validUntil: { en: 'Valid to Nov 2027', es: 'Vigente a nov 2027' },
    badge: '/badges/sap-c-bcbdc.webp',
    href: 'https://www.credly.com/badges/23e95a72-aea5-4499-a4a1-ce075dd47773/public_url',
  },
] as const;

const securityCredentials = [
  {
    issuer: 'Fortinet',
    name: 'NSE 1 Certified in Cybersecurity',
    year: '2026',
    badge: '/badges/fortinet-nse1.webp',
    href: 'https://www.credly.com/badges/e08eefd0-cfc6-440d-9c74-cf52dc194e3b/public_url',
  },
  {
    issuer: 'Fortinet',
    name: 'Cybersecurity and Cloud Fundamentals 1.0',
    year: '2026',
    badge: '/badges/fortinet-fcf.webp',
    href: 'https://www.credly.com/badges/b2e8f793-b535-445c-9950-4522271e3ce6/public_url',
  },
] as const;

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
    nav: { work: 'Selected work', experience: 'Experience', capabilities: 'Capabilities', certifications: 'Certifications', writing: 'Writing', contact: 'Let’s talk' },
    localeLabel: 'ES',
    localeHref: '/es/',
    hero: {
      status: 'Available now · SAP Certified · Business AI & Business Data Cloud',
      title: <>SAP BTP engineer who turns business requirements <span>into systems that ship.</span></>,
      intro: 'SAP Certified Solution Architect for the SAP Business AI Platform and certified in SAP Business Data Cloud. Since 2023 I have taken functional requirements to architecture, code, automated tests, and release: SAP BTP at BeCloud, full-stack Kotlin/Spring + Vue at HappRent.',
      primaryCta: 'See selected work',
      resumeCta: 'SAP BTP CV', resumeCtaAlt: 'Full-stack CV',
      portraitAlt: 'Billy Martínez with Oliver outdoors in Temuco',
      disciplines: ['SAP BTP & CAP', 'SAP Business AI', 'Backend & APIs', 'System architecture', 'Full-stack delivery', 'Quality automation'],
    },
    proof: [
      { value: '2× SAP Certified', label: 'Business AI Platform architect · Business Data Cloud' },
      { value: 'Since 2023', label: 'Shipping professionally · SAP BTP & full-stack' },
      { value: 'End to end', label: 'Requirement → architecture → build → QA → release' },
    ],
    work: {
      kicker: '01 / Selected work',
      title: 'Evidence over buzzwords.',
      intro: 'Much of my best work is under NDA. Each case shows the problem, what I owned, and the decisions I made—with public code wherever it can be inspected.',
      cases: [
        {
          number: '01',
          kind: 'Previous role · Confidential work',
          name: 'SAP solution delivery',
          stat: { value: '12', label: 'CAP service tests in the public reference, plus a formal QA stage' },
          headline: 'From refined requirements to a testable SAP delivery.',
          body: 'My contract title was SAP Consultant. In practice, I turned functional requirements into architecture and full-stack delivery: interface and UX, domain model, integration, deployment, test automation, and environment troubleshooting.',
          evidence: [
            'Refined requirements with the functional consultant and proposed architecture, flow, and UX improvements',
            'Designed and built across SAP BTP, Fiori, CAP/CDS, Work Zone, HANA, and Joule',
            'Introduced automated testing and a QA stage beyond direct dev-to-production fixes',
            'Independent CAP/Fiori reference (public proof page) with 12 service tests covering role authorization, concurrent stock protection, and resilient OData integration, plus green CI',
          ],
          tags: ['SAP BTP', 'Fiori / UI5', 'CAP / CDS', 'Work Zone', 'Automated testing', 'QA delivery'],
          tone: 'orange',
          label: 'Inspect the engineering evidence',
          href: '/proof/sap-cap-fiori-btp/',
        },
        {
          number: '02',
          kind: 'Architecture decision · In progress',
          name: 'Confidential cloud platform',
          stat: { value: 'AWS → GCP', label: 'Re-platform recommended and defended on cost and fit' },
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
          stat: { value: 'B2B2C', label: 'Clinics, vets, tutors and pets on one multi-tenant platform' },
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
          stat: { value: '100%', label: 'Citation validity on the committed fixture evaluation' },
          headline: 'Making AI answers fail closed when the evidence is missing.',
          body: 'A deliberately small TypeScript RAG reference that makes retrieval, source grounding, citation validation, and safe refusal behavior inspectable and testable.',
          evidence: [
            '12 unit/adversarial tests plus 4 Chromium E2E checks with Playwright',
            '100% hit@3, support/refusal accuracy, and citation validity on the small committed fixture evaluation',
            'Zero-key deterministic CI plus an optional server-only OpenAI provider boundary',
            'Human-verified AI delivery protocol: reproducible evidence, complete diff review, no sensitive prompts, and explicit limitations',
            'Published readiness decision: not approved for production until quality, security, isolation, scale, cost, reliability, observability, and release gates have evidence',
          ],
          tags: ['Next.js', 'TypeScript', 'RAG', 'OpenAI', 'Playwright', 'CI'],
          tone: 'paper',
          label: 'Inspect the engineering evidence',
          href: '/proof/grounded-knowledge-assistant/',
        },
      ],
    },
    experience: {
      kicker: '02 / Experience',
      title: 'Enterprise SAP delivery, backed by full-stack depth.',
      intro: 'I create the most value between a functional requirement and a production release: I challenge the first solution, choose a defensible architecture, build it, and lead validation until it ships.',
      roles: [
        { period: 'Jan 2025 — Sep 2026', company: 'BeCloud Consulting', title: 'SAP BTP Consultant · CAP/CDS, Node.js/TypeScript, Fiori/UI5', body: 'Requirement refinement with a functional consultant; SAP CAP/CDS services on Node.js/TypeScript, REST/OData integrations on HANA, Fiori/UI5 in Work Zone, automated testing and a formal QA stage, Scrum/Kanban.' },
        { period: 'Oct 2023 — Sep 2024', company: 'Happ Rent', title: 'Full-Stack Developer · Kotlin/Spring Boot, Vue 3', body: 'As part of the team: Kotlin + Spring Boot 3 API (Spring Security/JWT, JPA, email), Vue 3 + Pinia frontend for leases, properties, brokers and KPIs, contract PDF generation and templates, Docker images published on AWS.' },
        { period: '2020 — 2026', company: 'Universidad de La Frontera', title: 'Ingeniería Informática · Coursework completed', body: 'Coursework completed in 2026.' },
      ],
    },
    capabilities: {
      kicker: '03 / Capabilities',
      title: 'Stacks change. Engineering responsibility does not.',
      intro: 'I ramp up by mapping the domain, contracts, data, failure modes, and delivery path first. That model has transferred across Kotlin/Spring, TypeScript/Node, React/Next.js, SAP BTP, cloud, and applied AI.',
      groups: [
        { index: 'A', title: 'Systems architecture', items: ['Requirement refinement', 'Domain modeling', 'API & integration design', 'Technical tradeoffs', 'Cost-aware decisions'] },
        { index: 'B', title: 'Backend & platform', items: ['Kotlin / Spring', 'Node.js / TypeScript', 'REST / OpenAPI', 'PostgreSQL', 'Multi-tenant systems', 'Failure design'] },
        { index: 'C', title: 'Product delivery', items: ['React / Next.js', 'Fiori / UI5 UX', 'Automated testing', 'CI/CD', 'Observability', 'QA & design coordination'] },
        { index: 'D', title: 'SAP & cloud', items: ['SAP BTP · CAP / CDS', 'SAP Business AI · Joule', 'SAP Business Data Cloud', 'HANA · Work Zone', 'Google Cloud', 'AWS / Docker'] },
      ],
    },
    about: {
      kicker: '04 / Working style',
      quote: 'I do not stop at the ticket—I question the architecture, flow, and failure modes.',
      paragraphs: [
        'Tools change faster than fundamentals. My edge is not one stack: it is understanding the whole system—business process, data, integrations, failure modes—making a clear decision, and learning whatever the delivery requires. The SAP certifications are recent proof of how fast I ramp up.',
        'I am based in Temuco, Chile, and seeking salaried software roles with immediate availability. I am open to remote, hybrid, or on-site work and relocation within Chile. Spanish is native; English is B2 and operational for technical conversations.',
      ],
      facts: [['Role fit', 'SAP BTP · Business AI · Backend · Full-stack'], ['Certified', 'SAP C_BAIPA · SAP C_BCBDC · Fortinet NSE 1'], ['Professional stack', 'SAP CAP/Fiori · Node.js/TypeScript · Kotlin/Spring · Vue'], ['Education', 'Ingeniería Informática · Coursework completed']],
    },
    credentials: { kicker: '05 / Certifications', title: 'SAP certified. Verifiable.', intro: 'Current SAP certifications in Business AI architecture and Business Data Cloud, valid to November 2027, plus Fortinet cybersecurity and cloud and data coursework. Every item links to a verifiable record.', certsLabel: 'SAP certifications', securityLabel: 'Cybersecurity · Fortinet', coursesLabel: 'Courses · not certification exams' },
    contact: { kicker: '06 / Contact', title: 'Need an SAP BTP engineer who understands the business and ships the solution?', note: 'SAP Certified · Temuco, Chile · Spanish native · English B2 · Remote, hybrid or on-site · Immediate availability', backendCv: 'SAP BTP CV', fullstackCv: 'Full-stack CV', recruiterProfile: 'Recruiter profile' },
  },
  es: {
    nav: { work: 'Trabajo', experience: 'Experiencia', capabilities: 'Capacidades', certifications: 'Certificaciones', writing: 'Artículo', contact: 'Conversemos' },
    localeLabel: 'EN',
    localeHref: '/',
    hero: {
      status: 'Disponible ya · SAP Certified · Business AI y Business Data Cloud',
      title: <>Ingeniero SAP BTP que convierte requisitos del negocio <span>en sistemas que llegan a producción.</span></>,
      intro: 'SAP Certified Solution Architect en SAP Business AI Platform y certificado en SAP Business Data Cloud. Desde 2023 llevo requerimientos funcionales a arquitectura, código, pruebas automatizadas y producción: SAP BTP en BeCloud y full stack Kotlin/Spring + Vue en HappRent.',
      primaryCta: 'Ver trabajo',
      resumeCta: 'CV SAP BTP', resumeCtaAlt: 'CV Full Stack',
      portraitAlt: 'Billy Martínez junto a Oliver al aire libre en Temuco',
      disciplines: ['SAP BTP y CAP', 'SAP Business AI', 'Backend y APIs', 'Arquitectura de sistemas', 'Entrega full-stack', 'Calidad automatizada'],
    },
    proof: [
      { value: '2× SAP Certified', label: 'Arquitecto Business AI Platform · Business Data Cloud' },
      { value: 'Desde 2023', label: 'Entregando software · SAP BTP y full stack' },
      { value: 'De punta a punta', label: 'Requisito → arquitectura → desarrollo → QA → producción' },
    ],
    work: {
      kicker: '01 / Trabajo seleccionado',
      title: 'Evidencia antes que palabras de moda.',
      intro: 'Buena parte de mi mejor trabajo está bajo confidencialidad. Cada caso muestra el problema, de qué me hice cargo y qué decidí, con código público cuando se puede inspeccionar.',
      cases: [
        {
          number: '01', kind: 'Experiencia previa · Trabajo confidencial', stat: { value: '12', label: 'pruebas CAP en la referencia pública, más una etapa formal de QA' }, name: 'Entrega de soluciones SAP', headline: 'Desde requisitos refinados hasta una entrega SAP comprobable.',
          body: 'Mi cargo contractual era Consultor SAP. En la práctica convertí requisitos funcionales en arquitectura y entrega full-stack: interfaz y UX, modelo de dominio, integraciones, despliegue, automatización de pruebas y resolución de problemas del ambiente.',
          evidence: ['Refiné requerimientos con el consultor funcional y propuse mejoras de arquitectura, flujo y UX', 'Diseñé y construí con SAP BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA y Joule', 'Introduje pruebas automatizadas y una etapa de QA más allá de corregir directamente entre desarrollo y producción', 'Referencia CAP/Fiori independiente (página de evidencia pública) con 12 pruebas sobre autorización por roles, protección de stock concurrente e integración OData resiliente, más CI verde'],
          tags: ['SAP BTP', 'Fiori / UI5', 'CAP / CDS', 'Work Zone', 'Pruebas automatizadas', 'Entrega con QA'], tone: 'orange', label: 'Ver evidencia de ingeniería', href: '/proof/sap-cap-fiori-btp/',
        },
        {
          number: '02', kind: 'Decisión de arquitectura · En curso', stat: { value: 'AWS → GCP', label: 'Migración recomendada y defendida por costo y encaje' }, name: 'Plataforma cloud confidencial', headline: 'Cambiar la base cuando la economía deja de tener sentido.',
          body: 'Evalué el costo y encaje técnico de una dirección existente en AWS, propuse una migración limpia hacia Google Cloud y conseguí el alineamiento necesario para reiniciar sobre una base más adecuada para el producto y el equipo.',
          evidence: ['Comparé economía cloud y costos operacionales', 'Recomendé AWS → Google Cloud y defendí la decisión', 'Alineé a los involucrados en torno a “partir de nuevo, pero partir bien”'],
          tags: ['AWS → GCP', 'Arquitectura de costos', 'Estrategia técnica', 'Alineamiento'], tone: 'blue', label: 'Anonimizado · En curso',
        },
        {
          number: '03', kind: 'Producto propio · Repositorio privado', stat: { value: 'B2B2C', label: 'Clínicas, veterinarios, tutores y mascotas en una plataforma multi-tenant' }, name: 'Clinipets', headline: 'Una plataforma veterinaria diseñada para restricciones operacionales reales.',
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
          number: '04', kind: 'Referencia independiente · Código abierto', stat: { value: '100%', label: 'Validez de citas en la evaluación de fixtures del repositorio' }, name: 'Grounded Knowledge Assistant', headline: 'Hacer que las respuestas de IA fallen de forma segura cuando falta evidencia.',
          body: 'Referencia RAG deliberadamente acotada en TypeScript que vuelve inspeccionables y comprobables la recuperación, el uso de fuentes, la validación de citas y el rechazo seguro.',
          evidence: ['12 pruebas unitarias/adversariales más 4 checks E2E en Chromium con Playwright', '100% de hit@3, precisión de respuesta/rechazo y validez de citas en la pequeña evaluación versionada', 'CI determinista sin claves y un adaptador OpenAI opcional que sólo corre en el servidor', 'Protocolo de entrega con IA validada por humanos: evidencia reproducible, revisión completa del diff, sin datos sensibles en prompts y con límites explícitos', 'Decisión de preparación publicada: no aprobado para producción hasta reunir evidencia de calidad, seguridad, aislamiento, escala, costo, confiabilidad, observabilidad y despliegue'],
          tags: ['Next.js', 'TypeScript', 'RAG', 'OpenAI', 'Playwright', 'CI'], tone: 'paper', label: 'Ver evidencia de ingeniería', href: '/proof/grounded-knowledge-assistant/',
        },
      ],
    },
    experience: {
      kicker: '02 / Experiencia', title: 'Amplitud de ingeniería en dominios complejos.', intro: 'Aporto más valor entre un requerimiento funcional y una entrega productiva: cuestionando la solución inicial, eligiendo una arquitectura defendible, implementándola y guiando su validación.',
      roles: [
        { period: 'Ene 2025 — Sep 2026', company: 'BeCloud Consulting', title: 'Consultor SAP BTP · CAP/CDS, Node.js/TypeScript, Fiori/UI5', body: 'Refinamiento de requerimientos con el consultor funcional; servicios SAP CAP/CDS sobre Node.js/TypeScript, integraciones REST/OData sobre HANA, Fiori/UI5 en Work Zone, pruebas automatizadas y etapa formal de QA, Scrum/Kanban.' },
        { period: 'Oct 2023 — Sep 2024', company: 'Happ Rent', title: 'Desarrollador Full Stack · Kotlin/Spring Boot, Vue 3', body: 'Dentro del equipo: API en Kotlin + Spring Boot 3 (Spring Security/JWT, JPA, correo), frontend Vue 3 + Pinia para contratos, propiedades, corredoras e indicadores, generación de contratos PDF y plantillas, imágenes Docker publicadas en AWS.' },
        { period: '2020 — 2026', company: 'Universidad de La Frontera', title: 'Ingeniería Informática · Egresado', body: 'Plan de estudios completado en 2026.' },
      ],
    },
    capabilities: {
      kicker: '03 / Capacidades', title: 'El stack cambia. La responsabilidad de ingeniería no.',
      intro: 'Aprendo un stack mapeando primero el dominio, los contratos, los datos, los modos de falla y la ruta de entrega. Ese modelo se ha transferido entre Kotlin/Spring, TypeScript/Node, React/Next.js, SAP BTP, cloud e IA aplicada.',
      groups: [
        { index: 'A', title: 'Arquitectura de sistemas', items: ['Refinamiento de requisitos', 'Modelado de dominio', 'Diseño de APIs e integraciones', 'Decisiones técnicas', 'Decisiones conscientes de costos'] },
        { index: 'B', title: 'Backend y plataforma', items: ['Kotlin / Spring', 'Node.js / TypeScript', 'REST / OpenAPI', 'PostgreSQL', 'Sistemas multi-tenant', 'Diseño para fallas'] },
        { index: 'C', title: 'Entrega de producto', items: ['React / Next.js', 'UX Fiori / UI5', 'Pruebas automatizadas', 'CI/CD', 'Observabilidad', 'Coordinación de QA y diseño'] },
        { index: 'D', title: 'SAP y cloud', items: ['SAP BTP · CAP / CDS', 'SAP Business AI · Joule', 'SAP Business Data Cloud', 'HANA · Work Zone', 'Google Cloud', 'AWS / Docker'] },
      ],
    },
    about: {
      kicker: '04 / Forma de trabajo', quote: 'No me quedo con el ticket: cuestiono la arquitectura, el flujo y los modos de falla.',
      paragraphs: ['Las herramientas cambian más rápido que los fundamentos. Mi ventaja no es un stack: es entender el sistema completo (proceso de negocio, datos, integraciones, modos de falla), tomar una decisión clara y aprender lo que la entrega necesite. Las certificaciones SAP son una prueba reciente de lo rápido que aprendo.', 'Vivo en Temuco, Chile, y busco empleo asalariado con contrato en software, con disponibilidad inmediata. Acepto trabajo remoto, híbrido o presencial y puedo trasladarme dentro de Chile. Español nativo; inglés B2 operativo para conversaciones técnicas.'],
      facts: [['Roles objetivo', 'SAP BTP · Business AI · Backend · Full stack'], ['Certificaciones', 'SAP C_BAIPA · SAP C_BCBDC · Fortinet NSE 1'], ['Stack laboral', 'SAP CAP/Fiori · Node.js/TypeScript · Kotlin/Spring · Vue'], ['Formación', 'Ingeniería Informática · Egresado']],
    },
    credentials: { kicker: '05 / Certificaciones', title: 'Certificado por SAP. Verificable.', intro: 'Certificaciones SAP vigentes en arquitectura de Business AI y Business Data Cloud, válidas hasta noviembre de 2027, más ciberseguridad con Fortinet y formación en cloud y datos. Cada elemento enlaza a un registro verificable.', certsLabel: 'Certificaciones SAP', securityLabel: 'Ciberseguridad · Fortinet', coursesLabel: 'Cursos · no son exámenes de certificación' },
    contact: { kicker: '06 / Contacto', title: '¿Buscas un ingeniero SAP BTP que entienda el negocio y entregue la solución?', note: 'SAP Certified · Temuco, Chile · Español nativo · Inglés B2 · Remoto, híbrido o presencial · Disponibilidad inmediata', backendCv: 'CV SAP BTP', fullstackCv: 'CV Full Stack', recruiterProfile: 'Perfil para reclutamiento' },
  },
} as const;

function Header({ locale }: { locale: Locale }) {
  const t = content[locale];
  return <header className="site-header"><a className="brand" href="#top" aria-label={locale === 'en' ? 'Go to the top' : 'Ir al inicio'}>BM<span>/26</span></a><nav className="desktop-nav" aria-label={locale === 'en' ? 'Primary navigation' : 'Navegación principal'}><a href="#work">{t.nav.work}</a><a href="#experience">{t.nav.experience}</a><a href="#capabilities">{t.nav.capabilities}</a><a href="#credentials">{t.nav.certifications}</a><a href="/writing/reliable-api-integrations/">{t.nav.writing}</a></nav><div className="header-actions"><a className="locale-link" href={t.localeHref} lang={locale === 'en' ? 'es' : 'en'}>{t.localeLabel}</a><a className="header-cta" href="mailto:hello@billyflin.dev">{t.nav.contact}<span className="icon-arrow" aria-hidden="true">↗</span></a></div></header>;
}

function Hero({ locale }: { locale: Locale }) {
  const t = content[locale];
  const resumeHref = locale === 'en' ? '/Billy_Martinez_CV_SAP-BTP_EN.pdf' : '/Billy_Martinez_CV_SAP-BTP_ES.pdf';
  const resumeAltHref = locale === 'en' ? '/Billy_Martinez_CV_FullStack_EN.pdf' : '/Billy_Martinez_CV_FullStack_ES.pdf';
  return <><section className={`hero hero--${locale}`} id="top"><div className="hero-copy"><div className="eyebrow hero-enter hero-enter--1"><span className="status-dot" aria-hidden="true" />{t.hero.status}</div><h1 className="hero-title hero-enter hero-enter--2">{t.hero.title}</h1><div className="hero-bottom hero-enter hero-enter--3"><p>{t.hero.intro}</p><div className="hero-actions"><a className="button button--primary" href="#work">{t.hero.primaryCta}<span className="icon-arrow" aria-hidden="true">↘</span></a><a className="text-link" href={resumeHref} target="_blank" rel="noreferrer">{t.hero.resumeCta}<span className="icon-arrow" aria-hidden="true">↗</span></a><a className="text-link" href={resumeAltHref} target="_blank" rel="noreferrer">{t.hero.resumeCtaAlt}<span className="icon-arrow" aria-hidden="true">↗</span></a></div></div></div><PortraitCarousel locale={locale} /><div className="discipline-strip" aria-label={locale === 'en' ? 'Areas of work' : 'Áreas de trabajo'}>{t.hero.disciplines.map((item) => <span key={item}>{item}</span>)}</div></section><section className="proof-strip" aria-label={locale === 'en' ? 'Profile snapshot' : 'Resumen del perfil'}>{t.proof.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</section></>;
}

function WorkSection({ locale }: { locale: Locale }) {
  const t = content[locale].work;
  return <section className="section work-section" id="work"><div className="section-heading"><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2><p className="section-intro">{t.intro}</p></div><div className="case-list">{t.cases.map((item) => <article className={`case-study case-study--${item.tone}`} key={item.number}><div className="case-meta"><span>{item.number}</span><span>{item.kind}</span></div><div className="case-body"><div className="case-copy"><p className="case-name">{item.name}</p><h3>{item.headline}</h3><p>{item.body}</p></div><div className="case-aside"><div className="case-stat"><strong>{item.stat.value}</strong><span>{item.stat.label}</span></div><ul className="case-evidence" aria-label={locale === 'en' ? `Evidence from ${item.name}` : `Evidencia de ${item.name}`}>{item.evidence.slice(0, 3).map((point) => <li key={point}>{point}</li>)}</ul>{'architecture' in item && <details className="architecture-details"><summary>{item.architecture.summary}</summary><section className="architecture-map" aria-label={item.architecture.title}><h4>{item.architecture.title}</h4><div className="architecture-flow">{item.architecture.layers.map((layer) => <div className="architecture-layer" key={layer.label}><strong>{layer.label}</strong><ul>{layer.items.map((entry) => <li key={entry}>{entry}</li>)}</ul></div>)}</div><div className="architecture-transversal"><strong>{item.architecture.transversal.label}</strong><ul>{item.architecture.transversal.items.map((entry) => <li key={entry}>{entry}</li>)}</ul></div></section></details>}</div></div><div className="case-footer"><ul aria-label={locale === 'en' ? `Technologies used in ${item.name}` : `Tecnologías utilizadas en ${item.name}`}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>{'href' in item ? <a href={item.href}>{item.label}<span className="icon-arrow" aria-hidden="true">↗</span></a> : <span className="private-label">{item.label}</span>}</div></article>)}</div></section>;
}

function ExperienceSection({ locale }: { locale: Locale }) {
  const t = content[locale].experience;
  return <section className="experience-section" id="experience"><div className="experience-lead"><p className="section-kicker section-kicker--light">{t.kicker}</p><h2>{t.title}</h2><p>{t.intro}</p></div><div className="timeline">{t.roles.map((role) => <article key={role.company}><p>{role.period}</p><div><h3>{role.company}</h3><strong>{role.title}</strong><p>{role.body}</p></div></article>)}</div></section>;
}

function CapabilitiesSection({ locale }: { locale: Locale }) {
  const t = content[locale].capabilities;
  return <section className="section stack-section" id="capabilities"><div className="section-heading section-heading--compact"><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2><p className="section-intro">{t.intro}</p></div><div className="skill-grid">{t.groups.map((group) => <article className="skill-group" key={group.index}><span className="skill-index">{group.index}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>;
}

function AboutSection({ locale }: { locale: Locale }) {
  const t = content[locale].about;
  return <section className="about-section" id="about"><div className="about-lead"><p className="section-kicker section-kicker--light">{t.kicker}</p><blockquote>“{t.quote}”</blockquote></div><div className="about-copy">{t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<dl className="profile-facts">{t.facts.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl></div></section>;
}

function CredentialsSection({ locale }: { locale: Locale }) {
  const t = content[locale].credentials;
  return <section className="section credentials-section" id="credentials"><div className="credentials-heading"><div><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2></div><p>{t.intro}</p></div><p className="credential-group-label">{t.certsLabel}</p><div className="badge-grid badge-grid--sap">{certifications.map((cert) => <a className="badge-card badge-card--sap" href={cert.href} target="_blank" rel="noreferrer" key={cert.code}><img src={cert.badge} alt="" width="160" height="160" loading="lazy" decoding="async" /><span className="badge-copy"><span className="credential-issuer">{cert.issuer} · {cert.code}</span><strong>SAP Certified – {cert.name}</strong><span className="badge-meta"><span className="status-dot" aria-hidden="true" />{cert.validUntil[locale]}</span></span><span className="icon-arrow" aria-hidden="true">↗</span></a>)}</div><p className="credential-group-label">{t.securityLabel}</p><div className="badge-grid">{securityCredentials.map((credential) => <a className="badge-card" href={credential.href} target="_blank" rel="noreferrer" key={credential.name}><img src={credential.badge} alt="" width="104" height="104" loading="lazy" decoding="async" /><span className="badge-copy"><span className="credential-issuer">{credential.issuer}</span><strong>{credential.name}</strong><span className="badge-meta">{credential.year}</span></span><span className="icon-arrow" aria-hidden="true">↗</span></a>)}</div><p className="credential-group-label">{t.coursesLabel}</p><div className="credential-list">{credentials.map((credential) => <a href={credential.href} target="_blank" rel="noreferrer" key={credential.name}><span className="credential-issuer">{credential.issuer}</span><strong>{credential.name}</strong><span className="credential-year">{credential.year}</span><span className="icon-arrow" aria-hidden="true">↗</span></a>)}</div></section>;
}

function ContactSection({ locale }: { locale: Locale }) {
  const t = content[locale].contact;
  return <footer className="contact-section" id="contact"><p className="section-kicker">{t.kicker}</p><h2>{t.title}</h2><a className="contact-email" href="mailto:hello@billyflin.dev">hello@billyflin.dev<span className="icon-arrow" aria-hidden="true">↗</span></a><p className="contact-note">{t.note}</p><div className="footer-row"><p>© {new Date().getFullYear()} Billy Martínez</p><div className="social-links"><a href="https://github.com/Billyflin" target="_blank" rel="me noreferrer">GitHub</a><a href="https://www.linkedin.com/in/billyflin" target="_blank" rel="me noreferrer">LinkedIn</a><a href="/writing/reliable-api-integrations/">{locale === 'en' ? 'Writing' : 'Artículo técnico'}</a><a href={locale === 'en' ? '/plain/' : '/es/plain/'}>{t.recruiterProfile}</a><a href={locale === 'en' ? '/Billy_Martinez_CV_SAP-BTP_EN.pdf' : '/Billy_Martinez_CV_SAP-BTP_ES.pdf'} target="_blank" rel="noreferrer">{t.backendCv}</a><a href={locale === 'en' ? '/Billy_Martinez_CV_FullStack_EN.pdf' : '/Billy_Martinez_CV_FullStack_ES.pdf'} target="_blank" rel="noreferrer">{t.fullstackCv}</a><a href="mailto:hello@billyflin.dev">Email</a></div></div></footer>;
}

function NotFoundPage() {
  return <main className="not-found-page"><div className="not-found-mark" aria-hidden="true">404</div><div className="not-found-copy"><p className="section-kicker">Lost route · Ruta no encontrada</p><h1>This page does not exist.<span>Esta página no existe.</span></h1><p>The useful part is still here. Choose your language and return to Billy Martínez’s professional portfolio.</p><div className="not-found-actions"><a className="button button--primary" href="/">Continue in English <span aria-hidden="true">↗</span></a><a className="button button--light" href="/es/">Continuar en español <span aria-hidden="true">↗</span></a></div></div></main>;
}

const stackItems = ['SAP BTP', 'CAP / CDS', 'Fiori / UI5', 'HANA', 'SAP Business AI', 'Joule', 'Business Data Cloud', 'Node.js', 'TypeScript', 'Kotlin', 'Spring Boot', 'Vue 3', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'Google Cloud', 'AWS', 'Playwright', 'RAG'];

function StackMarquee() {
  // Decorative: the same technologies are listed as text in Capabilities.
  const run = stackItems.map((item) => <span key={item}>{item}</span>);
  return <div className="stack-marquee" aria-hidden="true"><div className="stack-marquee__track"><div>{run}</div><div>{run}</div></div></div>;
}

const revealSelector = '.section-heading, .case-study, .experience-lead, .timeline article, .skill-group, .about-lead, .about-copy, .credentials-heading, .badge-card, .credential-list a, .contact-section h2';

function ScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    elements.forEach((element) => {
      const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
      element.style.setProperty('--reveal-delay', `${(siblings.indexOf(element) % 4) * 80}ms`);
      element.classList.add('reveal');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}

export default function App({ locale = 'en', page = 'portfolio' }: AppProps) {
  if (page === 'plain') return <PlainResumePage locale={locale} />;
  if (page === 'article') return <TechnicalArticlePage />;
  if (page === 'notFound') return <NotFoundPage />;
  return <><a className="skip-link" href="#main-content">{locale === 'en' ? 'Skip to content' : 'Saltar al contenido'}</a><Header locale={locale} /><main id="main-content"><Hero locale={locale} /><WorkSection locale={locale} /><ExperienceSection locale={locale} /><StackMarquee /><CapabilitiesSection locale={locale} /><AboutSection locale={locale} /><CredentialsSection locale={locale} /></main><ContactSection locale={locale} /><ScrollReveal /></>;
}
