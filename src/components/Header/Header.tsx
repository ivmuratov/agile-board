import { FC } from 'react';

import logo from '../../assets/logo.svg';
import INavLink from '../../types/INavLink';
import Container from '../UI/Container';

const links: Array<INavLink> = [
  {
    name: 'Инфо',
    href: '#',
  },
  {
    name: 'Мой профиль',
    href: '#',
  },
];

const Header: FC = () => {
  return (
    <header className='h-14 border bg-white'>
      <Container>
        <div className='flex h-full items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <img src={logo} alt='logo' height='35px' width='35px' />
            <p className='text-xl font-semibold'>Agile</p>
          </div>
          <nav>
            <ul className='flex space-x-3'>
              {links.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
