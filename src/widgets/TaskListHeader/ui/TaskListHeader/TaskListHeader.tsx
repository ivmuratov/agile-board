import { memo, FC } from 'react';

import { TaskListFilter } from '@/features/TaskListFilter';
import { Button } from '@/shared/ui/Button';

interface TaskListHeaderProps {
  className?: string;
  createTaskHandler: () => void;
}

export const TaskListHeader: FC<TaskListHeaderProps> = memo(({ className, createTaskHandler }) => (
  <div className={`flex items-center justify-between ${className}`}>
    <TaskListFilter />
    <Button onClick={createTaskHandler}>Создать задачу</Button>
  </div>
));
