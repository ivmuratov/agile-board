import { FC, lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { Container } from '../../shared/ui/Container';

const ProjectListTable = lazy(() => import('../ProjectListTable/ProjectListTable'));
const ProjectMain = lazy(() => import('../ProjectMain/ProjectMain'));
const ProjectInfo = lazy(() => import('../ProjectInfo/ProjectInfo'));
const AgileBoard = lazy(() => import('../AgileBoard/AgileBoard'));
const AgileTaskListTable = lazy(() => import('../AgileTaskListTable/AgileTaskListTable'));
const TeamInfo = lazy(() => import('../TeamInfo/TeamInfo'));

const Main: FC = () => {
  const routesHook = useRoutes([
    { path: '/projects', element: <ProjectListTable /> },
    {
      path: '/projects/:projectId',
      element: <ProjectMain />,
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
