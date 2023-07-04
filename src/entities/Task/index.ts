import { useGetTaskListPageSearchQuery, useGetTaskListQuery } from './api/taskApi';
import { getPriorityTypeTaskName } from './lib/helpers/getPriorityTypeTaskName/getPriorityTypeTaskName';
import { getStatusTypeTaskName } from './lib/helpers/getStatusTypeTaskName/getStatusTypeTaskName';
import { getTaskTypeName } from './lib/helpers/getTaskTypeName/getTaskTypeName';
import { TaskCard } from './ui/TaskCard/TaskCard';

import type { TaskSchema, StatusType, TaskType, PriorityType } from './model/types/task';

export {
  useGetTaskListQuery,
  useGetTaskListPageSearchQuery,
  getStatusTypeTaskName,
  getPriorityTypeTaskName,
  getTaskTypeName,
  TaskCard,
  TaskSchema,
  StatusType,
  TaskType,
  PriorityType,
};
