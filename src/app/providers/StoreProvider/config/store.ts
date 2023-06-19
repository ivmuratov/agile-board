import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { projectApi } from '@/pages/ProjectListPage/api/projectListApi';
import { agileTaskAPI } from '@/services/agileTaskService';
import { rtkApi } from '@/shared/api/rtkApi';

const rootReducer = combineReducers({
  [rtkApi.reducerPath]: rtkApi.reducer,
  [agileTaskAPI.reducerPath]: agileTaskAPI.reducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat([projectApi.middleware, agileTaskAPI.middleware]),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
