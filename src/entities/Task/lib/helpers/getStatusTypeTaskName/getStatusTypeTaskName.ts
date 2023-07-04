import { StatusType } from '../../../model/types/task';

export const getStatusTypeTaskName = (statusType: StatusType) => {
  switch (statusType) {
    case 'to do':
      return 'Сделать';
    case 'in progress':
      return 'В процессе';
    case 'in review':
      return 'На проверке';
    case 'done':
      return 'Принято';
    default:
      return '';
  }
};
