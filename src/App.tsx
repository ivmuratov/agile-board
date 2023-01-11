import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './index.css';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-violet-50/50'>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
