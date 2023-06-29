import { useGetTaskListPageSearchQuery, useGetTaskListQuery } from './api/taskApi';
import { TaskCard } from './ui/TaskCard/TaskCard';

import type { TaskSchema, StatusType, TaskType, PriorityType } from './model/types/task';

export {
  useGetTaskListQuery,
  useGetTaskListPageSearchQuery,
  TaskCard,
  TaskSchema,
  StatusType,
  TaskType,
  PriorityType,
};
