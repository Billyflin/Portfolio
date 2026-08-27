import type { Locale } from '../App';

const pages = {
  en: {
    label: 'Plain-text recruiter profile',
    headline: 'SAP BTP Technical Consultant · Architecture · Full-Stack Delivery',
    summary: 'Hands-on engineer who refines functional requirements into architecture and working software. Current scope includes SAP BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA, Joule, automated testing, QA coordination, and end-to-end delivery.',
    sectionExperience: 'Experience',
    roles: [
      ['BeCloud Consulting · SAP Consultant', 'Jan 2025 — Present', 'Requirement refinement with a functional consultant; solution architecture, Fiori/UI5 UX, full-stack SAP delivery, automated testing, QA and design coordination, deployment, and platform troubleshooting.'],
      ['Happ Rent · Full-Stack Developer', 'Oct 2023 — Sep 2024', 'Product delivery across frontend and backend in a rental-technology environment.'],
    ],
    sectionEvidence: 'Selected evidence',
    evidence: [
      ['Confidential SAP solutions', 'Convert functional requirements into architecture and delivery across SAP BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA, and Joule; introduced automated tests and a dedicated QA stage.'],
      ['SAP CAP/Fiori public reference', 'Open SAP BTP reference with CDS modeling, OData V4, Fiori Elements, XSUAA/HANA deployment design, and 12 CAP service tests covering role authorization, concurrent stock protection, and degraded external OData behavior; lint, production build, and GitHub Actions CI pass.'],
      ['Grounded RAG public reference', 'Independent Next.js/TypeScript reference with evidence gating, safe refusals, validated citations, 12 automated tests, deterministic fixture evaluations, and an optional server-only OpenAI provider.'],
      ['Confidential cloud platform', 'Recommended and aligned an AWS-to-Google-Cloud re-platform after evaluating cost and technical fit; implementation is in progress.'],
      ['Clinipets', 'Designed a multi-tenant veterinary platform with scheduling, auditable clinical records, payments, secure attachments, notifications, web/mobile clients, and infrastructure.'],
      ['UFRO Sustentable', 'Kotlin/Firebase Android project with QR and location flows, 83 JVM tests, 89.23% line coverage, and 77.88% branch coverage reported in the repository.'],
    ],
    sectionCapabilities: 'Capabilities',
    capabilities: 'Requirement refinement · Solution architecture · Fiori/UI5 UX · Automated testing · QA and design coordination · SAP BTP · CAP/CDS · Work Zone · HANA · Joule · Kotlin/Spring · TypeScript/React · Node.js · PostgreSQL · Google Cloud · AWS · Docker · CI/CD',
    sectionEducation: 'Education & languages',
    education: 'Ingeniería Informática, Universidad de La Frontera · Final semester, three courses remaining · Expected coursework completion 2026',
    languages: 'Spanish: Native · English: B2 professional working proficiency · Available for full overlap with US working hours',
    back: 'View visual portfolio',
    cv: 'Download Solutions CV',
  },
  es: {
    label: 'Perfil simple para reclutamiento',
    headline: 'Consultor técnico SAP BTP · Arquitectura · Entrega full-stack',
    summary: 'Ingeniero hands-on que refina requerimientos funcionales en arquitectura y software funcionando. Mi alcance actual incluye SAP BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA, Joule, pruebas automatizadas, coordinación de QA y entrega de punta a punta.',
    sectionExperience: 'Experiencia',
    roles: [
      ['BeCloud Consulting · Consultor SAP', 'Ene 2025 — Actualidad', 'Refinamiento de requerimientos con un consultor funcional; arquitectura, UX Fiori/UI5, entrega SAP full-stack, pruebas automatizadas, coordinación de QA y diseño, despliegue y resolución de problemas de plataforma.'],
      ['Happ Rent · Full-Stack Developer', 'Oct 2023 — Sep 2024', 'Entrega de producto en frontend y backend dentro de un entorno tecnológico de arriendo.'],
    ],
    sectionEvidence: 'Evidencia seleccionada',
    evidence: [
      ['Soluciones SAP confidenciales', 'Convierto requerimientos funcionales en arquitectura y entrega con SAP BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA y Joule; introduje pruebas automatizadas y una etapa dedicada de QA.'],
      ['Referencia pública SAP CAP/Fiori', 'Referencia abierta de SAP BTP con modelado CDS, OData V4, Fiori Elements, diseño de despliegue XSUAA/HANA y 12 pruebas CAP sobre autorización por roles, protección de stock concurrente y degradación de un servicio OData externo; lint, build productivo y CI pasan.'],
      ['Referencia pública de RAG comprobable', 'Referencia independiente Next.js/TypeScript con umbral de evidencia, rechazo seguro, citas validadas, 12 pruebas automatizadas, evaluación determinista y proveedor OpenAI opcional sólo en servidor.'],
      ['Plataforma cloud confidencial', 'Recomendé y alineé una migración AWS a Google Cloud después de evaluar costo y encaje técnico; la implementación está en curso.'],
      ['Clinipets', 'Diseñé una plataforma veterinaria multi-tenant con agenda, fichas clínicas auditables, pagos, archivos seguros, notificaciones, aplicaciones web/móvil e infraestructura.'],
      ['UFRO Sustentable', 'Proyecto Android Kotlin/Firebase con flujos QR y ubicación, 83 pruebas JVM, 89,23% de cobertura de líneas y 77,88% de ramas reportadas en el repositorio.'],
    ],
    sectionCapabilities: 'Capacidades',
    capabilities: 'Refinamiento de requisitos · Arquitectura de soluciones · UX Fiori/UI5 · Pruebas automatizadas · Coordinación de QA y diseño · SAP BTP · CAP/CDS · Work Zone · HANA · Joule · Kotlin/Spring · TypeScript/React · Node.js · PostgreSQL · Google Cloud · AWS · Docker · CI/CD',
    sectionEducation: 'Formación e idiomas',
    education: 'Ingeniería Informática, Universidad de La Frontera · Último semestre, tres ramos pendientes · Finalización académica esperada en 2026',
    languages: 'Español: Nativo · Inglés: B2 profesional · Disponible para jornada completa compatible con EE. UU.',
    back: 'Ver portafolio visual',
    cv: 'Descargar CV de soluciones',
  },
} as const;

export function PlainResumePage({ locale }: { locale: Locale }) {
  const t = pages[locale];
  const home = locale === 'en' ? '/' : '/es/';
  const cv = locale === 'en' ? '/Billy_Martinez_Resume_Solutions_EN.pdf' : '/Billy_Martinez_CV_Soluciones_ES.pdf';
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
