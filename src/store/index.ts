import { combineReducers, configureStore } from '@reduxjs/toolkit';

import testReducer from './reducers/testReducer';

const rootReducer = combineReducers({
  testReducer,
});

export const createStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
