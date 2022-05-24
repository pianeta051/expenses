import { FC } from 'react';
import { NavItem } from '../../types/types';
import { HeaderNavItem } from './HeaderNavItem';

type HeaderProps = {
  navItems: NavItem[];
};
export const Header: FC<HeaderProps> = (
  {
    navItems,
  },
) => (
  <ul>
    {
      navItems.map((navItem) => (
        <HeaderNavItem
          key={navItem.name}
          {...navItem}
        />

      ))
    }
  </ul>
);
