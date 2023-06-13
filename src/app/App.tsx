import { FC } from 'react';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import './styles/index.css';

const App: FC = () => (
  <div className='min-h-screen bg-violet-50/50'>
    <Header />
    <Main />
  </div>
);

export default App;
