import { NavItem } from '../types/types';

export const getNavItems = ():NavItem[] => [
  {
    url: '/home',
    name: 'Home',
  },
  {
    url: '/gallery',
    name: 'Gallery',
  },
  {
    url: '/about-us',
    name: 'About Us',

  },
  {
    url: '/contact-us',
    name: 'Contact Us',
  },
];
