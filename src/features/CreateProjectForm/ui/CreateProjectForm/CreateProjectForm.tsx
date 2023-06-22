/* eslint-disable react/jsx-props-no-spreading */
import { memo, FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useCreateProjectMutation } from '../../api/createProjectApi';
import { CreateProjectFormSchema } from '../../model/types/createProjectForm';

import { getAppRouteProject } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

export interface CreateProjectFormProps {
  cancelHandler?: () => void;
}

const CreateProjectForm: FC<CreateProjectFormProps> = memo(({ cancelHandler }) => {
  const { register, handleSubmit } = useForm<CreateProjectFormSchema>();

  const navigate = useNavigate();

  const [createProject] = useCreateProjectMutation();

  const onSubmit: SubmitHandler<CreateProjectFormSchema> = async data => {
    const created = await createProject(data).unwrap();

    if (created) {
      navigate(getAppRouteProject(created.id));
    }
  };

  return (
    <form className='mb-3 space-y-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-x-8'>
        <Input
          className='grow'
          label='Название'
          textHelper='Краткое название проекта'
          {...register('name')}
        />
        <Input label='Уникальный префикс' textHelper='Например "ABC"' {...register('prefix')} />
      </div>
      <Input label='Описание' {...register('description')} />
      <Input label='Менеджер проекта' {...register('manager')} />
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

export default CreateProjectForm;
