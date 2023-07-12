import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@/shared/assets/home.svg';
import ProjectIcon from '@/shared/assets/info.svg';
import LogoIcon from '@/shared/assets/logo.svg';
import { getAppRouteMain, getAppRouteProjects } from '@/shared/routes/routes';
import { AppNavLink } from '@/shared/types/route';
import { Container } from '@/shared/ui/Container';

const links: Array<AppNavLink> = [
  {
    name: 'Главная',
    Icon: HomeIcon,
    to: getAppRouteMain(),
  },
  {
    name: 'Проекты',
    Icon: ProjectIcon,
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
            {links.map(({ name, to, Icon }) => {
              if (Icon) {
                return (
                  <li key={name} className='h-full'>
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
                );
              }

              return null;
            })}
          </ul>
        </nav>
      </div>
    </Container>
  </header>
);
