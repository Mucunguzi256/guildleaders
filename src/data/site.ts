export const socialLinks = [
  {
    href: 'https://x.com/GPLAcademy',
    label: 'X (Twitter)',
  },
  {
    href: 'https://www.linkedin.com/company/guild-presidents-leadership-academy/',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/gpl.academy/',
    label: 'Instagram',
  },
  {
    href: 'https://www.youtube.com/@GPLAcademyEA',
    label: 'YouTube',
  },
  {
    href: 'https://www.tiktok.com/@guild_academyea',
    label: 'TikTok',
  },
] as const;

export const contactEmail = 'guildacadem@gmail.com' as const;

export const executiveDirector = {
  name: 'Masesa Demian',
  title: 'Executive Director',
  organization: 'Guild Presidents Leadership Academy',
  photo: '/assets/demiano-masesa-executive-director.png',
  photoAlt: 'Masesa Demian, Executive Director of the Guild Presidents Leadership Academy',
  quote:
    'At GPLA, we believe East Africa\'s future will not be inherited by young people as spectators; it must be built by young leaders who are prepared to Serve, Produce, Innovate and Integrate.',
  attribution: 'Masesa Demian, Executive Director, Guild Presidents Leadership Academy',
} as const;

export type TeamMemberSocial = {
  label: 'X (Twitter)' | 'LinkedIn';
  href: string;
};

export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  photo?: string;
  photoAlt?: string;
  bio?: string;
  email?: string;
  socials?: TeamMemberSocial[];
};

export const teamMembers: TeamMember[] = [
  { name: 'Kato Laban', title: 'Programs Manager', initials: 'KL' },
  { name: 'Natasha Kaitesi', title: 'Operations Officer', initials: 'NK' },
  { name: 'Muliisa Phillip', title: 'Communications Manager', initials: 'MP' },
  {
    name: 'Atuhaire Baseka Patience',
    title: 'Programs Officer',
    initials: 'AB',
    photo: '/assets/images/team/patience.jpg',
    photoAlt: 'Atuhaire Baseka Patience, Programs Officer at the Guild Presidents Leadership Academy',
    bio: 'Patience is a Policy Analyst and Programs Officer with expertise in social policy, environmental sustainability, and regional integration. Holding a background in Public Administration, she combines strategic policy analysis with hands-on program management and rigorous Monitoring & Evaluation (M&E).\n\nPassionate about driving sustainable development, Patience has led initiatives centered on climate-smart agriculture, environmental advocacy, and youth leadership development. She brings a strong commitment to evidence-based decision-making and cross-sector collaboration to advance impactful governance.',
    email: 'atuhairebaseka@gmail.com',
    socials: [
      { label: 'X (Twitter)', href: 'https://x.com/BasekaPatience' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/atuhaire-baseka-patience-5ba211274',
      },
    ],
  },
];
