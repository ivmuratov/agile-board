import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { agileTaskAPI } from '@/services/agileTaskService';
import { projectAPI } from '@/services/projectService';

const rootReducer = combineReducers({
  [projectAPI.reducerPath]: projectAPI.reducer,
  [agileTaskAPI.reducerPath]: agileTaskAPI.reducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat([projectAPI.middleware, agileTaskAPI.middleware]),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
