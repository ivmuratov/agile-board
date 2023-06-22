import { PriorityType, StatusType, TaskType } from '@/entities/Task';
import { Option } from '@/shared/ui/Select';

export const getStatusTypeOptions = (): Option<StatusType>[] => [
  {
    value: 'to do',
    name: 'Сделать',
  },
  {
    value: 'in progress',
    name: 'В процессе',
  },
  {
    value: 'in review',
    name: 'На проверке',
  },
  {
    value: 'done',
    name: 'Принято',
  },
];

export const getTaskTypeOptions = (): Option<TaskType>[] => [
  {
    value: 'task',
    name: 'Задача',
  },
  {
    value: 'error',
    name: 'Ошибка',
  },
];

export const getPriorityTypeOptions = (): Option<PriorityType>[] => [
  {
    value: '0',
    name: 'Низкий',
  },
  {
    value: '1',
    name: 'Средний',
  },
  {
    value: '2',
    name: 'Высокий',
  },
];
