from pathlib import Path
from shutil import copy2

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
OUTPUT.mkdir(parents=True, exist_ok=True)
PUBLIC = ROOT / "public"

INK = colors.HexColor("#151515")
MUTED = colors.HexColor("#4f4d48")
ORANGE = colors.HexColor("#e84725")
LINE = colors.HexColor("#d8d4ca")


DATA = {
    "solutions_en": {
        "filename": "Billy_Martinez_Resume_Solutions_EN.pdf",
        "role": "SAP BTP Technical Consultant | Architecture | Full-Stack Delivery",
        "summary": "Hands-on engineer with 2+ years of professional product delivery. I refine functional requirements into solution architecture and working software, then stay involved through implementation, automated testing, QA, deployment, and troubleshooting across SAP BTP and cloud-native systems.",
        "experience": [
            {
                "heading": "BeCloud Consulting | SAP Consultant",
                "date": "Jan 2025 - Present",
                "bullets": [
                    "Refine requirements with a functional consultant and translate them into architecture and implementation work.",
                    "Design and build full-stack SAP solutions across BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA, Joule, integrations, and distributed deployments.",
                    "Improve process flow and UX within UI5 standards; contribute to SAP migration and modernization work for large organizations in energy and consumer goods.",
                    "Introduced automated testing and a dedicated QA stage beyond direct development/production fixes; coordinate validation with QA and design.",
                    "For a confidential product, evaluated cloud economics and technical fit, recommended an AWS-to-Google-Cloud re-platform, and aligned stakeholders around the change; implementation is in progress.",
                ],
            },
            {
                "heading": "Happ Rent | Full-Stack Developer",
                "date": "Oct 2023 - Sep 2024",
                "bullets": ["Delivered product work across frontend and backend in a rental-technology environment."],
            },
        ],
        "projects": [
            {
                "heading": "Clinipets | Independent product and private repository",
                "bullets": [
                    "Designed a B2B2C veterinary platform with clinic isolation, role-based access, conflict-safe scheduling, and versioned clinical records with signatures and auditable addenda.",
                    "Implemented signed idempotent payment flows, secure attachment quarantine, outbox notifications, web/mobile clients, and Docker-based infrastructure using Kotlin/Spring, KMP, Next.js, PostgreSQL, and R2.",
                ],
            },
            {
                "heading": "SAP CAP + Fiori Reference | github.com/Billyflin/sap-cap-fiori-btp",
                "bullets": ["Published CDS/OData V4 and Fiori Elements delivery with XSUAA/HANA deployment design, an architecture decision record, and 8 CAP service tests including admin authorization and non-admin 403 enforcement; lint, production build, and CI pass."],
            },
        ],
        "skills": "Requirement refinement; solution architecture; Fiori/UI5 UX; automated testing; QA and design coordination; SAP BTP, CAP/CDS, Work Zone, HANA, Joule; Kotlin/Spring; TypeScript/React; Node.js; PostgreSQL; REST/OpenAPI; Google Cloud; AWS; Docker; CI/CD.",
        "education": "Ingenieria Informatica, Universidad de La Frontera | 2020 - 2026 | Final semester, three courses remaining; coursework completion expected in 2026.",
        "credentials": "AWS Cloud Technology Consultant; AWS Cloud Solutions Architect; AWS Academy Machine Learning Foundations; Google Advanced Data Analytics.",
        "languages": "Spanish: Native | English: B2 professional working proficiency | Remote contractor | Full US-hours overlap",
        "labels": {"experience": "EXPERIENCE", "projects": "SELECTED EVIDENCE", "skills": "CAPABILITIES", "education": "EDUCATION, CREDENTIALS AND LANGUAGES"},
    },
    "backend_en": {
        "filename": "Billy_Martinez_Resume_Backend_EN.pdf",
        "role": "Backend / Platform Engineer | Kotlin, Spring, TypeScript | SAP BTP",
        "summary": "Backend and platform engineer with 2+ years of professional product delivery and hands-on ownership from domain modeling to production troubleshooting. I build secure multi-tenant systems, integrations, auditable workflows, and cloud delivery across Kotlin/Spring, TypeScript, PostgreSQL, SAP BTP, and Google Cloud.",
        "experience": [
            {
                "heading": "BeCloud Consulting | SAP Consultant",
                "date": "Jan 2025 - Present",
                "bullets": [
                    "Design domain models and service logic with SAP CAP/CDS, integrate Fiori and Work Zone experiences, and work across HANA, Joule, and BTP environments.",
                    "Own implementation, integration, deployment, and environment troubleshooting across distributed enterprise solutions.",
                    "Introduced automated testing and a QA stage; coordinate validation with QA and design before delivery.",
                    "Evaluated cost and technical fit for a confidential platform and drove an in-progress AWS-to-Google-Cloud re-platform decision.",
                ],
            },
            {
                "heading": "Happ Rent | Full-Stack Developer",
                "date": "Oct 2023 - Sep 2024",
                "bullets": ["Delivered product work across frontend and backend in a rental-technology environment."],
            },
        ],
        "projects": [
            {
                "heading": "Clinipets | System architecture and backend",
                "bullets": [
                    "Designed a modular Kotlin/Spring platform with clinic-scoped tenancy, passwordless access, roles, global pet identity, and conflict-safe scheduling.",
                    "Built versioned clinical records with signatures and auditable addenda, signed idempotent payment webhooks, secure attachment quarantine, and reliable outbox-based notifications.",
                    "Defined OpenAPI contracts and Docker-based delivery for web, mobile, PostgreSQL, and private object storage components.",
                ],
            },
            {
                "heading": "SAP CAP + Fiori Reference | github.com/Billyflin/sap-cap-fiori-btp",
                "bullets": ["Published CDS/OData V4 and Fiori Elements delivery with XSUAA/HANA deployment design, an architecture decision record, and 8 CAP service tests including admin authorization and non-admin 403 enforcement; lint, production build, and CI pass."],
            },
        ],
        "skills": "Kotlin; Spring Boot; SAP CAP/CDS; Node.js; TypeScript; REST/OpenAPI; PostgreSQL; multi-tenant architecture; authentication and authorization; payments and webhooks; Docker; CI/CD; Google Cloud; AWS; observability.",
        "education": "Ingenieria Informatica, Universidad de La Frontera | 2020 - 2026 | Final semester, three courses remaining; coursework completion expected in 2026.",
        "credentials": "AWS Cloud Solutions Architect; AWS Cloud Technology Consultant; AWS Academy Machine Learning Foundations; Google Advanced Data Analytics.",
        "languages": "Spanish: Native | English: B2 professional working proficiency | Remote contractor | Full US-hours overlap",
        "labels": {"experience": "EXPERIENCE", "projects": "SELECTED TECHNICAL WORK", "skills": "TECHNICAL CAPABILITIES", "education": "EDUCATION, CREDENTIALS AND LANGUAGES"},
    },
    "quality_en": {
        "filename": "Billy_Martinez_Resume_Quality_EN.pdf",
        "role": "Software Development Engineer in Test | TypeScript, APIs, CI/CD",
        "summary": "Quality-focused software engineer with 2+ years of professional product delivery. I turn requirements and production risks into automated checks, testable system boundaries, QA workflows, and release evidence across SAP BTP, web, API, and cloud-native systems.",
        "experience": [
            {
                "heading": "BeCloud Consulting | SAP Consultant",
                "date": "Jan 2025 - Present",
                "bullets": [
                    "Introduced automated testing and a dedicated QA stage in a workflow that previously relied on direct dev/production fixes.",
                    "Refine requirements with a functional consultant, implement SAP BTP solutions, and coordinate validation with QA and design before delivery.",
                    "Work across Fiori/UI5, CAP/CDS services, HANA, Work Zone, integrations, deployment, and environment troubleshooting, keeping quality connected to implementation.",
                    "Improve process flows and UX within UI5 standards, identifying failure paths and acceptance risks across interface, service, data, and platform layers.",
                ],
            },
            {
                "heading": "Happ Rent | Full-Stack Developer",
                "date": "Oct 2023 - Sep 2024",
                "bullets": ["Delivered product work across frontend and backend in a rental-technology environment."],
            },
        ],
        "projects": [
            {
                "heading": "UFRO Sustentable | Automated quality evidence",
                "bullets": [
                    "Built Kotlin/Firebase Android flows for maps, QR scanning, and rewards in a team project using BDD/Cucumber.",
                    "The public repository documents 83 JVM tests with 89.23% line coverage and 77.88% branch coverage.",
                ],
            },
            {
                "heading": "SAP CAP + Fiori Reference | Public test evidence",
                "bullets": [
                    "Published 8 service tests covering business rules and role boundaries, including positive admin access and non-admin 403 enforcement.",
                    "GitHub Actions verifies lint, the CAP suite, and production build; the repository also documents XSUAA/HANA deployment and security decisions.",
                ],
            },
        ],
        "skills": "Test automation; unit and integration testing; API and contract testing; QA workflow design; defect analysis; TypeScript/JavaScript; React; Kotlin; REST/OpenAPI; SAP BTP; CAP/CDS; AWS; Docker; Git; CI/CD; PostgreSQL; authentication and authorization.",
        "education": "Ingenieria Informatica, Universidad de La Frontera | 2020 - 2026 | Final semester, three courses remaining; coursework completion expected in 2026.",
        "credentials": "AWS Cloud Solutions Architect; AWS Cloud Technology Consultant; AWS Academy Machine Learning Foundations; Google Advanced Data Analytics.",
        "languages": "Spanish: Native | English: B2 professional working proficiency | Remote contractor | Full US-hours overlap",
        "labels": {"experience": "EXPERIENCE", "projects": "QUALITY EVIDENCE", "skills": "TEST AND ENGINEERING CAPABILITIES", "education": "EDUCATION, CREDENTIALS AND LANGUAGES"},
    },
    "solutions_es": {
        "filename": "Billy_Martinez_CV_Soluciones_ES.pdf",
        "role": "Consultor técnico SAP BTP | Arquitectura | Entrega full-stack",
        "summary": "Ingeniero hands-on con más de 2 años de entrega profesional. Convierto requerimientos funcionales en arquitectura y software, y sigo involucrado durante implementación, pruebas, QA, despliegue y resolución de problemas.",
        "experience": [
            {
                "heading": "BeCloud Consulting | Consultor SAP",
                "date": "Ene 2025 - Actualidad",
                "bullets": [
                    "Refino requerimientos con el consultor funcional y los traduzco en arquitectura y trabajo de implementación.",
                    "Diseño y construyo soluciones SAP full-stack con BTP, Fiori/UI5, CAP/CDS, Work Zone, HANA, Joule, integraciones y despliegues distribuidos.",
                    "Mejoro flujos y UX UI5 y contribuyo a modernizaciones SAP para grandes empresas de energía y consumo.",
                    "Introduje pruebas automatizadas y una etapa de QA donde antes había correcciones directas entre desarrollo y producción; coordino QA y diseño.",
                    "Para un producto confidencial evalué costo y encaje técnico, recomendé migrar de AWS a Google Cloud y alineé a los involucrados; está en implementación.",
                ],
            },
            {
                "heading": "Happ Rent | Full-Stack Developer",
                "date": "Oct 2023 - Sep 2024",
                "bullets": ["Entregué trabajo de producto en frontend y backend dentro de un entorno tecnológico de arriendo."],
            },
        ],
        "projects": [
            {
                "heading": "Clinipets | Producto propio y repositorio privado",
                "bullets": [
                    "Diseñé una plataforma veterinaria B2B2C con aislamiento entre clínicas, acceso por roles, agenda sin conflictos y fichas clínicas versionadas con firmas y correcciones auditables.",
                    "Implementé pagos firmados e idempotentes, cuarentena de archivos, notificaciones outbox, clientes web/móvil e infraestructura Docker usando Kotlin/Spring, KMP, Next.js, PostgreSQL y R2.",
                ],
            },
            {
                "heading": "Referencia SAP CAP + Fiori | github.com/Billyflin/sap-cap-fiori-btp",
                "bullets": ["Publiqué una solución CDS/OData V4 y Fiori Elements con diseño de despliegue XSUAA/HANA, una decisión de arquitectura y 8 pruebas CAP, incluyendo autorización administrativa y rechazo 403 sin rol; lint, build productivo y CI pasan."],
            },
        ],
        "skills": "Refinamiento de requisitos; arquitectura de soluciones; UX Fiori/UI5; pruebas automatizadas; coordinación de QA y diseño; SAP BTP, CAP/CDS, Work Zone, HANA, Joule; Kotlin/Spring; TypeScript/React; Node.js; PostgreSQL; REST/OpenAPI; Google Cloud; AWS; Docker; CI/CD.",
        "education": "Ingeniería Informática, Universidad de La Frontera | 2020 - 2026 | Último semestre, tres ramos pendientes; finalización académica esperada en 2026.",
        "credentials": "AWS Cloud Technology Consultant; AWS Cloud Solutions Architect; AWS Academy Machine Learning Foundations; Google Advanced Data Analytics.",
        "languages": "Español: Nativo | Inglés: B2 profesional | Contractor remoto | Jornada completa compatible con EE. UU.",
        "labels": {"experience": "EXPERIENCIA", "projects": "EVIDENCIA SELECCIONADA", "skills": "CAPACIDADES", "education": "FORMACIÓN, CREDENCIALES E IDIOMAS"},
    },
    "backend_es": {
        "filename": "Billy_Martinez_CV_Backend_ES.pdf",
        "role": "Backend / Platform Engineer | Kotlin, Spring, TypeScript | SAP BTP",
        "summary": "Ingeniero backend y de plataforma con más de 2 años de entrega profesional y responsabilidad desde el modelo de dominio hasta la resolución de problemas en producción. Construyo sistemas multi-tenant seguros, integraciones, flujos auditables y entrega cloud.",
        "experience": [
            {
                "heading": "BeCloud Consulting | Consultor SAP",
                "date": "Ene 2025 - Actualidad",
                "bullets": [
                    "Diseño modelos de dominio y lógica de servicios con SAP CAP/CDS, integro experiencias Fiori y Work Zone y trabajo con HANA, Joule y ambientes BTP.",
                    "Me hago cargo de implementación, integración, despliegue y resolución de problemas en soluciones empresariales distribuidas.",
                    "Introduje pruebas automatizadas y una etapa de QA; coordino la validación con QA y diseño antes de la entrega.",
                    "Evalué costo y encaje técnico de una plataforma confidencial e impulsé una decisión de migración AWS a Google Cloud actualmente en implementación.",
                ],
            },
            {
                "heading": "Happ Rent | Full-Stack Developer",
                "date": "Oct 2023 - Sep 2024",
                "bullets": ["Entregué trabajo de producto en frontend y backend dentro de un entorno tecnológico de arriendo."],
            },
        ],
        "projects": [
            {
                "heading": "Clinipets | Arquitectura de sistema y backend",
                "bullets": [
                    "Diseñé una plataforma modular Kotlin/Spring con tenants por clínica, acceso sin contraseña, roles, identidad global de mascotas y agenda sin conflictos.",
                    "Construí fichas clínicas versionadas, firmas y correcciones auditables, webhooks de pago firmados e idempotentes, cuarentena de archivos y notificaciones outbox.",
                    "Definí contratos OpenAPI y entrega con Docker para componentes web, móvil, PostgreSQL y almacenamiento privado de objetos.",
                ],
            },
            {
                "heading": "Referencia SAP CAP + Fiori | github.com/Billyflin/sap-cap-fiori-btp",
                "bullets": ["Publiqué una solución CDS/OData V4 y Fiori Elements con diseño de despliegue XSUAA/HANA, una decisión de arquitectura y 8 pruebas CAP, incluyendo autorización administrativa y rechazo 403 sin rol; lint, build productivo y CI pasan."],
            },
        ],
        "skills": "Kotlin; Spring Boot; SAP CAP/CDS; Node.js; TypeScript; REST/OpenAPI; PostgreSQL; arquitectura multi-tenant; autenticación y autorización; pagos y webhooks; Docker; CI/CD; Google Cloud; AWS; observabilidad.",
        "education": "Ingeniería Informática, Universidad de La Frontera | 2020 - 2026 | Último semestre, tres ramos pendientes; finalización académica esperada en 2026.",
        "credentials": "AWS Cloud Solutions Architect; AWS Cloud Technology Consultant; AWS Academy Machine Learning Foundations; Google Advanced Data Analytics.",
        "languages": "Español: Nativo | Inglés: B2 profesional | Contractor remoto | Jornada completa compatible con EE. UU.",
        "labels": {"experience": "EXPERIENCIA", "projects": "TRABAJO TÉCNICO SELECCIONADO", "skills": "CAPACIDADES TÉCNICAS", "education": "FORMACIÓN, CREDENCIALES E IDIOMAS"},
    },
}


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle("Name", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=22, leading=23.5, textColor=INK, spaceAfter=1.5),
        "role": ParagraphStyle("Role", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.8, leading=10.4, textColor=ORANGE, spaceAfter=3),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="Helvetica", fontSize=7.35, leading=8.6, textColor=MUTED, spaceAfter=6),
        "summary": ParagraphStyle("Summary", parent=base["Normal"], fontName="Helvetica", fontSize=8.3, leading=10.25, textColor=INK, spaceAfter=4),
        "section": ParagraphStyle("Section", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=7.5, leading=8.8, textColor=ORANGE, borderColor=LINE, borderWidth=0, borderPadding=0, spaceBefore=3, spaceAfter=2),
        "job": ParagraphStyle("Job", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.8, leading=10.15, textColor=INK, spaceAfter=0.7),
        "date": ParagraphStyle("Date", parent=base["Normal"], fontName="Helvetica", fontSize=7.2, leading=8, textColor=MUTED, spaceAfter=1.5),
        "bullet": ParagraphStyle("Bullet", parent=base["Normal"], fontName="Helvetica", fontSize=7.85, leading=9.45, leftIndent=9, firstLineIndent=-6, bulletIndent=0, textColor=INK, spaceAfter=0.8),
        "body": ParagraphStyle("Body", parent=base["Normal"], fontName="Helvetica", fontSize=7.85, leading=9.5, textColor=INK, spaceAfter=1.5),
    }


def section(story, title, style):
    story.append(Spacer(1, 2))
    story.append(Paragraph(title, style))


def build_resume(data):
    file_path = OUTPUT / data["filename"]
    doc = SimpleDocTemplate(
        str(file_path),
        pagesize=LETTER,
        rightMargin=0.56 * inch,
        leftMargin=0.56 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.42 * inch,
        title=f"Billy Martínez - {data['role']}",
        author="Billy Martínez",
        subject="Professional resume",
    )
    s = styles()
    story = [
        Paragraph("Billy Martínez", s["name"]),
        Paragraph(data["role"], s["role"]),
        Paragraph(
            "Temuco, Chile | Remote contractor | Full US-hours overlap | "
            "<link href='mailto:hello@billyflin.dev'>hello@billyflin.dev</link> | "
            "<link href='https://billyflin.dev'>billyflin.dev</link> | "
            "<link href='https://www.linkedin.com/in/billyflin'>linkedin.com/in/billyflin</link> | "
            "<link href='https://github.com/Billyflin'>github.com/Billyflin</link>",
            s["contact"],
        ),
        Paragraph(data["summary"], s["summary"]),
    ]

    section(story, data["labels"]["experience"], s["section"])
    for job in data["experience"]:
        block = [Paragraph(job["heading"], s["job"]), Paragraph(job["date"], s["date"])]
        block.extend(Paragraph(f"- {bullet}", s["bullet"]) for bullet in job["bullets"])
        story.append(KeepTogether(block))
        story.append(Spacer(1, 2))

    section(story, data["labels"]["projects"], s["section"])
    for project in data["projects"]:
        block = [Paragraph(project["heading"], s["job"])]
        block.extend(Paragraph(f"- {bullet}", s["bullet"]) for bullet in project["bullets"])
        story.append(KeepTogether(block))
        story.append(Spacer(1, 1))

    section(story, data["labels"]["skills"], s["section"])
    story.append(Paragraph(data["skills"], s["body"]))

    section(story, data["labels"]["education"], s["section"])
    story.append(Paragraph(data["education"], s["body"]))
    story.append(Paragraph(data["credentials"], s["body"]))
    story.append(Paragraph(data["languages"], s["body"]))

    def draw_page(canvas, document):
        canvas.saveState()
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.6)
        canvas.line(document.leftMargin, LETTER[1] - 0.34 * inch, LETTER[0] - document.rightMargin, LETTER[1] - 0.34 * inch)
        canvas.restoreState()

    doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    return file_path


generated = [build_resume(resume) for resume in DATA.values()]
for file_path in generated:
    copy2(file_path, PUBLIC / file_path.name)

# Keep the historical URL working while making it identical to the canonical
# Spanish solutions resume.
copy2(OUTPUT / "Billy_Martinez_CV_Soluciones_ES.pdf", PUBLIC / "Billy_Martinez_CV.pdf")
