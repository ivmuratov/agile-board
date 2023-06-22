import { memo, FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useEditTaskMutation } from '../../api/editableTaskApi';
import {
  getStatusTypeOptions,
  getPriorityTypeOptions,
} from '../../lib/helpers/getOptions/getOptions';
import { getEditTaskForm } from '../../model/selectors/editTaskFormSelectors';
import { EditTaskFormSchema } from '../../model/types/editableTaskForm';

import { StatusType, PriorityType } from '@/entities/Task';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';

export interface EditTaskFormProps {
  className?: string;
  projectId?: string;
  taskId: string;
  cancelHandler?: () => void;
}

const EditTaskForm: FC<EditTaskFormProps> = memo(
  ({ className, projectId, taskId, cancelHandler }) => {
    const editForm = useSelector(getEditTaskForm);

    const { register, handleSubmit, reset } = useForm<EditTaskFormSchema>({
      defaultValues: editForm,
    });

    const [edit] = useEditTaskMutation();

    const onSubmit: SubmitHandler<EditTaskFormSchema> = async data => {
      if (projectId) {
        await edit({ projectId, id: taskId, ...data });
        cancelHandler?.();
      }
    };

    useEffect(() => {
      reset(editForm);
    }, [editForm, reset]);

    return (
      <form className={`mb-3 space-y-5 ${className}`} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-x-8'>
          <Input className='grow' label='Название' {...register('name')} />
          <Input label='Категория' {...register('category')} />
        </div>
        <Input label='Описание' {...register('description')} />
        <Input className='w-full' label='Исполнитель' {...register('executor')} />
        <div className='flex gap-x-8'>
          <Select<StatusType>
            label='Статус'
            options={getStatusTypeOptions()}
            {...register('status')}
          />
          <Select<PriorityType>
            label='Приоритет'
            options={getPriorityTypeOptions()}
            {...register('priority')}
          />
        </div>
        <div className='flex justify-end space-x-2'>
          <Button type='submit' theme='success'>
            Обновить
          </Button>
        </div>
      </form>
    );
  },
);

export default EditTaskForm;
