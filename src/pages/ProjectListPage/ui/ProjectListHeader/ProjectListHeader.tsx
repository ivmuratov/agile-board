import { memo, FC } from 'react';

import { ProjectSchema } from '@/entities/Project';
import { Button } from '@/shared/ui/Button';

interface ProjectListHeaderProps {
  className?: string;
  projectList?: ProjectSchema[];
  createProjectHandler: () => void;
}

export const ProjectListHeader: FC<ProjectListHeaderProps> = memo(
  ({ className, projectList, createProjectHandler }) => (
    <header className={`flex justify-between ${className}`}>
      <h3 className='text-2xl'>Список проектов</h3>
      {projectList && projectList.length !== 0 && (
        <Button onClick={createProjectHandler}>Создать проект</Button>
      )}
    </header>
  ),
);
