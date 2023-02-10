import { FC } from 'react';

import IAgileColor from '../../types/IAgileColor';
import AgileColumn from '../AgileColumn/AgileColumn';

const agileColumns: Array<{ name: string; color: IAgileColor }> = [
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

const AgileBoard: FC = () => (
  <div className='flex flex-wrap space-x-4'>
    {agileColumns.map(item => (
      <AgileColumn key={item.name} name={item.name} colorHeader={item.color} />
    ))}
  </div>
);

export default AgileBoard;
