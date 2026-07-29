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

export const teamMembers = [
  { name: 'Kato Laban', title: 'Programs Manager', initials: 'KL' },
  { name: 'Natasha Kaitesi', title: 'Operations Officer', initials: 'NK' },
  { name: 'Muliisa Phillip', title: 'Communications Manager', initials: 'MP' },
  { name: 'Atuhaire Baseka Patience', title: 'Programs Officer', initials: 'AB' },
] as const;
