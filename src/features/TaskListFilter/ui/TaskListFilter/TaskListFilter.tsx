import { memo, FC } from 'react';
import { useForm } from 'react-hook-form';

import { taskListFilterActions } from '../../model/slices/taskListFilterSlice';
import { TaskListFilterSchema } from '../../model/types/taskListFilterSchema';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { Input } from '@/shared/ui/Input';

interface TaskListFilterProps {
  className?: string;
}

export const TaskListFilter: FC<TaskListFilterProps> = memo(({ className }) => {
  const { register, watch } = useForm<TaskListFilterSchema>();

  const dispatch = useAppDispatch();

  const setName = () => {
    dispatch(taskListFilterActions.setName(watch('search', '')));
  };

  useDebounce(setName, 600);

  return <Input className={className} placeholder='Поиск' {...register('search')} />;
});
