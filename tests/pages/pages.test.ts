import { describe, expect, it } from 'vitest';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { render } from '../helpers/render';

const pages: [route: string, importer: () => Promise<{ default: AstroComponentFactory }>][] = [
  ['/', () => import('../../src/pages/index.astro')],
  ['/about', () => import('../../src/pages/about.astro')],
  ['/contact', () => import('../../src/pages/contact.astro')],
  ['/gallery', () => import('../../src/pages/gallery.astro')],
  ['/news', () => import('../../src/pages/news.astro')],
  ['/programs', () => import('../../src/pages/programs.astro')],
  ['/summit', () => import('../../src/pages/summit/index.astro')],
  ['/summit/2024', () => import('../../src/pages/summit/2024.astro')],
  ['/summit/2025', () => import('../../src/pages/summit/2025.astro')],
  ['/summit/2026', () => import('../../src/pages/summit/2026.astro')],
];

describe.each(pages)('page %s', (route, importer) => {
  it('renders a full document with the shared shell', async () => {
    const { default: Page } = await importer();
    const html = await render(Page);
    expect(html).toContain('<html lang="en">');
    expect(html).toMatch(/<title>[^<]+<\/title>/);
    expect(html).toContain('<meta name="description"');
    expect(html).toContain('id="navbar"');
    expect(html).toContain('<footer');
    expect(html).toContain(`© ${new Date().getFullYear()}`);
  });

  it('gives every image alt text', async () => {
    const { default: Page } = await importer();
    const html = await render(Page);
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    for (const image of images) {
      expect(image, `${route}: ${image}`).toMatch(/\balt="/);
    }
  });

  it('opens every cross-origin link safely', async () => {
    const { default: Page } = await importer();
    const html = await render(Page);
    const crossOrigin = [...html.matchAll(/<a\b[^>]*href="https?:\/\/[^>]*>/g)]
      .map((match) => match[0])
      // the footer link back to the site's own canonical domain stays in-tab
      .filter((anchor) => !anchor.includes('href="https://guildleaders.academy'));
    for (const anchor of crossOrigin) {
      expect(anchor, `${route}: ${anchor}`).toContain('target="_blank"');
      expect(anchor, `${route}: ${anchor}`).toContain('noopener');
    }
  });
});
