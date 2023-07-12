import { FC, useEffect, useState } from 'react';

const MainPage: FC = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className='pt-20 text-center'>
      <h2 className='mb-7 text-4xl'>Главная страница</h2>
      <p className='mb-7 text-4xl'>{dateTime.toLocaleTimeString()}</p>
    </main>
  );
};

export default MainPage;
