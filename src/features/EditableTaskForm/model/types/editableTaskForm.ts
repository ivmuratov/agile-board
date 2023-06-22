import { PriorityType, StatusType, TaskType } from '@/entities/Task';

export interface CreateTaskFormSchema {
  name: string;
  description?: string;
  category?: string;
  author: string;
  executor?: string;
  status: StatusType;
  type: TaskType;
  priority: PriorityType;
}

export interface EditTaskFormSchema {
  name?: string;
  description?: string;
  category?: string;
  executor?: string;
  status?: StatusType;
  priority?: PriorityType;
}
