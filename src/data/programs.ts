export type ProgramPanelStyle = 'check' | 'bullet' | 'chip';

export interface ProgramPanel {
  title: string;
  style: ProgramPanelStyle;
  items: string[];
}

export interface Program {
  number: string;
  label: string;
  title: string;
  subtitle: string;
  /** Alternating page surface for the section wrapper. */
  surface: 'section-dark' | 'section-alt';
  paragraphs: string[];
  /** Two panels rendered side by side under the description. */
  panels: [ProgramPanel, ProgramPanel];
  /** Optional third panel rendered next to the beneficiaries card. */
  extraPanel?: ProgramPanel;
  beneficiaries: string;
}

export const programs: Program[] = [
  {
    number: '01',
    label: 'Flagship Programme',
    title: 'EAST AFRICAN GUILD LEADERS SUMMIT',
    subtitle: 'Advancing Youth Leadership and East African Integration',
    surface: 'section-dark',
    paragraphs: [
      "The East African Guild Leaders Summit is GPLA's flagship regional convening platform, bringing together university guild leaders, policymakers, academic leaders, development partners, private-sector actors and distinguished statespersons from across East Africa.",
      "The Summit develops young leaders' understanding of East African integration while creating a platform for dialogue on governance, education, technology, regional trade, youth employment, peace, mobility and sustainable development.",
      'It also connects current student leaders with experienced national and regional leaders, strengthening intergenerational learning and building a network of young people committed to a united, peaceful and prosperous East Africa.',
    ],
    panels: [
      {
        title: 'Strategic Objectives',
        style: 'check',
        items: [
          'Promote youth participation in the East African integration agenda.',
          'Strengthen cooperation among university student leaders across the region.',
          "Build young leaders' understanding of regional institutions, diplomacy and governance.",
          'Facilitate dialogue between young people, governments, universities and the private sector.',
          'Develop a sustainable network of emerging East African leaders.',
          'Generate youth-led recommendations on regional policy and development.',
        ],
      },
      {
        title: 'Key Activities',
        style: 'bullet',
        items: [
          'Annual East African Guild Leaders Summit',
          "University leaders' dialogues",
          'High-level policy panels',
          'Regional student leadership exchanges',
          'Guild Voice regional conversations',
          'Intergenerational mentorship sessions',
          'Summit declarations, policy briefs and reports',
        ],
      },
    ],
    beneficiaries:
      'University Guild Leaders, Student Representatives, Emerging Political and Civic Leaders, University Administrators and Youth Organisations across East Africa.',
  },
  {
    number: '02',
    label: 'Flagship Programme',
    title: 'UGANDA NATIONAL SCIENCE PARK AND INNOVATION AREA INITIATIVE',
    subtitle: 'Harnessing Youth Innovation for Production and National Transformation',
    surface: 'section-alt',
    paragraphs: [
      "The Uganda National Science Park and Innovation Area Initiative is GPLA's flagship programme for advancing science, technology, innovation, enterprise development and productive youth participation in Uganda's economy.",
      'The Initiative seeks to establish a nationally supported ecosystem where universities, researchers, innovators, entrepreneurs, industries, investors and government institutions can collaborate to transform ideas and research into commercially viable products, enterprises and employment opportunities.',
      "It will provide a platform for incubation, research commercialisation, industrial production, skills development, technology transfer and investment in sectors that are critical to Uganda's development.",
    ],
    panels: [
      {
        title: 'Strategic Objectives',
        style: 'check',
        items: [
          'Promote youth-led innovation, entrepreneurship and production.',
          'Commercialise research and innovations developed by universities and young people.',
          'Connect innovators with investors, industries, markets and government support.',
          'Strengthen collaboration among universities, research institutions and the private sector.',
          'Support the growth of technology-based enterprises and productive industries.',
          'Contribute to employment creation, industrialisation and import substitution.',
        ],
      },
      {
        title: 'Priority Areas',
        style: 'chip',
        items: [
          'Agricultural technology and agro-processing',
          'Artificial intelligence and digital innovation',
          'Health and biotechnology',
          'Renewable energy and climate technology',
          'Engineering and advanced manufacturing',
          'Minerals, oil and gas technologies',
          'Creative and knowledge-based industries',
          'Research commercialisation and technology transfer',
        ],
      },
    ],
    extraPanel: {
      title: 'Key Activities',
      style: 'bullet',
      items: [
        'Establishment of the Uganda National Science Park',
        'Innovation incubation and acceleration',
        'Youth enterprise and production hubs',
        'Research and industry partnerships',
        'Investor and innovation forums',
        'Technology transfer programmes',
        'Skills development and technical mentorship',
        'National innovation exhibitions and competitions',
      ],
    },
    beneficiaries:
      'Young innovators, university graduates, researchers, start-ups, entrepreneurs, technical institutions, universities and small and medium-sized enterprises.',
  },
  {
    number: '03',
    label: 'Flagship Programme',
    title: 'GPLA EXECUTIVE MASTER CLASSES',
    subtitle: 'Developing Ethical, Strategic and Transformational Leaders',
    surface: 'section-dark',
    paragraphs: [
      'The GPLA Executive Master Classes are high-level leadership development programmes designed for public officials, institutional administrators, political leaders, professionals, civil society executives, private-sector managers and emerging leaders.',
      'The programme brings together distinguished statespersons, experienced public servants, diplomats, academics, business leaders and governance practitioners to share practical knowledge, leadership experience and institutional lessons.',
      'The Master Classes focus on the real challenges of leadership, including managing public trust, making difficult decisions, leading during crises, strengthening institutions and delivering results in complex environments.',
    ],
    panels: [
      {
        title: 'Strategic Objectives',
        style: 'check',
        items: [
          'Strengthen ethical and values-based leadership.',
          'Improve the leadership capacity of public and institutional leaders.',
          'Promote effective governance, public administration and statecraft.',
          'Equip leaders to manage crises, change and institutional reputation.',
          'Facilitate mentorship between experienced and emerging leaders.',
          'Build a network of responsible leaders committed to public service.',
        ],
      },
      {
        title: 'Core Learning Areas',
        style: 'bullet',
        items: [
          'Ethical leadership and values-based decision-making',
          'Leadership in public service',
          'Governance, public administration and statecraft',
          'Managing public trust and institutional reputation',
          'Leadership during crisis and change',
          'Diplomacy, geopolitics and regional integration',
          'Strategic communication and stakeholder management',
          'Institutional performance and succession planning',
        ],
      },
    ],
    extraPanel: {
      title: 'Delivery Methods',
      style: 'bullet',
      items: [
        'Executive master classes',
        'Leadership retreats',
        'Policy and governance seminars',
        'Case-study discussions',
        'Fireside conversations with statespersons',
        'Institutional leadership training',
        'Mentorship and executive coaching',
        'Online and physical learning sessions',
      ],
    },
    beneficiaries:
      'Public servants, institutional heads, university administrators, political leaders, civil society executives, private-sector managers and high-potential emerging leaders.',
  },
  {
    number: '04',
    label: 'Flagship Programme',
    title: 'GUILD LEADERSHIP DEVELOPMENT AND MENTORSHIP PROGRAMME',
    subtitle: 'Preparing Student Leaders for Responsible Service and Future Leadership',
    surface: 'section-alt',
    paragraphs: [
      "The Guild Leadership Development and Mentorship Programme is GPLA's foundational programme for strengthening leadership, governance and institutional management among university guild leaders.",
      'The programme provides newly elected and serving student leaders with practical training in ethical leadership, financial accountability, negotiation, communication, conflict resolution, policy engagement and responsible representation.',
      'It also supports leadership transition, institutional continuity and mentorship by connecting current guild leaders with former guild presidents, public officials, professionals and experienced national leaders.',
      'The programme recognises university leadership as an important training ground for future leaders in government, business, civil society and public institutions.',
    ],
    panels: [
      {
        title: 'Strategic Objectives',
        style: 'check',
        items: [
          'Equip guild leaders with practical leadership and governance skills.',
          'Promote integrity, accountability and responsible student representation.',
          'Strengthen cooperation between student leaders and university administrations.',
          'Improve leadership transition and institutional continuity within guild governments.',
          'Connect current guild leaders with mentors and leadership alumni.',
          'Prepare student leaders for future roles in public service and national development.',
        ],
      },
      {
        title: 'Key Activities',
        style: 'bullet',
        items: [
          'Induction programmes for newly elected guild leaders',
          'Guild leadership academies and boot camps',
          'Mentorship and leadership coaching',
          'Financial management and accountability training',
          'Conflict resolution and negotiation workshops',
          'Leadership transition and handover support',
          'University governance dialogues',
          'Guild presidents and alumni networks',
        ],
      },
    ],
    beneficiaries:
      'Guild presidents, guild ministers, student speakers, student representatives, aspiring university leaders and former guild leaders.',
  },
];

/** Condensed programme summaries used by the about page preview cards. */
export const programHighlights = [
  {
    number: '01',
    title: 'East African Guild Leaders Summit',
    summary:
      'Advancing youth leadership and East African integration through the premier regional convening platform.',
  },
  {
    number: '02',
    title: 'Uganda National Science Park & Innovation Area Initiative',
    summary: 'Harnessing youth innovation for production and national transformation.',
  },
  {
    number: '03',
    title: 'GPLA Executive Master Classes',
    summary:
      'Developing ethical, strategic and transformational leaders through high-level programmes.',
  },
  {
    number: '04',
    title: 'Guild Leadership Development & Mentorship Programme',
    summary: 'Preparing student leaders for responsible service and future leadership.',
  },
];
