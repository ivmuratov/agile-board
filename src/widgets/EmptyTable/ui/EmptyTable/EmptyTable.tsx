import { FC } from 'react';

import { Button } from '@/shared/ui/Button';

interface EmptyTableProps {
  className?: string;
  title: string;
  buttonName: string;
  createRowHandler?: () => void;
}

const EmptyTable: FC<EmptyTableProps> = ({ className, title, buttonName, createRowHandler }) => (
  <div className={`pt-8 text-center ${className}`}>
    <h2 className='mb-7 text-4xl'>{title}</h2>
    <Button onClick={createRowHandler}>{buttonName}</Button>
  </div>
);

export default EmptyTable;
