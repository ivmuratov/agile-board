import { FC } from 'react';

import { getWordTask } from '../../utils/getWordTask';

export enum AgileColumnHeaderTheme {
  BLUE = 'blue',
  YELLOW = 'yellow',
  PURPLE = 'purple',
  GREEN = 'green',
}

const themes: Record<AgileColumnHeaderTheme, string> = {
  blue: 'border-l-blue-500 bg-blue-200/50',
  yellow: 'border-l-yellow-500 bg-yellow-200/50',
  purple: 'border-l-purple-500 bg-purple-200/50',
  green: 'border-l-green-500 bg-green-200/50',
};

interface AgileColumnHeaderProps {
  title: string;
  countTasks: number;
  theme: AgileColumnHeaderTheme;
}

const AgileColumnHeader: FC<AgileColumnHeaderProps> = ({ title, countTasks, theme }) => (
  <header
    className={`mb-6 rounded border border-l-4 border-gray-300/50 ${themes[theme]} px-4 py-2`}
  >
    <h3 className='text-lg font-medium text-gray-800'>{title}</h3>
    <p className='text-sm opacity-60'>
      {countTasks} {getWordTask(countTasks)}
    </p>
  </header>
);

export default AgileColumnHeader;
