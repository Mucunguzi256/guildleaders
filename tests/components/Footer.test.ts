import { afterEach, describe, expect, it, vi } from 'vitest';
import Footer from '../../src/components/Footer.astro';
import { contactEmail, socialLinks } from '../../src/data/site';
import { socialLinkIcons } from '../../src/data/social-icons';
import { render } from '../helpers/render';

afterEach(() => {
  vi.useRealTimers();
});

describe('Footer', () => {
  it('renders one accessible, safely-targeted link per social channel', async () => {
    const html = await render(Footer);
    for (const social of socialLinks) {
      expect(html).toContain(`href="${social.href}"`);
      expect(html).toContain(`aria-label="${social.label}"`);
      expect(html).toContain(socialLinkIcons[social.label]);
    }
    expect(html.split('rel="noopener noreferrer"').length - 1).toBeGreaterThanOrEqual(
      socialLinks.length,
    );
  });

  it('renders the contact email as a mailto link', async () => {
    const html = await render(Footer);
    expect(html).toContain(`href="mailto:${contactEmail}"`);
    expect(html).toContain(contactEmail);
  });

  it('links the primary site sections', async () => {
    const html = await render(Footer);
    for (const href of ['/about', '/programs', '/summit', '/gallery', '/news', '/contact']) {
      expect(html, href).toContain(`href="${href}"`);
    }
  });

  it('renders the copyright for the current year', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2031-03-04T00:00:00Z'));
    const html = await render(Footer);
    expect(html).toContain('© 2031 Guild Presidents Leadership Academy');
  });

  it('renders the decorative ribbon above the footer', async () => {
    const html = await render(Footer);
    expect(html).toContain('class="pattern-ribbon');
    expect(html).toMatch(/<footer/);
  });
});
