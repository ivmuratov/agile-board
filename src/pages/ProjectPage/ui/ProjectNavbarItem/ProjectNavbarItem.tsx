import { memo, FC } from 'react';
import { NavLink, To } from 'react-router-dom';

import { getProjectRoutes } from '@/shared/routes/routes';

interface ProjectNavbarItemProps {
  className?: string;
  name: string;
  projectId: string;
  to: To;
  end?: boolean;
}

export const ProjectNavbarItem: FC<ProjectNavbarItemProps> = memo(
  ({ className, name, projectId, to, end }) => (
    <li className={className}>
      <NavLink
        to={getProjectRoutes(projectId, to)}
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
  ),
);
