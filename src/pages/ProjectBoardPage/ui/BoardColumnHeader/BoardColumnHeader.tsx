import { memo, FC } from 'react';

import { StatusType, getStatusTypeTaskName } from '@/entities/Task';
import { getWordByCountTasks } from '@/shared/lib/helpers/getWordByCountTasks/getWordByCountTasks';

const themes: Record<StatusType, string> = {
  'to do': 'border-l-blue-500 bg-blue-200/50',
  'in progress': 'border-l-yellow-500 bg-yellow-200/50',
  'in review': 'border-l-purple-500 bg-purple-200/50',
  done: 'border-l-green-500 bg-green-200/50',
};

interface BoardColumnHeaderProps {
  className?: string;
  title: StatusType;
  countTasks: number;
}

export const BoardColumnHeader: FC<BoardColumnHeaderProps> = memo(
  ({ className, title, countTasks }) => (
    <header
      className={`mb-6 rounded border border-l-4 border-gray-300/50 ${themes[title]} px-4 py-2 ${className}`}
    >
      <h3 className='text-lg font-medium text-gray-800'>{getStatusTypeTaskName(title)}</h3>
      <p className='text-sm opacity-60'>
        {countTasks} {getWordByCountTasks(countTasks)}
      </p>
    </header>
  ),
);
