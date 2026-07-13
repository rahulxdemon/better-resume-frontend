import type * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import type { INavGroup, ISidebarHeader } from '@/features/sidebar/types/sidebar';
import { SidebarAgentNavigationGroup } from './sidebar-navigation-group';

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  sidebarHeader: ISidebarHeader;
  navGroup: INavGroup[];
}

export function AppSidebar({ sidebarHeader, navGroup, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div>
                <img src={sidebarHeader.logo} alt='logo' />
                <div className='grid flex-1 text-left leading-tight'>
                  <span className='truncate font-semibold text-base'>{sidebarHeader.title}</span>
                  <span className='text-muted-foreground text-xs whitespace-nowrap'>{sidebarHeader.subtitle}</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className='mx-0' />
      <SidebarContent className='overflow-x-hidden no-scrollbar gap-0'>
        <SidebarAgentNavigationGroup navGroup={navGroup} />
      </SidebarContent>
      <SidebarFooter>
        <p>jlkjkl</p>
      </SidebarFooter>
    </Sidebar>
  );
}
