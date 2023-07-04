import {
  PriorityType,
  StatusType,
  TaskType,
  getStatusTypeTaskName,
  getTaskTypeName,
  getPriorityTypeTaskName,
} from '@/entities/Task';
import { Option } from '@/shared/ui/Select';

export const getStatusTypeOptions = (): Option<StatusType>[] => [
  {
    value: 'to do',
    name: getStatusTypeTaskName('to do'),
  },
  {
    value: 'in progress',
    name: getStatusTypeTaskName('in progress'),
  },
  {
    value: 'in review',
    name: getStatusTypeTaskName('in review'),
  },
  {
    value: 'done',
    name: getStatusTypeTaskName('done'),
  },
];

export const getTaskTypeOptions = (): Option<TaskType>[] => [
  {
    value: 'task',
    name: getTaskTypeName('task'),
  },
  {
    value: 'error',
    name: getTaskTypeName('error'),
  },
];

export const getPriorityTypeOptions = (): Option<PriorityType>[] => [
  {
    value: '0',
    name: getPriorityTypeTaskName('0'),
  },
  {
    value: '1',
    name: getPriorityTypeTaskName('1'),
  },
  {
    value: '2',
    name: getPriorityTypeTaskName('2'),
  },
];
