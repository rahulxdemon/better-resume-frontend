import { CirclesThreeIcon, FolderUserIcon, ReadCvLogoIcon } from '@phosphor-icons/react';
import { linkOptions } from '@tanstack/react-router';
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
        Icon: CirclesThreeIcon,
        linkOptions: linkOptions({ to: '/r/dashboard' }),
      },
      {
        id: 'jobs',
        title: 'Jobs',
        Icon: FolderUserIcon,
        linkOptions: linkOptions({ to: '/r/jobs' }),
      },
      {
        id: 'resumes',
        title: 'Resumes',
        Icon: ReadCvLogoIcon,
        linkOptions: linkOptions({ to: '/r/resumes' }),
      },
    ],
  },
];
