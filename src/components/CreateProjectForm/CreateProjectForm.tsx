import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import ICreateProject from '../../models/ICreateProject';
import Button, { ButtonTheme } from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

interface CreateProjectFormProps {
  setInactiveModal?: () => void;
}

const CreateProjectForm: FC<CreateProjectFormProps> = ({ setInactiveModal }) => {
  const { register, handleSubmit } = useForm<ICreateProject>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<ICreateProject> = data => console.log(data);

  return (
    <form className='mb-3 space-y-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex justify-between space-x-8'>
        <div className='grow'>
          <Input label='Название' textHelper='Краткое название проекта' {...register('name')} />
        </div>
        <Input label='Уникальный префикс' textHelper='Например "ABC"' {...register('prefix')} />
      </div>
      <Input label='Описание' {...register('description')} />
      <Input label='Менеджер проекта' {...register('manager')} />
      <div className='flex justify-end space-x-2'>
        <Button type='submit' theme={ButtonTheme.SUCCESS}>
          Сохранить
        </Button>
        <Button type='reset' theme={ButtonTheme.SECONDARY} onClick={setInactiveModal}>
          Отменить
        </Button>
      </div>
    </form>
  );
};

export default CreateProjectForm;
