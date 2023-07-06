import { FC } from 'react';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';

import { usePatchTaskMutation } from '../../api/patchTaskApi';
import { isAllowedMoveTask } from '../../lib/helpers/isAllowedMoveTask/isAllowedMoveTask';
import { useSplitTasks } from '../../lib/hooks/useSplitTasks/useSplitTasks';
import { BoardColumn } from '../BoardColumn/BoardColumn';

import { StatusType, useGetTaskListQuery } from '@/entities/Task';
import { AppParams } from '@/shared/types/route';

interface ProjectBoardPageProps {
  className?: string;
}

const ProjectBoardPage: FC<ProjectBoardPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  const { data, isLoading } = useGetTaskListQuery({ projectId: projectId ?? '1' });

  const { toDoTasks, inProgressTasks, inReviewTasks, doneTasks, moveTask } = useSplitTasks(data);

  const [patchTask] = usePatchTaskMutation();

  const dragEndHandler: OnDragEndResponder = ({ draggableId, source, destination }) => {
    if (projectId && destination) {
      const taskId = draggableId;
      const fromStatus = source.droppableId as StatusType;
      const toStatus = destination.droppableId as StatusType;

      if (isAllowedMoveTask(fromStatus, toStatus)) {
        moveTask(taskId, fromStatus, toStatus);
        patchTask({
          id: taskId,
          projectId,
          status: toStatus,
        });
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
