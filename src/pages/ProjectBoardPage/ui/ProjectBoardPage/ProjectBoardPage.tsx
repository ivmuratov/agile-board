import { FC, useMemo } from 'react';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';

import { usePatchTaskMutation } from '../../api/patchTaskApi';
import { BoardColumn } from '../BoardColumn/BoardColumn';

import { StatusType, useGetTaskListQuery } from '@/entities/Task';
import { AppParams } from '@/shared/types/route';

interface ProjectBoardPageProps {
  className?: string;
}

const ProjectBoardPage: FC<ProjectBoardPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  const { data, isLoading } = useGetTaskListQuery({ projectId: projectId ?? '1' });

  const [patchTask, resultTask] = usePatchTaskMutation();

  const toDoTasks = useMemo(() => data?.filter(task => task.status === 'to do'), [data]);

  const inProgressTasks = useMemo(
    () => data?.filter(task => task.status === 'in progress'),
    [data],
  );

  const inReviewTasks = useMemo(() => data?.filter(task => task.status === 'in review'), [data]);

  const doneTasks = useMemo(() => data?.filter(task => task.status === 'done'), [data]);

  const dragEndHandler: OnDragEndResponder = async result => {
    if (projectId) {
      const taskId = result.draggableId;
      const fromStatus = result.source.droppableId as StatusType;
      const toStatus = result.destination?.droppableId as StatusType;

      if (fromStatus !== toStatus) {
        const response = await patchTask({
          id: taskId,
          projectId,
          status: toStatus,
        }).unwrap();
        console.log(response);
      }
    }
  };

  return (
    <div className={`flex flex-wrap space-x-4 ${className}`}>
      <DragDropContext onDragEnd={dragEndHandler}>
        <BoardColumn statusTypeTask='to do' tasks={toDoTasks} headerTheme='blue' />
        <BoardColumn statusTypeTask='in progress' tasks={inProgressTasks} headerTheme='yellow' />
        <BoardColumn statusTypeTask='in review' tasks={inReviewTasks} headerTheme='purple' />
        <BoardColumn statusTypeTask='done' tasks={doneTasks} headerTheme='green' />
      </DragDropContext>
    </div>
  );
};

export default ProjectBoardPage;
