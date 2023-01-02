import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import INavLink from '../../types/INavLink';

const links: Array<INavLink> = [
  {
    name: 'Проект',
    href: '/',
  },
  {
    name: 'Доска',
    href: '/board',
  },
  {
    name: 'Команда',
    href: '/team',
  },
  {
    name: 'Список задач',
    href: '/task-list',
  },
];

const MainHeader: FC = () => {
  return (
    <header className='mb-5'>
      <h2 className='py-4 text-2xl'>Мегапроект</h2>
      <nav className='-mt-2 border-b pb-3'>
        <ul className='flex space-x-5'>
          {links.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? 'pb-3 opacity-90 border-b-2 border-b-blue-500'
                    : 'pb-3 opacity-60 hover:border-b-2 hover:border-b-blue-500/70 hover:opacity-90'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
