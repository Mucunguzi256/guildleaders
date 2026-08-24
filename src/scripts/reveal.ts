import { reportError, safeInit } from './errors';

/**
 * Scroll-reveal helpers.
 *
 * Elements marked `[data-animate]` / `.ani-fade-up` are hidden by CSS and only
 * become visible once JS adds a class. If the observer cannot be created (no
 * IntersectionObserver, script error) the content must be revealed immediately
 * rather than left permanently invisible.
 */

export function revealAll(selector: string, visibleClass: string): void {
  document.querySelectorAll(selector).forEach((el) => el.classList.add(visibleClass));
}

/**
 * Observes `selector` and adds `visibleClass` on intersection. Returns false
 * and reveals everything when observation is not possible.
 */
export function observeReveal(
  selector: string,
  visibleClass: string,
  options: IntersectionObserverInit,
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
