import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import NavLinkType from '../../shared/types/NavLinkType';

const links: Array<NavLinkType> = [
  {
    id: '0',
    name: 'Проект',
    path: '',
    end: true,
  },
  {
    id: '1',
    name: 'Доска',
    path: '/board',
  },
  {
    id: '2',
    name: 'Команда',
    path: '/team',
  },
  {
    id: '3',
    name: 'Список задач',
    path: '/tasks',
  },
];

interface ProjectHeaderProps {
  projectTitle: string;
  projectId: string;
}

const ProjectHeader: FC<ProjectHeaderProps> = ({ projectTitle, projectId }) => (
  <header className='mb-5'>
    <h3 className='mb-2 text-2xl'>{projectTitle}</h3>
    <nav className='border-b pb-3'>
      <ul className='flex space-x-5'>
        {links.map(({ id, name, path, end }) => (
          <li key={id}>
            <NavLink
              to={`/projects/${projectId}${path}`}
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
);

export default ProjectHeader;
