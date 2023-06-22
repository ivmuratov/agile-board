/* eslint-disable react/jsx-props-no-spreading */
import { memo, FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useCreateTaskMutation } from '../../api/createTaskApi';
import { CreateTaskFormSchema } from '../../model/types/createTaskForm';

import { PriorityType, StatusType, TaskType } from '@/entities/Task';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Option, Select } from '@/shared/ui/Select';

const statusOptions: Option<StatusType>[] = [
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

const typeOptions: Option<TaskType>[] = [
  {
    value: 'task',
    name: 'Задача',
  },
  {
    value: 'error',
    name: 'Ошибка',
  },
];

const priorityOptions: Option<PriorityType>[] = [
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

export interface CreateTaskFormProps {
  projectId?: string;
  cancelHandler?: () => void;
}

const CreateTaskForm: FC<CreateTaskFormProps> = memo(({ projectId, cancelHandler }) => {
  const { register, handleSubmit } = useForm<CreateTaskFormSchema>();

  const [create] = useCreateTaskMutation();

  const onSubmit: SubmitHandler<CreateTaskFormSchema> = async data => {
    /* if (projectId) {
      await create({ projectId, createdDate: new Date().toLocaleDateString(), ...data });
      cancelHandler?.();
    } */
    console.log(data);
  };

  return (
    <form className='mb-3 space-y-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-x-8'>
        <Input className='grow' label='Название' {...register('name')} />
        <Input label='Категория' {...register('category')} />
      </div>
      <Input label='Описание' {...register('description')} />
      <div className='flex items-center gap-x-14'>
        <div className='flex w-full flex-col gap-y-7'>
          <Select<StatusType>
            label='Выберите статус'
            options={statusOptions}
            {...register('status')}
          />
          <Select<TaskType> label='Выберите тип' options={typeOptions} {...register('type')} />
          <Select<PriorityType>
            label='Выберите приоритет'
            options={priorityOptions}
            {...register('priority')}
          />
        </div>
        <div className='flex w-full flex-col'>
          <Input label='Автор' {...register('author')} />
          <Input label='Исполнитель' {...register('executor')} />
        </div>
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
