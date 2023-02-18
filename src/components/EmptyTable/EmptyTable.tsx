import { FC } from 'react';

import Button from '../../UI/Button/Button';

interface EmptyTableProps {
  title: string;
  buttonTitle: string;
  buttonAction?: () => void;
}

const EmptyTable: FC<EmptyTableProps> = ({ title, buttonTitle, buttonAction }) => (
  <div className='pt-8 text-center'>
    <h2 className='mb-7 text-3xl'>{title}</h2>
    <Button onClick={buttonAction}>{buttonTitle}</Button>
  </div>
);

export default EmptyTable;
