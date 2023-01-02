import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { createStore } from './store';

import './index.css';

const store = createStore();

const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <div className='min-h-screen bg-violet-50/50'>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
