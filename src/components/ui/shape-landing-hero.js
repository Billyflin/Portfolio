"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
function ElegantShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]", }) {
    return (_jsx(motion.div, { initial: {
            opacity: 0,
            y: -150,
            rotate: rotate - 15,
        }, animate: {
            opacity: 1,
            y: 0,
            rotate,
        }, transition: {
            duration: 2.4,
            delay,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
        }, className: cn("absolute", className), children: _jsx(motion.div, { animate: {
                y: [0, 15, 0],
            }, transition: {
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            }, style: {
                width,
                height,
            }, className: "relative", children: _jsx("div", { className: cn("absolute inset-0 rounded-full", "bg-gradient-to-r to-transparent", gradient, "backdrop-blur-[2px] border-2 border-white/[0.15]", "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]", "after:absolute after:inset-0 after:rounded-full", "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]") }) }) }));
}
function HeroGeometric({ badge = "Design Collective", title1 = "Elevate Your Digital Vision", title2 = "Crafting Exceptional Websites", description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.", }) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };
    return (_jsxs("div", { className: "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" }), _jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx(ElegantShape, { delay: 0.3, width: 600, height: 140, rotate: 12, gradient: "from-indigo-500/[0.15]", className: "left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]" }), _jsx(ElegantShape, { delay: 0.5, width: 500, height: 120, rotate: -15, gradient: "from-rose-500/[0.15]", className: "right-[-5%] top-[70%] md:right-[0%] md:top-[75%]" }), _jsx(ElegantShape, { delay: 0.4, width: 300, height: 80, rotate: -8, gradient: "from-violet-500/[0.15]", className: "bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]" }), _jsx(ElegantShape, { delay: 0.6, width: 200, height: 60, rotate: 20, gradient: "from-amber-500/[0.15]", className: "right-[15%] top-[10%] md:right-[20%] md:top-[15%]" }), _jsx(ElegantShape, { delay: 0.7, width: 150, height: 40, rotate: -25, gradient: "from-cyan-500/[0.15]", className: "left-[20%] top-[5%] md:left-[25%] md:top-[10%]" })] }), _jsx("div", { className: "relative z-10 container mx-auto px-4 md:px-6", children: _jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [_jsxs(motion.div, { custom: 0, variants: fadeUpVariants, initial: "hidden", animate: "visible", className: "mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 md:mb-12", children: [_jsx(Circle, { className: "h-2 w-2 fill-rose-500/80" }), _jsx("span", { className: "text-sm tracking-wide text-white/60", children: badge })] }), _jsx(motion.div, { custom: 1, variants: fadeUpVariants, initial: "hidden", animate: "visible", children: _jsxs("h1", { className: "mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl", children: [_jsx("span", { className: "bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent", children: title1 }), _jsx("br", {}), _jsx("span", { className: "bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent", children: title2 })] }) }), _jsx(motion.div, { custom: 2, variants: fadeUpVariants, initial: "hidden", animate: "visible", children: _jsx("p", { className: "mx-auto mb-8 max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-white/40 sm:text-lg md:text-xl", children: description }) })] }) }), _jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" })] }));
}
export { HeroGeometric };
