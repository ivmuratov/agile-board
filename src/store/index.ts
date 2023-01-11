import { combineReducers, configureStore } from '@reduxjs/toolkit';

import agileTaskReducer from './reducers/agileTaskSlice';
import projectReducer from './reducers/projectSlice';
import testReducer from './reducers/testSlice';

const rootReducer = combineReducers({
  projectReducer,
  agileTaskReducer,
  testReducer,
});

export const createStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
