import { FC, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { appRouter } from '../config/router';

import { Container } from '@/shared/ui/Container';

export const AppRouter: FC = () => {
  const routes = useRoutes(Object.values(appRouter));

  return (
    <Container>
      <Suspense fallback={<div>... loading</div>}>{routes}</Suspense>
    </Container>
  );
};
