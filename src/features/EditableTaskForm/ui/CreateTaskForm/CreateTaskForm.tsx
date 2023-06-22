/* eslint-disable react/jsx-props-no-spreading */
import { memo, FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useCreateTaskMutation } from '../../api/editableTaskApi';
import {
  getPriorityTypeOptions,
  getStatusTypeOptions,
  getTaskTypeOptions,
} from '../../lib/helpers/getOptions/getOptions';
import { CreateTaskFormSchema } from '../../model/types/editableTaskForm';

import { PriorityType, StatusType, TaskType } from '@/entities/Task';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';

export interface CreateTaskFormProps {
  className?: string;
  projectId?: string;
  cancelHandler?: () => void;
}

const CreateTaskForm: FC<CreateTaskFormProps> = memo(({ className, projectId, cancelHandler }) => {
  const { register, handleSubmit } = useForm<CreateTaskFormSchema>();

  const [create] = useCreateTaskMutation();

  const onSubmit: SubmitHandler<CreateTaskFormSchema> = async data => {
    if (projectId) {
      await create({ projectId, ...data });
      cancelHandler?.();
    }
  };

  return (
    <form className={`mb-3 space-y-5 ${className}`} onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-x-8'>
        <Input className='grow' label='Название' {...register('name')} />
        <Input label='Категория' {...register('category')} />
      </div>
      <Input label='Описание' {...register('description')} />
      <div className='flex gap-x-8'>
        <Input className='w-full' label='Автор' {...register('author')} />
        <Input className='w-full' label='Исполнитель' {...register('executor')} />
      </div>
      <div className='flex gap-x-8'>
        <Select<StatusType>
          label='Статус'
          options={getStatusTypeOptions()}
          {...register('status')}
        />
        <Select<TaskType> label='Тип' options={getTaskTypeOptions()} {...register('type')} />
        <Select<PriorityType>
          label='Приоритет'
          options={getPriorityTypeOptions()}
          {...register('priority')}
        />
      </div>
      <div className='flex justify-end space-x-2'>
        <Button type='submit' theme='success'>
          Сохранить
        </Button>
        <Button type='reset' theme='secondary' onClick={cancelHandler}>
          Отменить
        </Button>
      </div>
    </form>
  );
});

export default CreateTaskForm;
