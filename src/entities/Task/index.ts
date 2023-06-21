import { useGetTaskListQuery } from './api/taskApi';
import { TaskCard } from './ui/TaskCard/TaskCard';

import type { TaskSchema, StatusType } from './model/types/task';

export { useGetTaskListQuery, TaskCard, TaskSchema, StatusType };
