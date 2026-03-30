import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "skills", className: "scroll-mt-28 px-4 py-10 md:scroll-mt-32 md:px-6 md:py-16", children: _jsxs("div", { className: "mx-auto w-full max-w-7xl", children: [_jsxs(Reveal, { className: "mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between", children: [_jsxs("div", { className: "max-w-2xl", children: [_jsx("p", { className: "font-mono-ui text-xs uppercase tracking-[0.24em] text-[var(--muted)]", children: "Stack" }), _jsx("h2", { className: "mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ink)] md:text-6xl", children: "Tecnolog\u00EDa organizada como sistema, no como nube de badges." })] }), _jsx("p", { className: "max-w-md text-base leading-7 text-[var(--muted)]", children: "El objetivo aqu\u00ED es comunicar orden, amplitud y foco. Menos ruido visual, mejor lectura." })] }), _jsx("div", { className: "grid gap-5 lg:grid-cols-2", children: skillGroups.map((group, index) => (_jsxs(Reveal, { className: "rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.14)] md:rounded-[1.75rem] md:p-6", delay: index * 0.08, children: [_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx("h3", { className: "text-xl font-semibold tracking-tight text-[var(--ink)] md:text-2xl", children: group.name }), _jsxs("div", { className: "rounded-full border border-[var(--line)] px-3 py-1 font-mono-ui text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] md:text-[11px] md:tracking-[0.24em]", children: [group.items.length, " items"] })] }), _jsx("div", { className: "mt-5 flex flex-wrap gap-2.5 md:mt-6 md:gap-3", children: group.items.map((item) => (_jsx("span", { className: "rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.46)] px-3.5 py-2.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--line-strong)] hover:bg-[rgba(96,165,250,0.08)] md:px-4 md:py-3", children: item }, item))) })] }, group.name))) })] }) }));
}
