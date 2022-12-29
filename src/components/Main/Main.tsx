import { FC } from 'react';

import AgileBoard from '../AgileBoard/AgileBoard';
import MainHeader from '../MainHeader/MainHeader';
import Container from '../UI/Container';

const Main: FC = () => {
  return (
    <main>
      <Container>
        <MainHeader />
        <AgileBoard />
      </Container>
    </main>
  );
};

export default Main;
