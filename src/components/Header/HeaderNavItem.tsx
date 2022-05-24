import { FC } from 'react';
import { NavItem } from '../../types/types';

export const HeaderNavItem : FC<NavItem> = ({
  url,
  name,
}) => (
  <li>
    <a href={url}>{name}</a>
  </li>

);
