/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react';

import { StatusType, TaskSchema } from '@/entities/Task';

type GroupTasks = Partial<Record<StatusType, TaskSchema[]>>;

export const useSplitTasks = (tasks?: TaskSchema[]) => {
  const [tasksState, setTasksState] = useState<GroupTasks>({});

  const moveTask = (draggableId: string, fromStatus: StatusType, toStatus: StatusType) => {
    const fromTasks = tasksState[fromStatus];
    const toTasks = tasksState[toStatus];

    const moveTask = tasksState[fromStatus]?.find(task => task.id == draggableId);

    if (moveTask && toTasks && fromTasks) {
      setTasksState(prev => ({
        ...prev,
        [fromStatus]: [...fromTasks.filter(task => task.id != draggableId)],
        [toStatus]: [...toTasks, moveTask],
      }));
    }
  };

  useEffect(() => {
    setTasksState({
      'to do': tasks?.filter(task => task.status === 'to do'),
      'in progress': tasks?.filter(task => task.status === 'in progress'),
      'in review': tasks?.filter(task => task.status === 'in review'),
      done: tasks?.filter(task => task.status === 'done'),
    });
  }, [tasks]);

  return {
    toDoTasks: tasksState['to do'],
    inProgressTasks: tasksState['in progress'],
    inReviewTasks: tasksState['in review'],
    doneTasks: tasksState.done,
    moveTask,
  };
};
