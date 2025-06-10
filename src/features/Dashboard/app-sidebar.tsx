'use client';

import * as React from 'react';
import {
  IconBolt,
  IconBrain,
  IconDashboard,
  IconGitBranch,
  IconHelp,
  IconMessage,
  IconReport,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react';

import { NavDocuments } from '@/features/Dashboard/nav-documents';
import { NavMain } from '@/features/Dashboard/nav-main';
import { NavSecondary } from '@/features/Dashboard/nav-secondary';
import { NavUser } from '@/features/Dashboard/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { GalleryVerticalEnd } from 'lucide-react';
import useAuthStore from '@/store/useAuthStore';

const data = {
  user: {
    name: 'PhantomX',
    email: 'm@example.com',
    avatar: 'https://ui.shadcn.com/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: IconDashboard,
    },
    {
      title: 'Chats',
      url: '#',
      icon: IconMessage,
    },
    {
      title: 'Agents',
      url: '#',
      icon: IconBolt,
    },
    {
      title: 'Chain of Reaction',
      url: '#',
      icon: IconGitBranch,
    },
    {
      title: 'Team',
      url: '#',
      icon: IconUsers,
    },
  ],

  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: 'Context Bucket',
      url: '#',
      icon: IconBrain,
    },
    {
      name: 'Reports',
      url: '#',
      icon: IconReport,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user: loggedInUser } = useAuthStore();
  data.user.email = loggedInUser?.email ?? '';
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <GalleryVerticalEnd className="!size-4" />
                <span className="text-base font-semibold">PhantomX</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
