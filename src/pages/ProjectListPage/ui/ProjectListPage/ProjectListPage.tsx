import { FC } from 'react';

import { ProjectListHeader } from '../ProjectListHeader/ProjectListHeader';
import { ProjectListTable } from '../ProjectListTable/ProjectListTable';

import { useGetProjectListQuery } from '@/entities/Project';
import { CreateProjectModal } from '@/features/CreateProjectForm';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { EmptyTable } from '@/widgets/EmptyTable';

interface ProjectListPageProps {
  className?: string;
}

const ProjectListPage: FC<ProjectListPageProps> = ({ className }) => {
  const { data, isLoading } = useGetProjectListQuery();

  const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

  let content: JSX.Element | null = null;

  if (isLoading) {
    content = <div>... is loading</div>;
  } else if (data && data.length === 0) {
    content = (
      <EmptyTable
        title='Нет проектов Agile'
        buttonName='Создать проект'
        createRowHandler={openModalHandler}
      />
    );
  } else if (data && data.length !== 0) {
    content = <ProjectListTable projectList={data} />;
  }

  return (
    <main className={className}>
      <ProjectListHeader
        className='mb-5'
        projectList={data}
        createProjectHandler={openModalHandler}
      />
      {content}
      <CreateProjectModal isOpen={isOpenModal} onClose={closeModalHandler} />
    </main>
  );
};

export default ProjectListPage;
