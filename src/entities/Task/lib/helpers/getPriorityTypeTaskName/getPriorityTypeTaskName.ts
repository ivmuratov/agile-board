import { PriorityType } from '../../../model/types/task';

export const getPriorityTypeTaskName = (priorityType: PriorityType) => {
  switch (priorityType) {
    case '0':
      return 'Низкий';
    case '1':
      return 'Средний';
    case '2':
      return 'Высокий';
    default:
      return '';
  }
};
