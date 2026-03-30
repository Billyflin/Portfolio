import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FallingPattern } from "@/components/ui/falling-pattern";
export default function DefaultDemo() {
    return (_jsxs("div", { className: "relative min-h-screen w-full", children: [_jsx(FallingPattern, { className: "h-screen [mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]" }), _jsx("div", { className: "absolute inset-0 z-10 flex items-center justify-center", children: _jsx("h1", { className: "font-mono text-7xl font-extrabold tracking-tighter", children: "Falling Pattern" }) })] }));
}
