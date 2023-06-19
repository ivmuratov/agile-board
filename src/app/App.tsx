import { FC } from 'react';

import { AppRouter } from './providers/Router';

import Header from '@/components/Header/Header';
import './styles/index.css';

const App: FC = () => (
  <div className='min-h-screen bg-violet-50/50'>
    <Header />
    <AppRouter />
  </div>
);

export default App;
