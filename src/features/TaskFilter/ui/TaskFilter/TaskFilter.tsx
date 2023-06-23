import { memo, FC } from 'react';
import { useForm } from 'react-hook-form';

import { taskFilterActions } from '../../model/slices/taskFilterSlice';
import { TaskFilterSchema } from '../../model/types/taskFilterSchema';

import { useDebounce } from '@/shared/lib/helpers/useDebounce/useDebounce';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input';

interface TaskFilterProps {
  className?: string;
}

export const TaskFilter: FC<TaskFilterProps> = memo(({ className }) => {
  const { register, watch } = useForm<TaskFilterSchema>();

  const dispatch = useAppDispatch();

  const setName = () => {
    dispatch(taskFilterActions.setName(watch('search', '')));
  };

  useDebounce(setName, 800)();

  return (
    <form className={className}>
      <Input placeholder='Поиск' {...register('search')} />
    </form>
  );
});
