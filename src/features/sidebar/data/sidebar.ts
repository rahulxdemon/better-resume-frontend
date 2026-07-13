import { linkOptions } from '@tanstack/react-router';
import { LayoutDashboard } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import type { INavGroup, ISidebarHeader } from '@/features/sidebar/types/sidebar';

export const SIDEBAR_HEADER: ISidebarHeader = {
  title: SITE_CONFIG.name,
  subtitle: SITE_CONFIG.description,
  logo: SITE_CONFIG.logo,
};

export const SIDEBAR_NAVIGATION: INavGroup[] = [
  {
    id: 'group-dashboard',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        Icon: LayoutDashboard,
        linkOptions: linkOptions({ to: '/r/dashboard' }),
      },
      {
        id: 'jobs',
        title: 'Jobs',
        Icon: LayoutDashboard,
        linkOptions: linkOptions({ to: '/r/jobs' }),
      },
      {
        id: 'resumes',
        title: 'Resumes',
        Icon: LayoutDashboard,
        linkOptions: linkOptions({ to: '/r/resumes' }),
      },
    ],
  },
];
