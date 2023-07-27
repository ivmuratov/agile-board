import { memo, FC } from 'react';

import { Button } from '@/shared/ui/Button';

interface ProjectListHeaderProps {
  className?: string;
  isEmptyProjectList: boolean;
  createProjectHandler: () => void;
}

export const ProjectListHeader: FC<ProjectListHeaderProps> = memo(
  ({ className, isEmptyProjectList, createProjectHandler }) => (
    <header className={`flex justify-between ${className}`}>
      <h3 className='text-2xl'>Список проектов</h3>
      {!isEmptyProjectList && <Button onClick={createProjectHandler}>Создать проект</Button>}
    </header>
  ),
);
