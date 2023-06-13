import { FC } from 'react';

import Header from '../components/Header/Header';
import { AppRouter } from './providers/Router';
import './styles/index.css';

const App: FC = () => (
  <div className='min-h-screen bg-violet-50/50'>
    <Header />
    <AppRouter />
  </div>
);

export default App;
