import { FC } from 'react';

import { Button } from '@/shared/ui/Button';

interface EmptyTableProps {
  title: string;
  buttonName: string;
  createRowHandler?: () => void;
}

const EmptyTable: FC<EmptyTableProps> = ({ title, buttonName, createRowHandler }) => (
  <div className='pt-8 text-center'>
    <h2 className='mb-7 text-3xl'>{title}</h2>
    <Button onClick={createRowHandler}>{buttonName}</Button>
  </div>
);

export default EmptyTable;
