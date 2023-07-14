import { memo, FC, SVGProps } from 'react';
import { NavLink, To } from 'react-router-dom';

interface NavbarItemProps {
  className?: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  to: To;
}

export const NavbarItem: FC<NavbarItemProps> = memo(({ className, Icon, to }) => (
  <li key={Icon.name} className={className}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex h-full items-center p-5 transition-colors hover:bg-violet-200/50 ${
          isActive && 'bg-violet-100/50 border-b-2 border-b-blue-500'
        }`
      }
    >
      {({ isActive }) => <Icon fill='#374151' opacity={isActive ? '0.8' : '0.6'} />}
    </NavLink>
  </li>
));
