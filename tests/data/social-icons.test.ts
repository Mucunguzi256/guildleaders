import { describe, expect, it } from 'vitest';
import { socialLinkIcons } from '../../src/data/social-icons';
import { socialLinks } from '../../src/data/site';

const entries = Object.entries(socialLinkIcons);

describe('socialLinkIcons', () => {
  it('covers every social channel plus email', () => {
    const keys = Object.keys(socialLinkIcons);
    for (const link of socialLinks) {
      expect(keys).toContain(link.label);
    }
    expect(keys).toContain('Email');
  });

  it('returns undefined for unknown labels', () => {
    expect(socialLinkIcons['Facebook']).toBeUndefined();
  });

  it('is a well-formed, self-contained svg markup snippet', () => {
    for (const [label, markup] of entries) {
      expect(markup.startsWith('<svg'), label).toBe(true);
      expect(markup.trimEnd().endsWith('</svg>'), label).toBe(true);
      expect(markup.match(/<svg/g)).toHaveLength(1);
      expect(markup).not.toContain('<script');
    }
  });

  it('renders at a consistent size, inherits color and is hidden from screen readers', () => {
    for (const [label, markup] of entries) {
      expect(markup, label).toContain('class="w-4 h-4"');
      expect(markup, label).toContain('aria-hidden="true"');
      expect(markup, label).toContain('viewBox="0 0 24 24"');
      expect(markup, label).toContain('currentColor');
    }
  });

  it('draws at least one path per icon', () => {
    for (const [label, markup] of entries) {
      expect(markup.includes('<path') || markup.includes('<polyline'), label).toBe(true);
    }
  });
});
