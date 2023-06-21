export type StatusType = 'to do' | 'in progress' | 'in review' | 'done';

export type TaskType = 'task' | 'error';

export type PriorityType = '0' | '1' | '2';

export interface TaskSchema {
  id: string;
  name: string;
  description?: string;
  category?: string;
  author: string;
  executor?: string;
  createdDate: string;
  updatedDate?: string;
  finishedDate?: string;
  status: StatusType;
  type: TaskType;
  priority: PriorityType;
}
