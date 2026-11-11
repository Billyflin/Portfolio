import { useEffect, useRef, useState } from 'react';
import type { Locale } from '../App';

type Slide = {
  base: string;
  widths: readonly number[];
  height: number; // height at 1440px width
  position: string;
  caption: Record<Locale, string>;
  alt: Record<Locale, string>;
};

const slides: readonly Slide[] = [
  {
    base: '/billy-martinez-oliver-portrait-2026',
    widths: [640, 960, 1440, 1920],
    height: 2160,
    position: '50% center',
    caption: { en: 'With Oliver · Temuco', es: 'Con Oliver · Temuco' },
    alt: { en: 'Billy Martínez with Oliver outdoors in Temuco', es: 'Billy Martínez junto a Oliver al aire libre en Temuco' },
  },
  {
    base: '/life/monumental',
    widths: [640, 960, 1440],
    height: 1920,
    position: '50% 45%',
    caption: { en: 'Estadio Monumental · Buenos Aires', es: 'Estadio Monumental · Buenos Aires' },
    alt: { en: 'Billy Martínez giving a thumbs up inside Estadio Monumental in Buenos Aires', es: 'Billy Martínez con el pulgar arriba en el Estadio Monumental de Buenos Aires' },
  },
  {
    base: '/life/caminito',
    widths: [640, 960, 1440],
    height: 1920,
    position: '45% 60%',
    caption: { en: 'Caminito, La Boca · tourist mode', es: 'Caminito, La Boca · modo turista' },
    alt: { en: 'Billy Martínez standing on the cobblestones of Caminito in La Boca', es: 'Billy Martínez de pie sobre los adoquines de Caminito en La Boca' },
  },
  {
    base: '/life/river-crest',
    widths: [640, 960, 1440],
    height: 1920,
    position: '58% 35%',
    caption: { en: 'River Plate · the sunglasses stay on', es: 'River Plate · los lentes no se sacan' },
    alt: { en: 'Billy Martínez in sunglasses in front of the River Plate crest', es: 'Billy Martínez con lentes de sol frente al escudo de River Plate' },
  },
];

const INTERVAL_MS = 5000;

export function PortraitCarousel({ locale }: { locale: Locale }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  // Only slides that have been (or are about to be) shown get an <img>, so
  // the page does not download every photo up front.
  const [loaded, setLoaded] = useState<ReadonlySet<number>>(() => new Set([0, 1]));
  const [paused, setPaused] = useState(false);
  const [userControlled, setUserControlled] = useState(false);
  const reducedMotion = useRef(false);

  const go = (next: number) => {
    if (next === index) return;
    setPrev(index);
    setIndex(next);
    setLoaded((set) => new Set([...set, next, (next + 1) % slides.length]));
  };

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (paused || userControlled || reducedMotion.current) return;
    const timer = window.setTimeout(() => go((index + 1) % slides.length), INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, userControlled]);

  const label = locale === 'en' ? 'Photos of Billy Martínez' : 'Fotos de Billy Martínez';

  return (
    <figure
      className="portrait portrait--carousel"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const state = i === index ? ' is-active' : i === prev ? ' is-prev' : '';
        return (
          <picture className={`portrait-slide${state}`} key={slide.base} aria-hidden={i !== index}>
            {loaded.has(i) && <>
              <source
                srcSet={slide.widths.map((w) => `${slide.base}-${w}.webp ${w}w`).join(', ')}
                sizes="(max-width: 760px) 100vw, 44vw"
                type="image/webp"
              />
              <img
                src={`${slide.base}-1440.webp`}
                alt={slide.alt[locale]}
                width="1440"
                height={slide.height}
                style={{ objectPosition: slide.position }}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
              />
            </>}
          </picture>
        );
      })}
      <figcaption>
        <span aria-live={userControlled ? 'polite' : 'off'}>{slides[index].caption[locale]}</span>
        <span className="portrait-dots">
          {slides.map((slide, i) => (
            <button
              type="button"
              key={slide.base}
              className={i === index ? 'is-active' : ''}
              aria-label={`${locale === 'en' ? 'Show photo' : 'Ver foto'} ${i + 1}: ${slide.caption[locale]}`}
              aria-current={i === index}
              onClick={() => { setUserControlled(true); go(i); }}
            />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
