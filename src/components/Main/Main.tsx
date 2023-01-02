import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainHeader from '../MainHeader/MainHeader';
import Container from '../UI/Container';

const ProjectInfo = lazy(() => import('../ProjectInfo/ProjectInfo'));
const AgileBoard = lazy(() => import('../AgileBoard/AgileBoard'));
const TeamInfo = lazy(() => import('../TeamInfo/TeamInfo'));
const TaskList = lazy(() => import('../TaskList/TaskList'));
const Loading: FC = () => <p>Loading...</p>;

const Main: FC = () => {
  return (
    <main>
      <Container>
        <MainHeader />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<ProjectInfo />} />
            <Route path='/board' element={<AgileBoard />} />
            <Route path='/team' element={<TeamInfo />} />
            <Route path='/task-list' element={<TaskList />} />
          </Routes>
        </Suspense>
      </Container>
    </main>
  );
};

export default Main;
