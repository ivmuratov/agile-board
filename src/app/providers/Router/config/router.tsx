import { RouteObject } from 'react-router-dom';

import AgileBoard from '@/components/AgileBoard/AgileBoard';
import AgileTaskListTable from '@/components/AgileTaskListTable/AgileTaskListTable';
import { MainPage } from '@/components/MainPage';
import NotFound from '@/components/NotFound/NotFound';
import ProjectInfo from '@/components/ProjectInfo/ProjectInfo';
import ProjectListTable from '@/components/ProjectListTable/ProjectListTable';
import ProjectMain from '@/components/ProjectMain/ProjectMain';
import TeamInfo from '@/components/TeamInfo/TeamInfo';
import {
  AppRoutes,
  ProjectRoutes,
  getAppRouteMain,
  getRouteNotFound,
  getAppRouteProjects,
  getProjectRouteBoard,
  getProjectRouteTeam,
  getProjectRouteTasks,
  getAppRouteProject,
} from '@/shared/routes/routes';

const projectRoutes: Record<ProjectRoutes, RouteObject> = {
  [ProjectRoutes.INFO]: {
    index: true,
    element: <ProjectInfo />,
  },
  [ProjectRoutes.BOARD]: {
    path: getProjectRouteBoard(),
    element: <AgileBoard />,
  },
  [ProjectRoutes.TEAM]: {
    path: getProjectRouteTeam(),
    element: <TeamInfo />,
  },
  [ProjectRoutes.TASKS]: {
    path: getProjectRouteTasks(),
    element: <AgileTaskListTable />,
  },
};

export const appRouter: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: getAppRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.PROJECTS]: {
    path: getAppRouteProjects(),
    element: <ProjectListTable />,
  },
  [AppRoutes.PROJECT_ROUTES]: {
    path: getAppRouteProject(':projectId'),
    element: <ProjectMain />,
    children: Object.values(projectRoutes),
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFound />,
  },
};
