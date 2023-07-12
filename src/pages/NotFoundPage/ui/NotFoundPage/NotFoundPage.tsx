import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  return (
    <main className='pt-20 text-center'>
      <h2 className='mb-7 text-8xl'>404</h2>
      <p className='mb-7 text-xl'>СТРАНИЦА НЕ НАЙДЕНА</p>
      <Button onClick={returnBack}>Назад</Button>
    </main>
  );
};

export default NotFoundPage;
