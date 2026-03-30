import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
class TextScramble {
    constructor(el) {
        Object.defineProperty(this, "el", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "chars", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frameRequest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resolve", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.queue = [];
        this.frame = 0;
        this.frameRequest = 0;
        this.resolve = null;
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => {
            this.resolve = resolve;
        });
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 20);
            const end = start + Math.floor(Math.random() * 24) + 8;
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            }
            else if (this.frame >= start) {
                if (!char || Math.random() < 0.3) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = char;
                }
                output += `<span class="scramble-dud">${char}</span>`;
            }
            else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve?.();
        }
        else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
}
export function ScrambleText({ phrases, as: Tag = 'span', className, interval = 2200, stableWidth = true, }) {
    const elementRef = useRef(null);
    const scrambleRef = useRef(null);
    const longestPhrase = phrases.reduce((longest, current) => current.length > longest.length ? current : longest, phrases[0] ?? '');
    useEffect(() => {
        if (!elementRef.current || phrases.length === 0)
            return;
        if (!scrambleRef.current) {
            scrambleRef.current = new TextScramble(elementRef.current);
        }
        let active = true;
        let timeoutId = null;
        let index = 0;
        const run = () => {
            if (!active || !scrambleRef.current)
                return;
            scrambleRef.current.setText(phrases[index]).then(() => {
                if (!active)
                    return;
                if (phrases.length > 1) {
                    timeoutId = setTimeout(run, interval);
                    index = (index + 1) % phrases.length;
                }
            });
        };
        run();
        return () => {
            active = false;
            if (timeoutId)
                clearTimeout(timeoutId);
        };
    }, [phrases, interval]);
    return (_jsxs(Tag, { className: cn(stableWidth ? 'relative inline-block max-w-full align-top whitespace-normal break-words' : undefined, className), children: [stableWidth ? (_jsx("span", { "aria-hidden": true, className: "invisible block max-w-full whitespace-normal break-words", children: longestPhrase })) : null, _jsx("span", { ref: elementRef, className: cn(stableWidth ? 'absolute inset-0 block max-w-full whitespace-normal break-words' : undefined), children: phrases[0] ?? '' })] }));
}
