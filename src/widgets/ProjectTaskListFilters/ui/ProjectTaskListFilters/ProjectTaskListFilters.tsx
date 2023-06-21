import { memo, FC } from 'react';

import { Button } from '@/shared/ui/Button';

interface ProjectTaskListFiltersProps {
  className?: string;
  createTaskHandler: () => void;
}

export const ProjectTaskListFilters: FC<ProjectTaskListFiltersProps> = memo(
  ({ className, createTaskHandler }) => (
    <div className={`flex items-center justify-between ${className}`}>
      <div>Поиск</div>
      <Button onClick={createTaskHandler}>Создать задачу</Button>
    </div>
  ),
);
