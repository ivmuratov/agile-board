import { FC } from 'react';

import AgileColumn from '../AgileColumn/AgileColumn';
import { AgileColumnHeaderTheme } from '../AgileColumnHeader/AgileColumnHeader';

const agileColumns: Array<{ name: string; theme: AgileColumnHeaderTheme }> = [
  {
    name: 'Сделать',
    theme: AgileColumnHeaderTheme.BLUE,
  },
  {
    name: 'В процессе',
    theme: AgileColumnHeaderTheme.YELLOW,
  },
  {
    name: 'На проверке',
    theme: AgileColumnHeaderTheme.PURPLE,
  },
  {
    name: 'Принято',
    theme: AgileColumnHeaderTheme.GREEN,
  },
];

const AgileBoard: FC = () => (
  <div className='flex flex-wrap space-x-4'>
    {agileColumns.map(item => (
      <AgileColumn key={item.name} name={item.name} theme={item.theme} />
    ))}
  </div>
);

export default AgileBoard;
