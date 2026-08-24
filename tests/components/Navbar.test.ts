import { beforeAll, describe, expect, it } from 'vitest';
import Navbar from '../../src/components/Navbar.astro';
import { countOccurrences, render } from '../helpers/render';

const NAV_ITEMS: [href: string, label: string][] = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/programs', 'Programs'],
  ['/summit', 'Summit'],
  ['/gallery', 'Gallery'],
  ['/news', 'Publications &amp; Updates'],
  ['/contact', 'Contact'],
];

let html: string;

beforeAll(async () => {
  html = await render(Navbar);
});

describe('Navbar', () => {
  it('renders every nav item twice: once for desktop and once for the mobile menu', () => {
    for (const [href, label] of NAV_ITEMS) {
      expect(countOccurrences(html, `href="${href}"`), href).toBeGreaterThanOrEqual(2);
      expect(countOccurrences(html, label), label).toBeGreaterThanOrEqual(2);
    }
  });

  it('links the logo home with alt text', () => {
    expect(html).toContain('src="/assets/images/logo-medium.png"');
    expect(html).toContain('alt="Guild Leaders"');
  });

  it('renders a labelled mobile toggle wired to the collapsed mobile menu', () => {
    expect(html).toContain('id="mobile-menu-btn"');
    expect(html).toContain('aria-label="Menu"');
    expect(html).toContain('aria-expanded="false"');
    expect(html).toContain('id="mobile-menu"');
    expect(html).toMatch(/id="mobile-menu"[^>]*class="[^"]*hidden/);
  });

  it('keeps the mobile toggle and menu hidden on desktop widths', () => {
    expect(html).toMatch(/id="mobile-menu-btn"[^>]*class="md:hidden/);
    expect(html).toContain('hidden md:flex');
  });

  it('exposes a Get In Touch call to action', () => {
    expect(countOccurrences(html, 'Get In Touch')).toBeGreaterThanOrEqual(2);
  });
});
