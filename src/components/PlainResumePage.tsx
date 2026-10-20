import type { Locale } from '../App';

const pages = {
  en: {
    label: 'Plain-text recruiter profile',
    headline: 'SAP BTP Developer · Full-Stack · Node.js/TypeScript · Kotlin/Spring · Vue',
    summary: '32 months of professional experience: SAP BTP at BeCloud (CAP/CDS on Node.js/TypeScript, Fiori/UI5, HANA, OData) and full-stack Kotlin/Spring Boot + Vue 3 at HappRent. I refine functional requirements into architecture and working systems, and stay through automated testing, QA coordination, and delivery. Available immediately.',
    sectionExperience: 'Experience',
    roles: [
      ['BeCloud Consulting · SAP BTP Consultant', 'Jan 2025 — Sep 2026', 'Requirement refinement with a functional consultant; solution architecture, Fiori/UI5 UX, full-stack SAP delivery, automated testing, QA and design coordination, deployment, and platform troubleshooting.'],
      ['Happ Rent · Full-Stack Developer', 'Oct 2023 — Sep 2024', 'As part of the team: Kotlin + Spring Boot 3 API (Spring Security/JWT, JPA, email), Vue 3 + Pinia frontend for leases, properties, brokers and KPIs, contract PDF generation and templates, Docker images published on AWS. Scrum/Kanban.'],
    ],
    sectionEvidence: 'Selected evidence',
    evidence: [
      ['Confidential SAP solutions', 'Converted functional requirements into architecture and delivery across SAP BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA, and Joule; introduced automated tests and a dedicated QA stage.'],
      ['SAP CAP/Fiori reference (public proof page)', 'SAP BTP reference with CDS modeling, OData V4, Fiori Elements, XSUAA/HANA deployment design, and 12 CAP service tests covering role authorization, concurrent stock protection, and degraded external OData behavior; lint, production build, and CI pass. Evidence: billyflin.dev/proof/sap-cap-fiori-btp/'],
      ['Grounded RAG public reference', 'Independent Next.js/TypeScript reference with evidence gating, safe refusals, validated citations, 12 automated tests, deterministic fixture evaluations, and an optional server-only OpenAI provider.'],
      ['Confidential cloud platform', 'Recommended and aligned an AWS-to-Google-Cloud re-platform after evaluating cost and technical fit; implementation is in progress.'],
      ['Clinipets', 'Designed a multi-tenant veterinary platform with scheduling, auditable clinical records, payments, secure attachments, notifications, web/mobile clients, and infrastructure.'],
      ['UFRO Sustentable', 'Kotlin/Firebase Android project with QR and location flows, 83 JVM tests, 89.23% line coverage, and 77.88% branch coverage reported in the repository.'],
    ],
    sectionCapabilities: 'Capabilities',
    capabilities: 'Systems architecture · Domain modeling · API and integration design · Kotlin/Spring · Node.js/TypeScript · REST/OpenAPI · PostgreSQL · Multi-tenant systems · React/Next.js · Automated testing · CI/CD · Observability · SAP BTP · CAP/CDS · Fiori/UI5 · Work Zone · HANA · Google Cloud · AWS · Docker',
    sectionEducation: 'Education & languages',
    education: 'Ingeniería Informática, Universidad de La Frontera · 2020–2026 · Coursework completed',
    languages: 'Spanish: Native · English: B2 professional working proficiency · Temuco, Chile · Seeking salaried employment · Immediate availability · Remote, hybrid, or on-site · Open to relocation within Chile',
    back: 'View visual portfolio',
    cv: 'Download SAP BTP CV',
  },
  es: {
    label: 'Perfil simple para reclutamiento',
    headline: 'Desarrollador SAP BTP · Full Stack · Node.js/TypeScript · Kotlin/Spring · Vue',
    summary: '32 meses de experiencia profesional: SAP BTP en BeCloud (CAP/CDS sobre Node.js/TypeScript, Fiori/UI5, HANA, OData) y full stack Kotlin/Spring Boot + Vue 3 en HappRent. Convierto requerimientos funcionales en arquitectura y sistemas funcionando, y sigo hasta las pruebas automatizadas, la coordinación de QA y la entrega. Disponibilidad inmediata.',
    sectionExperience: 'Experiencia',
    roles: [
      ['BeCloud Consulting · Consultor SAP BTP', 'Ene 2025 — Sep 2026', 'Refinamiento de requerimientos con un consultor funcional; arquitectura, UX Fiori/UI5, entrega SAP full-stack, pruebas automatizadas, coordinación de QA y diseño, despliegue y resolución de problemas de plataforma.'],
      ['Happ Rent · Desarrollador Full Stack', 'Oct 2023 — Sep 2024', 'Dentro del equipo: API en Kotlin + Spring Boot 3 (Spring Security/JWT, JPA, correo), frontend Vue 3 + Pinia para contratos, propiedades, corredoras e indicadores, generación de contratos PDF y plantillas, imágenes Docker publicadas en AWS. Scrum/Kanban.'],
    ],
    sectionEvidence: 'Evidencia seleccionada',
    evidence: [
      ['Soluciones SAP confidenciales', 'Convertí requerimientos funcionales en arquitectura y entrega con SAP BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA y Joule; introduje pruebas automatizadas y una etapa dedicada de QA.'],
      ['Referencia SAP CAP/Fiori (página de evidencia pública)', 'Referencia SAP BTP con modelado CDS, OData V4, Fiori Elements, diseño de despliegue XSUAA/HANA y 12 pruebas CAP sobre autorización por roles, protección de stock concurrente y degradación de un servicio OData externo; lint, build productivo y CI pasan. Evidencia: billyflin.dev/proof/sap-cap-fiori-btp/'],
      ['Referencia pública de RAG comprobable', 'Referencia independiente Next.js/TypeScript con umbral de evidencia, rechazo seguro, citas validadas, 12 pruebas automatizadas, evaluación determinista y proveedor OpenAI opcional sólo en servidor.'],
      ['Plataforma cloud confidencial', 'Recomendé y alineé una migración AWS a Google Cloud después de evaluar costo y encaje técnico; la implementación está en curso.'],
      ['Clinipets', 'Diseñé una plataforma veterinaria multi-tenant con agenda, fichas clínicas auditables, pagos, archivos seguros, notificaciones, aplicaciones web/móvil e infraestructura.'],
      ['UFRO Sustentable', 'Proyecto Android Kotlin/Firebase con flujos QR y ubicación, 83 pruebas JVM, 89,23% de cobertura de líneas y 77,88% de ramas reportadas en el repositorio.'],
    ],
    sectionCapabilities: 'Capacidades',
    capabilities: 'Arquitectura de sistemas · Modelado de dominio · Diseño de APIs e integraciones · Kotlin/Spring · Node.js/TypeScript · REST/OpenAPI · PostgreSQL · Sistemas multi-tenant · React/Next.js · Pruebas automatizadas · CI/CD · Observabilidad · SAP BTP · CAP/CDS · Fiori/UI5 · Work Zone · HANA · Google Cloud · AWS · Docker',
    sectionEducation: 'Formación e idiomas',
    education: 'Ingeniería Informática, Universidad de La Frontera · 2020–2026 · Egresado',
    languages: 'Español: Nativo · Inglés: B2 profesional · Temuco, Chile · Busco empleo asalariado con contrato · Disponibilidad inmediata · Remoto, híbrido o presencial · Posibilidad de traslado dentro de Chile',
    back: 'Ver portafolio visual',
    cv: 'Descargar CV SAP BTP',
  },
} as const;

export function PlainResumePage({ locale }: { locale: Locale }) {
  const t = pages[locale];
  const home = locale === 'en' ? '/' : '/es/';
  const cv = locale === 'en' ? '/Billy_Martinez_CV_SAP-BTP_EN.pdf' : '/Billy_Martinez_CV_SAP-BTP_ES.pdf';
  return (
    <main className="plain-page">
      <div className="plain-shell">
        <header className="plain-header">
          <p className="plain-label">{t.label}</p>
          <h1>Billy Martínez</h1>
          <h2>{t.headline}</h2>
          <p>{t.summary}</p>
          <div className="plain-links">
            <a href="mailto:hello@billyflin.dev">hello@billyflin.dev</a>
            <a href="https://www.linkedin.com/in/billyflin">LinkedIn</a>
            <a href="https://github.com/Billyflin">GitHub</a>
            <a href={cv}>{t.cv}</a>
            <a href={home}>{t.back}</a>
          </div>
        </header>
        <section className="plain-section"><h2>{t.sectionExperience}</h2>{t.roles.map(([title, period, body]) => <article key={title}><h3>{title}</h3><p className="plain-period">{period}</p><p>{body}</p></article>)}</section>
        <section className="plain-section"><h2>{t.sectionEvidence}</h2>{t.evidence.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</section>
        <section className="plain-section"><h2>{t.sectionCapabilities}</h2><p>{t.capabilities}</p></section>
        <section className="plain-section"><h2>{t.sectionEducation}</h2><p>{t.education}</p><p>{t.languages}</p></section>
      </div>
    </main>
  );
}
