import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import LogoIcon from '@/shared/assets/logo.svg';
import NavLinkType from '@/shared/types/NavLinkType';
import { Container } from '@/shared/ui/Container';

const links: Array<NavLinkType> = [
  {
    id: '0',
    name: 'Проекты',
    path: '/projects',
  },
  {
    id: '1',
    name: 'Инфо',
    path: '#',
  },
  {
    id: '2',
    name: 'Мой профиль',
    path: '#',
  },
];

const Header: FC = () => (
  <header className='mb-4 h-14 border bg-white'>
    <Container>
      <div className='flex h-full items-center justify-between'>
        <div className='flex items-center space-x-2'>
          {/* <img src={LogoIcon} alt='logo' height='35px' width='35px' /> */}
          <LogoIcon height='35px' width='35px' />
          <p className='text-xl font-semibold'>Agile</p>
        </div>
        <nav>
          <ul className='flex space-x-3'>
            {links.map(({ id, name, path }) => (
              <li key={id}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
