import { FC, Suspense, memo, useCallback } from 'react';
import { Route, RouteObject, Routes, useRoutes } from 'react-router-dom';

import { appRouter } from '../config/router';

import { Container } from '@/shared/ui/Container';

const AppRouter: FC = () => {
  const routes = useRoutes(Object.values(appRouter));

  return (
    <Container>
      <Suspense fallback={<div>... loading</div>}>{routes}</Suspense>
    </Container>
  );
};

/* const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: RouteObject) => {
    const element = <Suspense fallback={<div>... loading</div>}>{route.element}</Suspense>;

    return (
      <Route key={`${route.path}0`} path={route.path} element={element}>
        {route.children?.map(childRoute => {
          const childElement = (
            <Suspense fallback={<div>... loading child</div>}>{childRoute.element}</Suspense>
          );

          return (
            <Route
              key={`${childRoute.path}1`}
              index={childRoute.index}
              path={childRoute.path}
              element={childElement}
              errorElement={childRoute.errorElement}
            />
          );
        })}
      </Route>
    );
  }, []);

  return (
    <Container>
      <Routes>{Object.values(appRouter).map(renderWithWrapper)}</Routes>
    </Container>
  );
}; */

export default memo(AppRouter);
