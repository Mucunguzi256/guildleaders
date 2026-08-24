import { reportError, safeInit } from './errors';

const DEFAULT_REVEAL_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px',
};

/** Reveals all matching elements immediately (fallback when observer is unavailable). */
export function revealAll(selector: string, visibleClass: string): void {
  document.querySelectorAll(selector).forEach((el) => el.classList.add(visibleClass));
}

/** Runs `onReveal` the first time each matching element scrolls into view. */
export function revealOnScroll(
  selector: string,
  onReveal: (el: HTMLElement, index: number) => void,
  options: IntersectionObserverInit = DEFAULT_REVEAL_OPTIONS,
): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!elements.length) return;

  if (typeof IntersectionObserver === 'undefined') {
    elements.forEach((el, index) => safeInit(`reveal ${selector}`, () => onReveal(el, index)));
    return;
  }

  const indexes = new WeakMap<HTMLElement, number>();
  elements.forEach((el, index) => indexes.set(el, index));

  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);
        safeInit(`reveal ${selector}`, () => onReveal(el, indexes.get(el) ?? 0));
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
  } catch (error) {
    reportError(`reveal ${selector}`, error);
    elements.forEach((el, index) => safeInit(`reveal ${selector}`, () => onReveal(el, index)));
  }
}

/**
 * Observes `selector` and adds `visibleClass` on intersection. Returns false
 * and reveals everything when observation is not possible.
 */
export function observeReveal(
  selector: string,
  visibleClass: string,
  options: IntersectionObserverInit = DEFAULT_REVEAL_OPTIONS,
  onVisible?: (el: HTMLElement) => void,
): boolean {
  const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!els.length) return true;

  if (typeof IntersectionObserver === 'undefined') {
    els.forEach((el) => {
      el.classList.add(visibleClass);
      if (onVisible) safeInit(`reveal ${selector}`, () => onVisible(el));
    });
    return false;
  }

  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);
        const delay = Number.parseInt(el.dataset.delay ?? '', 10);
        const apply = () => {
          el.classList.add(visibleClass);
          if (onVisible) safeInit(`reveal ${selector}`, () => onVisible(el));
        };
        if (Number.isFinite(delay) && delay > 0) {
          setTimeout(apply, delay);
        } else {
          apply();
        }
      });
    }, options);
    els.forEach((el) => observer.observe(el));
    return true;
  } catch (error) {
    reportError(`reveal ${selector}`, error);
    els.forEach((el) => {
      el.classList.add(visibleClass);
      if (onVisible) safeInit(`reveal ${selector}`, () => onVisible(el));
    });
    return false;
  }
}

/**
 * Adds `className` to each matching element when it scrolls into view,
 * honouring an optional `data-delay` (ms) on the element.
 */
export function revealWithClass(
  selector: string,
  className: string,
  options?: IntersectionObserverInit,
): void {
  revealOnScroll(
    selector,
    (el) => {
      const delay = Number(el.dataset.delay) || 0;
      if (delay > 0) {
        setTimeout(() => el.classList.add(className), delay);
      } else {
        el.classList.add(className);
      }
    },
    options,
  );
}

const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

/**
 * Counts elements up to their `data-target` value when they scroll into view.
 * Supports `data-start`, `data-duration`, `data-prefix` and `data-suffix`.
 */
export function animateCounters(
  selector = '.ani-counter',
  options: IntersectionObserverInit = { threshold: 0.3 },
): void {
  revealOnScroll(
    selector,
    (el) => {
      const target = Number(el.dataset.target) || 0;
      const start = Number(el.dataset.start) || 0;
      const duration = Number(el.dataset.duration) || 1800;
      const prefix = el.dataset.prefix ?? '';
      const suffix = el.dataset.suffix ?? '';
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(start + easeOutQuart(progress) * (target - start));
        el.textContent = prefix + current + suffix;
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = prefix + target + suffix;
          el.classList.add('counter-done');
        }
      };

      requestAnimationFrame(tick);
    },
    options,
  );
}