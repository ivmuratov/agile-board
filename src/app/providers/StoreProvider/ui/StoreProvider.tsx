import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store';

const store = createStore();

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
