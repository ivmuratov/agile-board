import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProjectTaskListQuery } from '../../api/projectTaskListApi';
import { ProjectTaskListTable } from '../ProjectTaskListTable/ProjectTaskListTable';

import { CreateTaskModal } from '@/features/CreateTaskForm';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { AppParams } from '@/shared/types/route';

interface ProjectTaskListPageProps {
  className?: string;
}

const ProjectTaskListPage: FC<ProjectTaskListPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  const { data, isLoading } = useGetProjectTaskListQuery(projectId ?? skipToken);

  const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

  return (
    <div className={className}>
      <ProjectTaskListTable data={data} isLoading={isLoading} openModal={openModalHandler} />
      <CreateTaskModal isOpen={isOpenModal} onClose={closeModalHandler} />
    </div>
  );
};

export default ProjectTaskListPage;
