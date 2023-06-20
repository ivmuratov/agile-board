import { memo, FC } from 'react';
import { NavLink } from 'react-router-dom';

import type { AppNavLink } from '@/shared/types/route';

const links: Array<AppNavLink> = [
  {
    name: 'Проект',
    to: '',
    end: true,
  },
  {
    name: 'Доска',
    to: '/board',
  },
  {
    name: 'Команда',
    to: '/team',
  },
  {
    name: 'Список задач',
    to: '/tasks',
  },
];

interface ProjectHeaderProps {
  className?: string;
  projectTitle: string;
  projectId: string;
}

export const ProjectHeader: FC<ProjectHeaderProps> = memo(
  ({ className, projectTitle, projectId }) => (
    <header className={`mb-5 ${className}`}>
      <h3 className='mb-2 text-2xl'>{projectTitle}</h3>
      <nav className='border-b pb-3'>
        <ul className='flex space-x-5'>
          {links.map(({ name, to, end }) => (
            <li key={name}>
              <NavLink
                to={`/projects/${projectId}${to}`}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? 'pb-3 opacity-90 border-b-2 border-b-blue-500'
                    : 'pb-3 opacity-60 hover:border-b-2 hover:border-b-blue-500/70 hover:opacity-90'
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  ),
);
