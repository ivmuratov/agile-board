import { FC } from 'react';

import Button from '../UI/Button';

interface IProps {
  title: string;
  buttonTitle: string;
}

const EmptyTable: FC<IProps> = ({ title, buttonTitle }) => {
  return (
    <div className='pt-8 text-center'>
      <h2 className='mb-7 text-3xl'>{title}</h2>
      <Button>{buttonTitle}</Button>
    </div>
  );
};

export default EmptyTable;
