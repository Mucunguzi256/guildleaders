import { describe, expect, it } from 'vitest';
import {
  contactEmail,
  executiveDirector,
  socialLinks,
  teamMembers,
} from '../../src/data/site';
import { socialLinkIcons } from '../../src/data/social-icons';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

describe('socialLinks', () => {
  it('exposes every channel exactly once', () => {
    const labels = socialLinks.map((link) => link.label);
    expect(labels).toEqual([
      'X (Twitter)',
      'LinkedIn',
      'Instagram',
      'YouTube',
      'TikTok',
    ]);
    expect(new Set(labels).size).toBe(labels.length);
  });

  it('uses absolute https urls without trailing whitespace', () => {
    for (const link of socialLinks) {
      expect(link.href).toBe(link.href.trim());
      const url = new URL(link.href);
      expect(url.protocol).toBe('https:');
      expect(url.pathname.length).toBeGreaterThan(1);
    }
  });

  it('has a matching icon for every channel', () => {
    for (const link of socialLinks) {
      expect(socialLinkIcons[link.label]).toBeTruthy();
    }
  });
});

describe('contactEmail', () => {
  it('is a valid address', () => {
    expect(contactEmail).toMatch(EMAIL_PATTERN);
    expect(contactEmail).toBe(contactEmail.toLowerCase());
  });
});

describe('executiveDirector', () => {
  it('has the copy the about and index pages render', () => {
    expect(executiveDirector.name).toBe('Demiano Masesa');
    expect(executiveDirector.title).toBe('Executive Director');
    expect(executiveDirector.quote.length).toBeGreaterThan(40);
  });

  it('references a root-relative photo with descriptive alt text', () => {
    expect(executiveDirector.photo.startsWith('/assets/')).toBe(true);
    expect(executiveDirector.photoAlt).toContain(executiveDirector.name);
  });

  it('attributes the quote to the director and organization', () => {
    expect(executiveDirector.attribution).toContain(executiveDirector.name);
    expect(executiveDirector.attribution).toContain(executiveDirector.organization);
  });
});

describe('teamMembers', () => {
  it('lists unique, non-empty names and titles', () => {
    expect(teamMembers.length).toBeGreaterThan(0);
    const names = teamMembers.map((member) => member.name);
    expect(new Set(names).size).toBe(names.length);
    for (const member of teamMembers) {
      expect(member.name.trim()).toBe(member.name);
      expect(member.name.length).toBeGreaterThan(0);
      expect(member.title.length).toBeGreaterThan(0);
    }
  });

  it('derives initials from the first letters of each name part', () => {
    for (const member of teamMembers) {
      expect(member.initials).toMatch(/^[A-Z]{2,}$/);
      expect(initialsOf(member.name).startsWith(member.initials)).toBe(true);
    }
  });

  it('pairs every photo with alt text naming the member', () => {
    for (const member of teamMembers) {
      if (!member.photo) {
        expect(member.photoAlt).toBeUndefined();
        continue;
      }
      expect(member.photo.startsWith('/assets/images/team/')).toBe(true);
      expect(member.photoAlt).toBeDefined();
      expect(member.photoAlt).toContain(member.name);
    }
  });

  it('uses valid emails and https social links with renderable labels', () => {
    for (const member of teamMembers) {
      if (member.email) {
        expect(member.email).toMatch(EMAIL_PATTERN);
      }
      for (const social of member.socials ?? []) {
        expect(new URL(social.href).protocol).toBe('https:');
        expect(socialLinkIcons[social.label]).toBeTruthy();
      }
      if (member.socials) {
        const labels = member.socials.map((social) => social.label);
        expect(new Set(labels).size).toBe(labels.length);
      }
    }
  });

  it('gives members with a bio an email and socials so profile cards are complete', () => {
    for (const member of teamMembers.filter((candidate) => candidate.bio)) {
      expect(member.bio!.trim().length).toBeGreaterThan(40);
      expect(member.email).toBeDefined();
      expect(member.socials?.length ?? 0).toBeGreaterThan(0);
    }
  });
});
