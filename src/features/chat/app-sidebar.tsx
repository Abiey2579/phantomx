'use client';

import * as React from 'react';

import { ChatHistory } from '@/features/chat/chat-history';
import { NavMain } from '@/features/chat/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

import { NavbarData as data } from '@/utils/placeholder';
import Image from 'next/image';
import LogoImage from '@/assets/icons/logo.png';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="mt-2 mb-8 flex items-center gap-2">
          <Image src={LogoImage} alt="Logo" className="w-7" />
          <h1 className="delius-regular text-2xl font-semibold">PhantomX</h1>
        </div>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <ChatHistory favorites={data.chathistory} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
