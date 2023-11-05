import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'Projects',
    url: '/projects',
    iconComponent: { name: 'cil-task' }
  },
  {
    name: 'Statistics',
    url: '/statistics',
    iconComponent: { name: 'cil-chart' }
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' }
  },
  {
    name: 'AI - AssignIT',
    url: '/ai',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Plans',
    url: '/plans',
    iconComponent: { name: 'cil-basket' }
  },
  {
    name: 'Settings',
    url: '/settings',
    iconComponent: { name: 'cil-settings' }
  }
];
