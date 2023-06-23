import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ProjectTaskListTable } from '../ProjectTaskListTable/ProjectTaskListTable';

import { useGetTaskListQuery } from '@/entities/Task';
import { EditableTaskModal } from '@/features/EditableTaskForm';
import { getTaskFilterSearch } from '@/features/TaskFilter';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { AppParams } from '@/shared/types/route';

interface ProjectTaskListPageProps {
  className?: string;
}

const ProjectTaskListPage: FC<ProjectTaskListPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  const search = useSelector(getTaskFilterSearch);

  const { data, isLoading } = useGetTaskListQuery(
    { projectId: projectId ?? '1', search },
    {
      refetchOnMountOrArgChange: true,
    },
  );

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
