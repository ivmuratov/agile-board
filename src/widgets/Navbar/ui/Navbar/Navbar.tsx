import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import LogoIcon from '@/shared/assets/logo.svg';
import { AppNavLink } from '@/shared/types/route';
import { Container } from '@/shared/ui/Container';

const links: Array<AppNavLink> = [
  {
    name: 'Проекты',
    to: '/projects',
  },
  {
    name: 'Инфо',
    to: '#',
  },
  {
    name: 'Мой профиль',
    to: '#',
  },
];

export const Navbar: FC = () => (
  <header className='mb-4 h-14 border bg-white'>
    <Container>
      <div className='flex h-full items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <LogoIcon height='35px' width='35px' />
          <p className='text-xl font-semibold'>Agile</p>
        </div>
        <nav>
          <ul className='flex space-x-3'>
            {links.map(({ name, to }) => (
              <li key={name}>
                <NavLink to={to}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  </header>
);
