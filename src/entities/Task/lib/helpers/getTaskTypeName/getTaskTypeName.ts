import { TaskType } from '../../../model/types/task';

export const getTaskTypeName = (taskType: TaskType) => {
  switch (taskType) {
    case 'task':
      return 'Задача';
    case 'error':
      return 'Ошибка';
    default:
      return '';
  }
};
