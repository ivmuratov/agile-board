import { FC } from 'react';

import { AppRouter } from './providers/Router';

import { Navbar } from '@/widgets/Navbar';
import './styles/index.css';

const App: FC = () => (
  <div className='min-h-screen bg-violet-50/50'>
    <Navbar />
    <AppRouter />
  </div>
);

export default App;
