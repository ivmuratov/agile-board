import { memo, FC } from 'react';

import { BoardColumnHeader } from '../BoardColumnHeader/BoardColumnHeader';

import type { BoardColumnHeaderTheme } from '../../model/types/projectBoard';

import { TaskCard, TaskSchema } from '@/entities/Task';

interface BoardColumnProps {
  className?: string;
  name: string;
  tasks?: TaskSchema[];
  theme: BoardColumnHeaderTheme;
}

export const BoardColumn: FC<BoardColumnProps> = memo(({ className, name, tasks, theme }) => {
  if (!tasks) {
    return null;
  }

  return (
    <div className={`w-72 ${className}`}>
      <BoardColumnHeader title={name} countTasks={tasks.length} theme={theme} />
      <ul className='space-y-3'>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            name={task.name}
            description={task.description}
            category={task.category}
            author={task.author}
            executor={task.executor}
            type={task.type}
            priority={task.priority}
          />
        ))}
      </ul>
    </div>
  );
});
