import { StatusType } from '@/entities/Task';

export const isAllowedMoveTask = (fromStatus: StatusType, toStatus: StatusType) => {
  if (fromStatus === toStatus) return false;

  if (fromStatus === 'done') return false;

  return true;
};
