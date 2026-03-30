import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart3, Cloud, Database, ExternalLink, Layers3, LineChart, } from 'lucide-react';
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
    return (_jsx("section", { id: "certifications", className: "scroll-mt-28 px-4 py-10 md:scroll-mt-32 md:px-6 md:py-16", children: _jsxs("div", { className: "mx-auto w-full max-w-7xl", children: [_jsxs(Reveal, { className: "mb-10 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end", children: [_jsxs("div", { children: [_jsx("p", { className: "font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]", children: "Credentials" }), _jsx("h2", { className: "mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ink)] md:text-6xl", children: "Certificaciones que sostienen el lado t\u00E9cnico del portfolio." })] }), _jsx("p", { className: "max-w-xl text-base leading-7 text-[var(--muted)]", children: "Priorizo cloud y an\u00E1lisis de datos porque son las credenciales que mejor muestran profundidad t\u00E9cnica." })] }), _jsx("div", { className: "grid gap-6 xl:grid-cols-2", children: featuredCertifications.map((cert, index) => {
                        const Icon = cert.Icon;
                        return (_jsx(Reveal, { className: "overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:rounded-[1.75rem]", delay: index * 0.08, children: _jsxs("div", { className: "grid h-full md:grid-cols-[0.95fr_1.05fr]", children: [_jsxs("div", { className: "border-b border-[var(--line)] bg-[rgba(15,23,42,0.55)] p-4 md:border-b-0 md:border-r md:p-5", children: [_jsx("img", { src: cert.imageSrc, alt: cert.imageAlt, className: "h-full w-full rounded-[1.25rem] object-cover" }), cert.badgeImg ? (_jsx("a", { href: cert.badge, target: "_blank", rel: "noreferrer", className: "mt-4 block rounded-[1rem] border border-[var(--line)] bg-[rgba(15,23,42,0.55)] p-3", children: _jsx("img", { src: cert.badgeImg, alt: cert.badgeAlt, className: "mx-auto max-h-24 w-auto object-contain" }) })) : null] }), _jsxs("div", { className: "flex flex-col p-5 md:p-6", children: [_jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { children: [_jsx("p", { className: "font-mono-ui text-xs uppercase tracking-[0.22em] text-[var(--muted)]", children: cert.date }), _jsx("h3", { className: "mt-3 text-xl font-semibold leading-tight text-[var(--ink)] md:text-3xl", children: cert.name })] }), _jsx(Icon, { className: "h-8 w-8 text-[var(--accent-2)]" })] }), _jsx("p", { className: "mt-5 text-sm leading-7 text-[var(--muted)] md:text-base", children: cert.description }), _jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: cert.skills.map((skill) => (_jsx("span", { className: "rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.5)] px-3 py-2 text-[11px] font-medium tracking-wide text-[var(--ink)]", children: skill }, skill))) }), _jsx("div", { className: "mt-6 flex items-center justify-end gap-4", children: _jsxs("a", { href: cert.link, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(96,165,250,0.12)] px-4 py-3 text-sm font-semibold text-[var(--ink)]", children: ["Ver certificado", _jsx(ExternalLink, { className: "h-4 w-4" })] }) })] })] }) }, cert.name));
                    }) }), _jsxs("div", { className: "mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]", children: [_jsxs(Reveal, { className: "rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 md:rounded-[1.75rem] md:p-6", delay: 0.08, children: [_jsx("h3", { className: "text-xl font-semibold text-[var(--ink)] md:text-2xl", children: "Subcredenciales destacadas" }), _jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: highlightedSubcerts.map((sub) => {
                                        const Icon = sub.Icon;
                                        return (_jsxs("a", { href: sub.link, target: "_blank", rel: "noreferrer", className: "rounded-[1.1rem] border border-[var(--line)] bg-[rgba(15,23,42,0.48)] px-4 py-4 text-sm leading-6 text-[var(--ink)] transition-colors hover:border-[var(--line-strong)]", children: [_jsx("span", { className: "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5", children: _jsx(Icon, { className: "h-4 w-4" }) }), _jsx("div", { children: sub.name })] }, sub.name));
                                    }) })] }), _jsxs(Reveal, { className: "rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel-strong)] p-5 md:rounded-[1.75rem] md:p-6", delay: 0.14, children: [_jsx("h3", { className: "text-xl font-semibold text-[var(--ink)] md:text-2xl", children: "Complementarias" }), _jsx("div", { className: "mt-6 space-y-4", children: supportingCertifications.map((cert) => (_jsx("article", { className: "rounded-[1.1rem] border border-white/10 bg-white/5 p-4", children: _jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-base font-semibold text-[var(--ink)]", children: cert.name }), _jsx("p", { className: "mt-1 text-sm text-[var(--muted)]", children: cert.date })] }), _jsx("a", { href: cert.link, target: "_blank", rel: "noreferrer", className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5", children: _jsx(ExternalLink, { className: "h-4 w-4 text-[var(--ink)]" }) })] }) }, cert.name))) })] })] })] }) }));
}
