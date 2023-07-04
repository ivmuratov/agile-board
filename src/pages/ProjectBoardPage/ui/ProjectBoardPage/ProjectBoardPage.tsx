import { FC, useMemo } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';

import { BoardColumn } from '../BoardColumn/BoardColumn';

import { useGetTaskListQuery } from '@/entities/Task';
import { AppParams } from '@/shared/types/route';

interface ProjectBoardPageProps {
  className?: string;
}

const ProjectBoardPage: FC<ProjectBoardPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  const { data, isLoading } = useGetTaskListQuery({ projectId: projectId ?? '1' });

  const toDoTasks = useMemo(() => data?.filter(task => task.status === 'to do'), [data]);

  const inProgressTasks = useMemo(
    () => data?.filter(task => task.status === 'in progress'),
    [data],
  );

  const inReviewTasks = useMemo(() => data?.filter(task => task.status === 'in review'), [data]);

  const doneTasks = useMemo(() => data?.filter(task => task.status === 'done'), [data]);

  return (
    <div className={`flex flex-wrap space-x-4 ${className}`}>
      <DragDropContext onDragEnd={() => console.log('drag end')}>
        <BoardColumn statusTypeTask='to do' tasks={toDoTasks} theme='blue' />
        <BoardColumn statusTypeTask='in progress' tasks={inProgressTasks} theme='yellow' />
        <BoardColumn statusTypeTask='in review' tasks={inReviewTasks} theme='purple' />
        <BoardColumn statusTypeTask='done' tasks={doneTasks} theme='green' />
      </DragDropContext>
    </div>
  );
};

export default ProjectBoardPage;
