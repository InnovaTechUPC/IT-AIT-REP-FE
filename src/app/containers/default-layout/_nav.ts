import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'Projects',
    url: '/theme/projects',
    iconComponent: { name: 'cil-task' }
  },
  {
    name: 'Message',
    url: '/theme/message',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-comment-square' }
  },
  {
    name: 'Statistics',
    url: '/theme/statistics',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-chart' }
  },
  {
    name: 'Notification',
    url: '/theme/notification',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-bell' }
  },
  {
    name: 'AI - AssignIT',
    url: '/theme/ai',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Plans',
    url: '/theme/plans',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-basket' }
  },
  {
    name: 'Settings',
    url: '/theme/settings',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-settings' }
  }
];
