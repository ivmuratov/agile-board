import { FC, lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Container from '../UI/Container';

const ProjectListTable = lazy(() => import('../ProjectListTable/ProjectListTable'));
const ProjectHeader = lazy(() => import('../ProjectHeader/ProjectHeader'));
const ProjectInfo = lazy(() => import('../ProjectInfo/ProjectInfo'));
const AgileBoard = lazy(() => import('../AgileBoard/AgileBoard'));
const AgileTaskListTable = lazy(() => import('../AgileTaskListTable/AgileTaskListTable'));
const TeamInfo = lazy(() => import('../TeamInfo/TeamInfo'));

const Main: FC = () => {
  const routesHook = useRoutes([
    { path: '/projects', element: <ProjectListTable /> },
    {
      path: '/projects/:projectId',
      element: <ProjectHeader />,
      children: [
        { index: true, element: <ProjectInfo /> },
        { path: 'board', element: <AgileBoard /> },
        { path: 'team', element: <TeamInfo /> },
        { path: 'tasks', element: <AgileTaskListTable /> },
      ],
    },
  ]);

  return (
    <main>
      <Container>
        <Suspense>{routesHook}</Suspense>
      </Container>
    </main>
  );
};

export default Main;
