import { FC } from 'react';

import AgileCard from '../AgileCard/AgileCard';
import AgileColumnHeader, { AgileColumnHeaderTheme } from '../AgileColumnHeader/AgileColumnHeader';

interface AgileColumnProps {
  name: string;
  theme: AgileColumnHeaderTheme;
}

const AgileColumn: FC<AgileColumnProps> = ({ name, theme }) => (
  <div className='w-72'>
    <AgileColumnHeader title={name} countTasks={1} theme={theme} />
    <ul className='space-y-3'>
      <AgileCard priority='0' />
      <AgileCard priority='1' />
      <AgileCard priority='2' />
    </ul>
  </div>
);

export default AgileColumn;
