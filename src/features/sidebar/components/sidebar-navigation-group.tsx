import { Link } from '@tanstack/react-router';
import React from 'react';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from '@/components/ui/sidebar';
import type { INavGroup } from '@/features/sidebar/types/sidebar';

interface SidebarAgentNavigationGroupProps {
  navGroup: INavGroup[];
}

export function SidebarAgentNavigationGroup({ navGroup }: SidebarAgentNavigationGroupProps) {
  return (
    <React.Fragment>
      {navGroup.map((group) => (
        <React.Fragment key={group.id}>
          <SidebarGroup key={group.id}>
            {group.title && <SidebarGroupLabel className='text-[10px] text-muted-foreground/70 px-3'>{group.title}</SidebarGroupLabel>}
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton size={'default'} className='whitespace-nowrap transition-all duration-300' tooltip={item.title} asChild>
                    <Link
                      {...item.linkOptions}
                      activeProps={{ className: 'bg-primary/10! text-primary! font-semibold' }}
                      inactiveProps={{ className: 'text-muted-foreground hover:bg-muted hover:text-foreground' }}
                    >
                      {<item.Icon className='transition-colors' />}
                      <span className='whitespace-nowrap font-medium'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          {group.separator && <SidebarSeparator className='mx-0' />}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
