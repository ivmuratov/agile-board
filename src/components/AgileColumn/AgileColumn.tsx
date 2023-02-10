import { FC } from 'react';

import IAgileColor from '../../types/IAgileColor';
import AgileCard from '../AgileCard/AgileCard';
import AgileColumnHeader from '../AgileColumnHeader/AgileColumnHeader';

interface IProps {
  name: string;
  colorHeader: IAgileColor;
}

const AgileColumn: FC<IProps> = ({ name, colorHeader }) => (
  <div className='w-72'>
    <AgileColumnHeader title={name} countTasks={1} color={colorHeader} />
    <ul className='space-y-3'>
      <AgileCard priority='0' />
      <AgileCard priority='1' />
      <AgileCard priority='2' />
    </ul>
  </div>
);

export default AgileColumn;
