/* eslint-disable react/jsx-props-no-spreading */
import { memo, FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useCreateTaskMutation } from '../../api/createTaskApi';
import { CreateTaskFormSchema } from '../../model/types/createTaskForm';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

export interface CreateTaskFormProps {
  projectId?: string;
  cancelHandler?: () => void;
}

const CreateTaskForm: FC<CreateTaskFormProps> = memo(({ projectId, cancelHandler }) => {
  const { register, handleSubmit } = useForm<CreateTaskFormSchema>();

  const [create] = useCreateTaskMutation();

  const onSubmit: SubmitHandler<CreateTaskFormSchema> = async data => {
    if (projectId) {
      await create({ projectId, createdDate: new Date().toLocaleDateString(), ...data });
      cancelHandler?.();
    }
  };

  return (
    <form className='mb-3 space-y-5' onSubmit={handleSubmit(onSubmit)}>
      <Input label='Название' {...register('name')} />
      <Input label='Описание' {...register('description')} />
      <Input label='Категория' {...register('category')} />
      <Input label='Автор' {...register('author')} />
      <Input label='Исполнитель' {...register('executor')} />
      <Input label='Статус' {...register('status')} />
      <Input label='Тип' {...register('type')} />
      <Input label='Приоритет' {...register('priority')} />
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
