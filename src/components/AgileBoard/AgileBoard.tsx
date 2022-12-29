import { FC } from 'react';

import ColorType from '../../types/ColorType';
import AgileColumn from '../AgileColumn/AgileColumn';

const agileColumns: Array<{ name: string; color: ColorType }> = [
  {
    name: 'Сделать',
    color: 'blue',
  },
  {
    name: 'В процессе',
    color: 'yellow',
  },
  {
    name: 'На проверке',
    color: 'purple',
  },
  {
    name: 'Принято',
    color: 'green',
  },
];

const AgileBoard: FC = () => {
  return (
    <div className='flex flex-wrap space-x-4'>
      {agileColumns.map((item, index) => (
        <AgileColumn key={index} name={item.name} colorHeader={item.color} />
      ))}
    </div>
  );
};

export default AgileBoard;
