export interface SummitCta {
  href: string;
  label: string;
  external?: boolean;
}

export interface SummitMeta {
  label: string;
  value: string;
  sub?: string;
}

export interface SummitCard {
  year: string;
  variant: '2026' | '2025' | '2024';
  /** Small line above the title; pages may override it with page-specific phrasing. */
  tagline: string;
  title: string;
  theme: string;
  imageSrc: string;
  imageAlt?: string;
  featured?: boolean;
  meta: SummitMeta[];
  primaryCta?: SummitCta;
  secondaryCta?: SummitCta;
  class?: string;
}

/**
 * Shared summit card content used by the home page and the summit archive.
 * Pages spread an entry and override the props that differ (taglines, CTAs).
 */
export const summitCards: Record<'2026' | '2025' | '2024', SummitCard> = {
  '2026': {
    year: '2026',
    variant: '2026',
    featured: true,
    class: 'summit-bento-card--featured',
    tagline: '23–24 July 2026 · Completed',
    title: "3rd Annual East African Guild Leaders' Summit",
    theme:
      'Youth Leadership, Production, and Regional Integration: Building a Competitive East Africa in a Changing Global Order',
    imageSrc: '/assets/images/gallery/020.jpg',
    meta: [
      {
        label: 'Chief Guest',
        value: 'H.E. Yoweri Kaguta Museveni',
        sub: 'President of Uganda & EAC Chairperson',
      },
      { label: 'Venue', value: 'Freedom Square', sub: 'Makerere University, Kampala' },
    ],
  },
  '2025': {
    year: '2025',
    variant: '2025',
    tagline: '24 April 2025 · Makerere University',
    title: "2nd Annual Guild Leaders' Summit",
    theme: 'Leadership with Integrity; Building Foundations for Good Governance in East Africa',
    imageSrc: '/assets/images/gallery/008.jpg',
    meta: [
      {
        label: 'Chief Guest',
        value: 'H.E. Uhuru Kenyatta',
        sub: '4th President, Republic of Kenya',
      },
      { label: 'Attendees', value: '1,000+', sub: 'Youth leaders · 920 registered' },
    ],
    primaryCta: { href: '/summit/2025', label: 'View Full Report →' },
  },
  '2024': {
    year: '2024',
    variant: '2024',
    tagline: 'April 15, 2024 · Makerere University',
    title: "Inaugural Guild Leaders' Summit",
    theme:
      'Legacy and Leadership Continuum: The Power of Knowledge and Cross-Generational Learning',
    imageSrc: '/assets/images/gallery/001.jpg',
    meta: [
      {
        label: 'Chief Guest',
        value: 'HE. Jakaya Mrisho Kikwete',
        sub: 'Former President, Tanzania · Summit Patron',
      },
      { label: 'Attendees', value: '700+', sub: 'Historic first convening' },
    ],
    primaryCta: { href: '/summit/2024', label: 'View Full Report →' },
  },
};
