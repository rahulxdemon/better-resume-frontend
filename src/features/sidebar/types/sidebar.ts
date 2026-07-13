import type { LinkOptions } from '@tanstack/react-router';

export interface ISidebarHeader {
  title: string;
  subtitle: string;
  logo: string;
}

export interface INavGroup {
  id: string;
  title?: string;
  separator?: boolean;
  items: INavItem[];
}

export interface INavItem {
  id: string;
  title: string;
  Icon: React.ElementType;
  linkOptions: LinkOptions;
}
