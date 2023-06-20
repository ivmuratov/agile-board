import { FC } from 'react';

import { useGetProjectListQuery } from '../../api/projectListApi';
import { ProjectListTable } from '../ProjectListTable/ProjectListTable';

import { CreateProjectModal } from '@/features/CreateProjectForm';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Button } from '@/shared/ui/Button';

interface ProjectListPageProps {
  className?: string;
}

const ProjectListPage: FC<ProjectListPageProps> = ({ className }) => {
  const { data, isLoading } = useGetProjectListQuery();

  const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

  return (
    <main className={className}>
      <header className='mb-5 flex justify-between'>
        <h3 className='text-2xl'>Список проектов</h3>
        {data && data.length !== 0 && <Button onClick={openModalHandler}>Создать проект</Button>}
      </header>
      <ProjectListTable isLoading={isLoading} data={data} openModal={openModalHandler} />
      <CreateProjectModal isOpen={isOpenModal} onClose={closeModalHandler} />
    </main>
  );
};

export default ProjectListPage;
