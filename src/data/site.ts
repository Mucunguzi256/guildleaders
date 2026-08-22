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
  name: 'Demiano Masesa',
  title: 'Executive Director',
  organization: 'Guild Presidents Leadership Academy',
  photo: '/assets/demiano-masesa-executive-director.png',
  photoAlt: 'Demiano Masesa, Executive Director of the Guild Presidents Leadership Academy',
  quote:
    'At GPLA, we believe East Africa\'s future will not be inherited by young people as spectators; it must be built by young leaders who are prepared to Serve, Produce, Innovate and Integrate.',
  attribution: 'Demiano Masesa, Executive Director, Guild Presidents Leadership Academy',
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
  {
    name: 'Kato Laban',
    title: 'Head of Programs',
    initials: 'KL',
    photo: '/assets/images/team/kato.jpg',
    photoAlt: 'Kato Laban, Head of Programs at the Guild Presidents Leadership Academy',
    bio: 'Kato Laban holds a Bachelor\'s degree in Commerce (Second Class Upper) from Makerere University. A former student leader at Makerere, he has served as a member of the National Youth Council of Uganda. He is an alumnus of the Young Leaders Forum and the Uganda Democracy Academy Fellowship, and is passionate about youth leadership, governance, civic engagement, and regional integration.',
    email: 'katolaban003@gmail.com',
    socials: [
      { label: 'X (Twitter)', href: 'https://x.com/Katolaban3' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/Katolaban',
      },
    ],
  },
  {
    name: 'Natasha Kaitesi',
    title: 'Operations Officer',
    initials: 'NK',
    photo: '/assets/images/team/natasha.jpg',
    photoAlt: 'Natasha Kaitesi, Operations Officer at the Guild Presidents Leadership Academy',
    bio: 'Natasha Kaitesi is an Operations Officer at the Guild Presidents Leadership Academy with experience in project coordination, operational management, and team support for effective program delivery. She is passionate about youth participation and has worked with young people at different levels, championing mentorship, capacity building, and opportunities that equip them to lead with purpose.',
    email: 'natashakaitesi1@gmail.com',
    socials: [
      { label: 'X (Twitter)', href: 'https://x.com/kaitesinatasha' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kaitesi-natasha-021305204',
      },
    ],
  },
  {
    name: 'Philip Muliisa',
    title: 'Communications Officer',
    initials: 'PM',
    photo: '/assets/images/team/philip.jpg',
    photoAlt: 'Philip Muliisa, Communications Officer at the Guild Presidents Leadership Academy',
    bio: 'Philip serves at the Communications Desk at the GPLA. A practicing journalist hosting talk shows on COUFamily Television as well as an LLB student.',
    email: 'phassanm9@gmail.com',
    socials: [
      { label: 'X (Twitter)', href: 'https://x.com/PHILIPMULIISA' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/philip-muliisa-305445223',
      },
    ],
  },
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
  {
    name: 'Semugabi Hamza Junior',
    title: 'Branding Lead',
    initials: 'SH',
    photo: '/assets/images/team/hamza.jpg',
    photoAlt: 'Semugabi Hamza Junior, Branding Lead at the Guild Presidents Leadership Academy',
    bio: 'Semugabi Hamza Junior is a Bachelor of Commerce (Accounting) graduate from Makerere University with a strong foundation in accounting, finance, auditing, and business management. He is a dynamic young professional who blends analytical expertise with creativity, leadership, and a passion for building impactful brands.\n\nWith experience as a Branding Lead, he has played a key role in developing and strengthening organizational identities through strategic branding, creative direction, digital communication, and content development. He has a keen eye for design, storytelling, and audience engagement, using branding as a tool to enhance visibility, credibility, and connection between organizations and their communities.',
    email: 'semugabihamza6@gmail.com',
    socials: [
      { label: 'X (Twitter)', href: 'https://x.com/semugabihjr' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/semugabihjr',
      },
    ],
  },
];
