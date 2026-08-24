import { describe, expect, it } from 'vitest';
import PatternRail from '../../src/components/PatternRail.astro';
import { countOccurrences, render } from '../helpers/render';

describe('PatternRail', () => {
  it('renders a decorative 48px column pinned to the left edge', async () => {
    const html = await render(PatternRail);
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('width: 48px');
    expect(html).toContain('height: 100%');
    expect(html).toContain('viewBox="0 0 48 600"');
  });

  it('appends the className prop, and trails a space when omitted', async () => {
    expect(await render(PatternRail, { className: 'rail-left' })).toContain(
      'class="pattern-rail rail-left"',
    );
    expect(await render(PatternRail)).toContain('class="pattern-rail "');
  });

  it('defines the six kente tiles it stacks down the rail', async () => {
    const html = await render(PatternRail);
    for (const tile of ['petal', 'chevron', 'dots', 'window', 'diamond', 'sun']) {
      expect(html, tile).toContain(`id="rail-${tile}"`);
      expect(html, tile).toContain(`href="#rail-${tile}"`);
    }
  });

  it('stacks tiles in 48px increments without gaps', async () => {
    const html = await render(PatternRail);
    const offsets = [...html.matchAll(/<use href="#rail-[a-z]+" x="0" y="(\d+)"/g)].map(
      (match) => Number(match[1]),
    );
    expect(offsets.length).toBe(countOccurrences(html, '<use '));
    expect(offsets.length).toBeGreaterThan(6);
    offsets.forEach((offset, index) => {
      expect(offset).toBe(index * 48);
    });
  });
});
