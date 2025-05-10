import {
  AudioWaveform,
  Command,
  LucideMessageCirclePlus,
  Search,
} from 'lucide-react';

export const companyLogos = [
  {
    url: 'https://library.shadcnblocks.com/images/block/logos/shadcn-ui-wordmark.svg',
    alt: 'ShadCN UI',
  },
  {
    url: 'https://library.shadcnblocks.com/images/block/logos/vercel-wordmark.svg',
    alt: 'Vercel',
  },
  {
    url: 'https://library.shadcnblocks.com/images/block/logos/react-icon.svg',
    alt: 'React',
  },
  {
    url: 'https://library.shadcnblocks.com/images/block/logos/supabase-wordmark.svg',
    alt: 'Supabase',
  },
  {
    url: 'https://library.shadcnblocks.com/images/block/logos/tailwind-wordmark.svg',
    alt: 'Tailwind CSS',
  },
];

export const NavbarData = {
  teams: [
    {
      name: 'Blackrock Inc.',
      logo: Command,
      plan: 'Enterprise',
    },
    {
      name: 'Statestreet Inc.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Hilton Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'New Chat',
      url: '#',
      icon: LucideMessageCirclePlus,
      isActive: true,
    },
    {
      title: 'Search',
      url: '#',
      icon: Search,
    },
  ],

  chathistory: [
    {
      name: 'Project Management',
      url: '#',
      emoji: '📊',
    },
    {
      name: 'Household Budget ',
      url: '#',
      emoji: '💰',
    },
  ],
};
