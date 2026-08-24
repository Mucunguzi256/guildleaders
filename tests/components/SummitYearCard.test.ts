import { describe, expect, it } from 'vitest';
import SummitYearCard from '../../src/components/SummitYearCard.astro';
import { countOccurrences, render } from '../helpers/render';

const baseProps = {
  year: '2026',
  variant: '2026' as const,
  tagline: '3rd Annual Summit',
  title: 'Guild Leaders Summit 2026',
  theme: 'Serve, Produce, Innovate, Integrate',
  imageSrc: '/assets/images/summit-2026.jpg',
};

describe('SummitYearCard', () => {
  it('renders the headline copy and variant class', async () => {
    const html = await render(SummitYearCard, baseProps);
    expect(html).toContain('summit-bento-card--2026');
    expect(html).toContain(baseProps.tagline);
    expect(html).toContain(baseProps.title);
    expect(html).toContain(baseProps.theme);
    expect(html).toContain(`>${baseProps.year}<`);
  });

  it('lazy-loads the media image and derives alt text from the year', async () => {
    const html = await render(SummitYearCard, baseProps);
    expect(html).toContain(`src="${baseProps.imageSrc}"`);
    expect(html).toContain('loading="lazy"');
    expect(html).toContain('alt="Guild Leaders Summit 2026"');
  });

  it('prefers an explicit imageAlt over the derived one', async () => {
    const html = await render(SummitYearCard, { ...baseProps, imageAlt: 'Delegates on stage' });
    expect(html).toContain('alt="Delegates on stage"');
    expect(html).not.toContain('alt="Guild Leaders Summit 2026"');
  });

  it('omits the featured modifier and meta list by default', async () => {
    const html = await render(SummitYearCard, baseProps);
    expect(html).not.toContain('summit-bento-card--featured');
    expect(html).not.toContain('summit-bento-card__meta');
  });

  it('adds the featured modifier and the class prop when given', async () => {
    const html = await render(SummitYearCard, { ...baseProps, featured: true, class: 'lg:col-span-2' });
    expect(html).toContain('summit-bento-card--featured');
    expect(html).toContain('lg:col-span-2');
  });

  it('renders meta entries as a definition list, including optional sub values', async () => {
    const html = await render(SummitYearCard, {
      ...baseProps,
      meta: [
        { label: 'Date', value: 'August 2026' },
        { label: 'Venue', value: 'Makerere University', sub: 'Kampala, Uganda' },
      ],
    });
    expect(html).toContain('summit-bento-card__meta');
    expect(html).toContain('<dt>Date</dt>');
    expect(html).toContain('<dd>August 2026</dd>');
    expect(html).toContain('Kampala, Uganda');
    expect(countOccurrences(html, 'summit-bento-card__meta-sub')).toBe(1);
    expect(countOccurrences(html, 'summit-bento-card__meta-item')).toBe(2);
  });

  it('renders no call to action links when none are provided', async () => {
    const html = await render(SummitYearCard, baseProps);
    expect(html).not.toContain('summit-bento-card__cta');
  });

  it('renders internal ctas without target or rel attributes', async () => {
    const html = await render(SummitYearCard, {
      ...baseProps,
      primaryCta: { href: '/summit/2026', label: 'Read more' },
      secondaryCta: { href: '/contact', label: 'Get involved' },
    });
    expect(html).toContain('summit-bento-card__cta--primary');
    expect(html).toContain('summit-bento-card__cta--ghost');
    expect(html).not.toContain('target="_blank"');
    expect(html).not.toContain('rel="noopener noreferrer"');
  });

  it('opens an external primary cta safely in a new tab', async () => {
    const html = await render(SummitYearCard, {
      ...baseProps,
      primaryCta: { href: 'https://example.org/report.pdf', label: 'Download report', external: true },
    });
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });
});
