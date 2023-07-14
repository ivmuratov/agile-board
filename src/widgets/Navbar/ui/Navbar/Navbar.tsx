import { FC } from 'react';

import { NavbarItem } from '../NavbarItem/NavbarItem';

import HomeIcon from '@/shared/assets/home.svg';
import ProjectsIcon from '@/shared/assets/info.svg';
import LogoIcon from '@/shared/assets/logo.svg';
import { getAppRouteMain, getAppRouteProjects } from '@/shared/routes/routes';
import { AppNavLinkIcon } from '@/shared/types/route';
import { Container } from '@/shared/ui/Container';

const links: Array<AppNavLinkIcon> = [
  {
    Icon: HomeIcon,
    to: getAppRouteMain(),
  },
  {
    Icon: ProjectsIcon,
    to: getAppRouteProjects(),
  },
];

export const Navbar: FC = () => (
  <header className='mb-4 h-14 border bg-slate-50'>
    <Container>
      <div className='flex h-full items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <LogoIcon height='35px' width='35px' />
          <p className='text-xl font-semibold'>Agile</p>
        </div>
        <nav className='h-full'>
          <ul className='flex h-full'>
            {links.map(({ Icon, to }) => (
              <NavbarItem key={Icon.name} className='h-full' Icon={Icon} to={to} />
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  </header>
);
