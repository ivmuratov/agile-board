import { FC } from 'react';
import { Provider } from 'react-redux';

import Main from './components/Main';
import { setupeStore } from './store';

import './index.css';

const store = setupeStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
