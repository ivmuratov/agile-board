import { memo, FC } from 'react';

import type { BoardColumnHeaderTheme } from '../../model/types/projectBoard';

import { getWordByCountTasks } from '@/shared/lib/helpers/getWordByCountTasks/getWordByCountTasks';

const themes: Record<BoardColumnHeaderTheme, string> = {
  blue: 'border-l-blue-500 bg-blue-200/50',
  yellow: 'border-l-yellow-500 bg-yellow-200/50',
  purple: 'border-l-purple-500 bg-purple-200/50',
  green: 'border-l-green-500 bg-green-200/50',
};

interface BoardColumnHeaderProps {
  className?: string;
  title: string;
  countTasks: number;
  theme: BoardColumnHeaderTheme;
}

export const BoardColumnHeader: FC<BoardColumnHeaderProps> = memo(
  ({ className, title, countTasks, theme }) => (
    <header
      className={`mb-6 rounded border border-l-4 border-gray-300/50 ${themes[theme]} px-4 py-2 ${className}`}
    >
      <h3 className='text-lg font-medium text-gray-800'>{title}</h3>
      <p className='text-sm opacity-60'>
        {countTasks} {getWordByCountTasks(countTasks)}
      </p>
    </header>
  ),
);
