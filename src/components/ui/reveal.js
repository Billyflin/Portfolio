import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function Reveal({ children, className, delay = 0, y = 22 }) {
    return (_jsx(motion.div, { className: cn(className), initial: { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }, children: children }));
}
