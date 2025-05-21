import {
  AudioWaveform,
  Command,
  LucideMessageCirclePlus,
  Search,
} from 'lucide-react';

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
