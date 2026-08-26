from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
OUTPUT.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#151515")
MUTED = colors.HexColor("#4f4d48")
ORANGE = colors.HexColor("#e84725")
LINE = colors.HexColor("#d8d4ca")


DATA = {
    "solutions_en": {
        "filename": "Billy_Martinez_Resume_Solutions_EN.pdf",
        "role": "SAP Technical Consultant | Solutions Engineering | Full-Stack Delivery",
        "summary": "Client-facing engineer with 2+ years of professional product delivery. I translate business requirements into solution architecture and working software, then stay involved through implementation, integration, deployment, and troubleshooting. Current scope spans SAP BTP and cloud-native product systems.",
        "experience": [
            {
                "heading": "BeCloud Consulting | SAP Consultant",
                "date": "Jan 2025 - Present",
                "bullets": [
                    "Run discovery with clients, clarify requirements, and translate operational needs into solution designs and implementation work.",
                    "Design and build full-stack SAP solutions across BTP, Fiori, CAP/CDS, Work Zone, HANA, Joule, integrations, and distributed deployments.",
                    "Stay responsible across interface, domain model, platform configuration, delivery, and environment troubleshooting.",
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
                "heading": "UFRO Sustentable | Open university team project",
                "bullets": ["Built Kotlin/Firebase Android flows for maps, QR scanning, and rewards; the repository documents 83 JVM tests, 89.23% line coverage, and 77.88% branch coverage."],
            },
        ],
        "skills": "Discovery and requirements translation; solution design; stakeholder alignment; SAP BTP, Fiori, CAP/CDS, Work Zone, HANA, Joule; Kotlin/Spring; TypeScript/React; Node.js; PostgreSQL; REST/OpenAPI; Google Cloud; AWS; Docker; CI/CD.",
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
                "heading": "UFRO Sustentable | Quality-focused Android delivery",
                "bullets": ["Kotlin/Firebase team project with BDD/Cucumber, 83 JVM tests, and repository-reported coverage of 89.23% lines and 77.88% branches."],
            },
        ],
        "skills": "Kotlin; Spring Boot; SAP CAP/CDS; Node.js; TypeScript; REST/OpenAPI; PostgreSQL; multi-tenant architecture; authentication and authorization; payments and webhooks; Docker; CI/CD; Google Cloud; AWS; observability.",
        "education": "Ingenieria Informatica, Universidad de La Frontera | 2020 - 2026 | Final semester, three courses remaining; coursework completion expected in 2026.",
        "credentials": "AWS Cloud Solutions Architect; AWS Cloud Technology Consultant; AWS Academy Machine Learning Foundations; Google Advanced Data Analytics.",
        "languages": "Spanish: Native | English: B2 professional working proficiency | Remote contractor | Full US-hours overlap",
        "labels": {"experience": "EXPERIENCE", "projects": "SELECTED TECHNICAL WORK", "skills": "TECHNICAL CAPABILITIES", "education": "EDUCATION, CREDENTIALS AND LANGUAGES"},
    },
    "solutions_es": {
        "filename": "Billy_Martinez_CV_Soluciones_ES.pdf",
        "role": "Consultor técnico SAP | Solutions Engineering | Entrega full-stack",
        "summary": "Ingeniero con experiencia directa con clientes y más de 2 años de entrega profesional de productos. Traduzco requisitos del negocio en arquitectura de soluciones y software funcionando, y sigo involucrado durante implementación, integración, despliegue y resolución de problemas.",
        "experience": [
            {
                "heading": "BeCloud Consulting | Consultor SAP",
                "date": "Ene 2025 - Actualidad",
                "bullets": [
                    "Realizo discovery con clientes, aclaro requisitos y traduzco necesidades operacionales en diseño de soluciones y trabajo de implementación.",
                    "Diseño y construyo soluciones SAP full-stack con BTP, Fiori, CAP/CDS, Work Zone, HANA, Joule, integraciones y despliegues distribuidos.",
                    "Me hago cargo de interfaz, modelo de dominio, configuración de plataforma, entrega y resolución de problemas del ambiente.",
                    "Para un producto confidencial, evalué economía cloud y encaje técnico, recomendé migrar desde AWS a Google Cloud y alineé a los involucrados; la implementación está en curso.",
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
                "heading": "UFRO Sustentable | Proyecto abierto de equipo universitario",
                "bullets": ["Construí flujos Android Kotlin/Firebase para mapas, QR y recompensas; el repositorio documenta 83 pruebas JVM, 89,23% de cobertura de líneas y 77,88% de ramas."],
            },
        ],
        "skills": "Discovery y traducción de requisitos; diseño de soluciones; alineamiento; SAP BTP, Fiori, CAP/CDS, Work Zone, HANA, Joule; Kotlin/Spring; TypeScript/React; Node.js; PostgreSQL; REST/OpenAPI; Google Cloud; AWS; Docker; CI/CD.",
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
                "heading": "UFRO Sustentable | Entrega Android enfocada en calidad",
                "bullets": ["Proyecto de equipo Kotlin/Firebase con BDD/Cucumber, 83 pruebas JVM y cobertura reportada de 89,23% de líneas y 77,88% de ramas."],
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
        "name": ParagraphStyle("Name", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=23, leading=25, textColor=INK, spaceAfter=2),
        "role": ParagraphStyle("Role", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=9.2, leading=11.2, textColor=ORANGE, spaceAfter=4),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="Helvetica", fontSize=7.7, leading=9.2, textColor=MUTED, spaceAfter=8),
        "summary": ParagraphStyle("Summary", parent=base["Normal"], fontName="Helvetica", fontSize=8.7, leading=11, textColor=INK, spaceAfter=6),
        "section": ParagraphStyle("Section", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=7.8, leading=9.2, textColor=ORANGE, borderColor=LINE, borderWidth=0, borderPadding=0, spaceBefore=4, spaceAfter=3),
        "job": ParagraphStyle("Job", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=9.2, leading=10.8, textColor=INK, spaceAfter=1),
        "date": ParagraphStyle("Date", parent=base["Normal"], fontName="Helvetica", fontSize=7.5, leading=8.5, textColor=MUTED, spaceAfter=2),
        "bullet": ParagraphStyle("Bullet", parent=base["Normal"], fontName="Helvetica", fontSize=8.15, leading=10.05, leftIndent=9, firstLineIndent=-6, bulletIndent=0, textColor=INK, spaceAfter=1.2),
        "body": ParagraphStyle("Body", parent=base["Normal"], fontName="Helvetica", fontSize=8.15, leading=10.1, textColor=INK, spaceAfter=2),
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
            "<link href='mailto:billymartinezc@gmail.com'>billymartinezc@gmail.com</link> | "
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


for resume in DATA.values():
    build_resume(resume)
