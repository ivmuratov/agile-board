import { FC, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { Container } from '../../../../shared/ui/Container';
import { appRouter } from '../config/router';

export const AppRouter: FC = () => {
  const routes = useRoutes(Object.values(appRouter));

  return (
    <main>
      <Container>
        <Suspense fallback={<div>... loading</div>}>{routes}</Suspense>
      </Container>
    </main>
  );
};
