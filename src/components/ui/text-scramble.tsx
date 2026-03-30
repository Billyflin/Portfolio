import { ElementType, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: Array<{
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }>;
  frame: number;
  frameRequest: number;
  resolve: (() => void) | null;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = null;
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => {
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
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.3) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="scramble-dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve?.();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

type ScrambleTextProps = {
  phrases: string[];
  as?: ElementType;
  className?: string;
  interval?: number;
  stableWidth?: boolean;
};

export function ScrambleText({
  phrases,
  as: Tag = 'span',
  className,
  interval = 2200,
  stableWidth = true,
}: ScrambleTextProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const scrambleRef = useRef<TextScramble | null>(null);
  const longestPhrase = phrases.reduce((longest, current) => current.length > longest.length ? current : longest, phrases[0] ?? '');

  useEffect(() => {
    if (!elementRef.current || phrases.length === 0) return;
    if (!scrambleRef.current) {
      scrambleRef.current = new TextScramble(elementRef.current);
    }

    let active = true;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let index = 0;

    const run = () => {
      if (!active || !scrambleRef.current) return;
      scrambleRef.current.setText(phrases[index]).then(() => {
        if (!active) return;
        if (phrases.length > 1) {
          timeoutId = setTimeout(run, interval);
          index = (index + 1) % phrases.length;
        }
      });
    };

    run();

    return () => {
      active = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phrases, interval]);

  return (
    <Tag
      className={cn(
        stableWidth ? 'relative inline-block max-w-full align-top whitespace-normal break-words' : undefined,
        className
      )}
    >
      {stableWidth ? (
        <span aria-hidden className="invisible block max-w-full whitespace-normal break-words">
          {longestPhrase}
        </span>
      ) : null}
      <span
        ref={elementRef as never}
        className={cn(
          stableWidth ? 'absolute inset-0 block max-w-full whitespace-normal break-words' : undefined
        )}
      >
        {phrases[0] ?? ''}
      </span>
    </Tag>
  );
}
