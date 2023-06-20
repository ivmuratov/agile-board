import { memo, FC } from 'react';

import { BoardColumnHeader } from '../BoardColumnHeader/BoardColumnHeader';

import type { BoardColumnHeaderTheme } from '../../model/types/projectBoard';

import { TaskCard } from '@/entities/Task';

interface BoardColumnProps {
  className?: string;
  name: string;
  theme: BoardColumnHeaderTheme;
}

export const BoardColumn: FC<BoardColumnProps> = memo(({ className, name, theme }) => (
  <div className={`w-72 ${className}`}>
    <BoardColumnHeader title={name} countTasks={1} theme={theme} />
    <ul className='space-y-3'>
      <TaskCard priority='0' />
      <TaskCard priority='1' />
      <TaskCard priority='2' />
    </ul>
  </div>
));
