import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
const navItems = [
    { href: '#about', text: 'Perfil' },
    { href: '#projects', text: 'Proyectos' },
    { href: '#skills', text: 'Stack' },
    { href: '#certifications', text: 'Credenciales' },
];
export function Header({ introDone }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = ['certifications', 'skills', 'projects', 'about'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 180) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs("header", { className: cn('fixed inset-x-0 top-0 z-50 transition-all duration-[1400] ease-out', scrolled ? 'py-3' : 'py-5', introDone ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'), children: [_jsxs("nav", { className: "mx-auto flex w-[min(1200px,calc(100%-1rem))] items-center justify-between rounded-full border border-[var(--line)] bg-[rgba(5,8,22,0.72)] px-3 py-2.5 shadow-[0_10px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl md:w-[min(1200px,calc(100%-1.5rem))] md:px-6 md:py-3", children: [_jsxs("a", { href: "#top", className: "flex min-w-0 items-center gap-2.5 md:gap-3", children: [_jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[rgba(96,165,250,0.12)] md:h-10 md:w-10", children: _jsx(Sparkles, { className: "h-4 w-4 text-[var(--accent-2)]" }) }), _jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: "truncate font-mono-ui text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] md:text-xs md:tracking-[0.28em]", children: "Billyflin" }), _jsx("p", { className: "truncate text-xs font-semibold text-[var(--ink)] md:text-sm", children: "Portfolio" })] })] }), _jsx("div", { className: "hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.55)] p-1 md:flex", children: navItems.map((item) => (_jsx("a", { href: item.href, className: cn('rounded-full px-4 py-2 text-sm transition-colors', activeSection === item.href.slice(1)
                                ? 'bg-white text-slate-950'
                                : 'text-[var(--muted)] hover:bg-white/10 hover:text-[var(--ink)]'), children: item.text }, item.href))) }), _jsxs("a", { href: "/Billy_Martinez_CV.pdf", target: "_blank", className: "hidden items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(96,165,250,0.12)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[rgba(96,165,250,0.18)] md:inline-flex", rel: "noreferrer", children: ["CV", _jsx(ArrowUpRight, { className: "h-4 w-4" })] }), _jsx("button", { onClick: () => setMobileMenuOpen((value) => !value), className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(15,23,42,0.55)] md:hidden", "aria-label": "Abrir men\u00FA", children: mobileMenuOpen ? _jsx(X, { className: "h-5 w-5 text-[var(--ink)]" }) : _jsx(Menu, { className: "h-5 w-5 text-[var(--ink)]" }) })] }), mobileMenuOpen ? (_jsx("div", { className: "mx-auto mt-3 w-[min(1200px,calc(100%-1rem))] rounded-[1.5rem] border border-[var(--line)] bg-[rgba(5,8,22,0.92)] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden", children: _jsx("div", { className: "flex flex-col gap-2", children: navItems.map((item) => (_jsx("a", { href: item.href, onClick: () => setMobileMenuOpen(false), className: "rounded-2xl px-4 py-3 text-[var(--ink)] hover:bg-white/5", children: item.text }, item.href))) }) })) : null] }));
}
