import { FC } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Main: FC = () => {
  const { number } = useTypedSelector(state => state.testReducer);

  const { increment, decrement } = useActions();

  return (
    <div className='container mx-auto mt-4 flex flex-col items-center space-y-4 px-4'>
      <h1 className='text-4xl'>Hello Main</h1>
      <div className='text-7xl'>{number}</div>
      <div>
        <button className='mr-4 h-7 w-7 bg-purple-200' onClick={() => increment()}>
          +
        </button>
        <button className='h-7 w-7 bg-purple-200' onClick={() => decrement()}>
          -
        </button>
      </div>
    </div>
  );
};

export default Main;
