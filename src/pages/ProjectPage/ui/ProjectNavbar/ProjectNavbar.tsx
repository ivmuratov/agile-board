import { memo, FC } from 'react';

import { ProjectNavbarItem } from '../ProjectNavbarItem/ProjectNavbarItem';

import type { AppNavLink } from '@/shared/types/route';

import {
  getProjectRouteBoard,
  getProjectRouteTasks,
  getProjectRouteTeam,
} from '@/shared/routes/routes';

const links: Array<AppNavLink> = [
  {
    name: 'Проект',
    to: '',
    end: true,
  },
  {
    name: 'Доска',
    to: getProjectRouteBoard(),
  },
  {
    name: 'Команда',
    to: getProjectRouteTeam(),
  },
  {
    name: 'Список задач',
    to: getProjectRouteTasks(),
  },
];

interface ProjectNavbarProps {
  className?: string;
  projectTitle: string;
  projectId: string;
}

export const ProjectNavbar: FC<ProjectNavbarProps> = memo(
  ({ className, projectTitle, projectId }) => (
    <header className={`mb-5 ${className}`}>
      <h3 className='mb-3 text-2xl'>{projectTitle}</h3>
      <nav className='border-b pb-3'>
        <ul className='flex space-x-5'>
          {links.map(({ name, to, end }) => (
            <ProjectNavbarItem key={name} name={name} projectId={projectId} to={to} end={end} />
          ))}
        </ul>
      </nav>
    </header>
  ),
);
