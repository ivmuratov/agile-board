import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { editTaskFormReducer } from '@/features/EditableTaskForm';
import { taskListFilterReducer } from '@/features/TaskListFilter';
import { rtkApi } from '@/shared/api/rtkApi';

const rootReducer = combineReducers({
  [rtkApi.reducerPath]: rtkApi.reducer,
  editTaskForm: editTaskFormReducer,
  taskListFilter: taskListFilterReducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([rtkApi.middleware]),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
