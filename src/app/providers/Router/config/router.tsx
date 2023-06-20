import { RouteObject } from 'react-router-dom';

import AgileTaskListTable from '@/components/AgileTaskListTable/AgileTaskListTable';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProjectBoardPage } from '@/pages/ProjectBoardPage';
import { ProjectDetailsPage } from '@/pages/ProjectDetailsPage';
import { ProjectListPage } from '@/pages/ProjectListPage';
import { ProjectPage } from '@/pages/ProjectPage';
import { ProjectTeamPage } from '@/pages/ProjectTeamPage';
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
    element: <ProjectDetailsPage />,
  },
  [ProjectRoutes.BOARD]: {
    path: getProjectRouteBoard(),
    element: <ProjectBoardPage />,
  },
  [ProjectRoutes.TEAM]: {
    path: getProjectRouteTeam(),
    element: <ProjectTeamPage />,
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
    element: <ProjectListPage />,
  },
  [AppRoutes.PROJECT_ROUTES]: {
    path: getAppRouteProject(':projectId'),
    element: <ProjectPage />,
    children: Object.values(projectRoutes),
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};
