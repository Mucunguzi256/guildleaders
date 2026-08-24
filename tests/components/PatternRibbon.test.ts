import { describe, expect, it } from 'vitest';
import PatternRibbon from '../../src/components/PatternRibbon.astro';
import { countOccurrences, render } from '../helpers/render';

describe('PatternRibbon', () => {
  it('defaults to a 32px tall band', async () => {
    const html = await render(PatternRibbon);
    expect(html).toContain('style="height: 32px;"');
    expect(html).toContain('height="32"');
    expect(html).toContain('viewBox="0 0 400 32"');
  });

  it('scales the wrapper, svg and viewBox to the requested height', async () => {
    const html = await render(PatternRibbon, { height: 40 });
    expect(html).toContain('style="height: 40px;"');
    expect(html).toContain('viewBox="0 0 400 40"');
    expect(html).toContain('height="40"');
  });

  it('centers tile geometry on half the height', async () => {
    const html = await render(PatternRibbon, { height: 60 });
    expect(html).toContain('cy="30"');
  });

  it('rounds odd heights when deriving the tile midpoint', async () => {
    const html = await render(PatternRibbon, { height: 33 });
    expect(html).toContain('cy="17"');
  });

  it('appends the className prop to the wrapper', async () => {
    const html = await render(PatternRibbon, { className: 'my-ribbon' });
    expect(html).toContain('class="pattern-ribbon my-ribbon"');
  });

  it('tiles the pattern ten times across the full width and hides it from screen readers', async () => {
    const html = await render(PatternRibbon);
    expect(countOccurrences(html, '<use ')).toBe(10);
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('preserveAspectRatio="none"');
  });
});
