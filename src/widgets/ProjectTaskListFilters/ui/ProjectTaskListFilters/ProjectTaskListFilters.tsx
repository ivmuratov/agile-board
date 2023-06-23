import { memo, FC } from 'react';

import { TaskFilter } from '@/features/TaskFilter';
import { Button } from '@/shared/ui/Button';

interface ProjectTaskListFiltersProps {
  className?: string;
  createTaskHandler: () => void;
}

export const ProjectTaskListFilters: FC<ProjectTaskListFiltersProps> = memo(
  ({ className, createTaskHandler }) => (
    <div className={`flex items-center justify-between ${className}`}>
      <TaskFilter />
      <Button onClick={createTaskHandler}>Создать задачу</Button>
    </div>
  ),
);
