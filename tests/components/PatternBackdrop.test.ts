import { describe, expect, it } from 'vitest';
import PatternBackdrop from '../../src/components/PatternBackdrop.astro';
import { render } from '../helpers/render';

describe('PatternBackdrop', () => {
  it('defaults to the navy variant with the gold accent', async () => {
    const html = await render(PatternBackdrop);
    expect(html).toContain('pattern-backdrop--navy');
    expect(html).toContain('#E8A33D');
    expect(html).toContain('opacity="0.08"');
  });

  it('switches accent, stroke and opacity for the cream variant', async () => {
    const html = await render(PatternBackdrop, { variant: 'cream' });
    expect(html).toContain('pattern-backdrop--cream');
    expect(html).toContain('#389a29');
    expect(html).toContain('opacity="0.12"');
    expect(html).toContain('fill="#132d82"');
  });

  it('keeps the light-on-dark palette for the green variant', async () => {
    const html = await render(PatternBackdrop, { variant: 'green' });
    expect(html).toContain('pattern-backdrop--green');
    expect(html).toContain('fill="#ffffff"');
    expect(html).toContain('opacity="0.08"');
  });

  it('appends the class prop and stays decorative', async () => {
    const html = await render(PatternBackdrop, { class: 'z-0' });
    expect(html).toMatch(/class="pattern-backdrop pattern-backdrop--navy z-0\s*"/);
    expect(html).toContain('aria-hidden="true"');
  });

  it('renders the dot grid and glow definitions used by the pattern', async () => {
    const html = await render(PatternBackdrop);
    expect(html).toContain('id="gpla-dot-grid"');
    expect(html).toContain('id="gpla-sun-glow"');
    expect(html).toContain('fill="url(#gpla-dot-grid)"');
    expect(html).toContain('fill="url(#gpla-sun-glow)"');
  });
});
