import { describe, expect, it } from 'vitest';
import PatternDivider from '../../src/components/PatternDivider.astro';
import { render } from '../helpers/render';

describe('PatternDivider', () => {
  it('renders a 28px ribbon by default', async () => {
    const html = await render(PatternDivider);
    expect(html).toContain('style="height: 28px;"');
    expect(html).not.toContain('gpla-pattern-divider--bold');
  });

  it('renders a taller ribbon and the bold modifier when bold', async () => {
    const html = await render(PatternDivider, { bold: true });
    expect(html).toContain('gpla-pattern-divider--bold');
    expect(html).toContain('style="height: 40px;"');
  });

  it('merges the class prop and stays decorative', async () => {
    const html = await render(PatternDivider, { class: 'mt-10' });
    expect(html).toMatch(/class="gpla-pattern-divider[^"]*mt-10/);
    expect(html).toContain('aria-hidden="true"');
  });
});
