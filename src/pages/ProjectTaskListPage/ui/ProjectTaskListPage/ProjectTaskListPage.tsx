import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ProjectTaskListTable } from '../ProjectTaskListTable/ProjectTaskListTable';

import { useGetTaskListQuery } from '@/entities/Task';
import { EditableTaskModal } from '@/features/EditableTaskForm';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { AppParams } from '@/shared/types/route';

interface ProjectTaskListPageProps {
  className?: string;
}

const ProjectTaskListPage: FC<ProjectTaskListPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  const { data, isLoading } = useGetTaskListQuery(projectId ?? skipToken, {
    refetchOnMountOrArgChange: true,
  });

  const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

  return (
    <div className={className}>
      <ProjectTaskListTable
        projectId={projectId}
        data={data}
        isLoading={isLoading}
        openCreateModalHandler={openModalHandler}
      />
      <EditableTaskModal projectId={projectId} isOpen={isOpenModal} onClose={closeModalHandler} />
    </div>
  );
};

export default ProjectTaskListPage;
