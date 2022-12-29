import { FC } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { setupeStore } from './store';

import './index.css';

const store = setupeStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className='min-h-screen bg-violet-50/50'>
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
