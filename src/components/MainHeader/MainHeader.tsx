import { FC } from 'react';

import INavLink from '../../types/INavLink';

const links: Array<INavLink> = [
  {
    name: 'Проект',
    href: '#',
  },
  {
    name: 'Доска',
    href: '#',
  },
  {
    name: 'Команда',
    href: '#',
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
              <a
                className='pb-3 opacity-60 hover:border-b-2 hover:border-b-blue-500/70 hover:opacity-90'
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
