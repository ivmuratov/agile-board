export enum AppRoutes {
  MAIN = 'main',
  PROJECTS = 'projects',
  PROJECT_ROUTES = 'project_routes',

  // last
  NOT_FOUND = 'not_found',
}

export enum ProjectRoutes {
  INFO = 'info',
  BOARD = 'board',
  TEAM = 'team',
  TASKS = 'tasks',
}

export const getAppRouteMain = () => '/';

export const getAppRouteProjects = () => '/projects';

export const getAppRouteProject = (projectId: string) => `/projects/${projectId}`;

export const getProjectRouteBoard = () => `board`;

export const getProjectRouteTeam = () => `team`;

export const getProjectRouteTasks = () => `tasks`;

export const getRouteNotFound = () => '*';
