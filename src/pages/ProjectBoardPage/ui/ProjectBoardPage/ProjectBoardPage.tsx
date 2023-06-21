import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { BoardColumn } from '../BoardColumn/BoardColumn';

import { useGetTaskListQuery } from '@/entities/Task';
import { AppParams } from '@/shared/types/route';

interface ProjectBoardPageProps {
  className?: string;
}

const ProjectBoardPage: FC<ProjectBoardPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  const { data, isLoading } = useGetTaskListQuery(projectId ?? skipToken);

  const toDoTasks = useMemo(() => data?.filter(task => task.status === 'to do'), [data]);

  const inProgressTasks = useMemo(
    () => data?.filter(task => task.status === 'in progress'),
    [data],
  );

  const inReviewTasks = useMemo(() => data?.filter(task => task.status === 'in review'), [data]);

  const doneTasks = useMemo(() => data?.filter(task => task.status === 'done'), [data]);

  return (
    <div className={`flex flex-wrap space-x-4 ${className}`}>
      <BoardColumn name='Сделать' tasks={toDoTasks} theme='blue' />
      <BoardColumn name='В процессе' tasks={inProgressTasks} theme='yellow' />
      <BoardColumn name='На проверке' tasks={inReviewTasks} theme='purple' />
      <BoardColumn name='Принято' tasks={doneTasks} theme='green' />
    </div>
  );
};

export default ProjectBoardPage;
