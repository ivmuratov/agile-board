import { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ProjectTaskListTable } from '../ProjectTaskListTable/ProjectTaskListTable';

import { useGetTaskListPageSearchQuery, useGetTaskListQuery } from '@/entities/Task';
import { EditableTaskModal } from '@/features/EditableTaskForm';
import { getTaskListFilterSearch } from '@/features/TaskListFilter';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { usePagination } from '@/shared/lib/hooks/usePagination/usePagination';
import { AppParams } from '@/shared/types/route';

const LIMIT = 10;

const ProjectTaskListPage: FC = () => {
  const { projectId } = useParams<AppParams>();

  const search = useSelector(getTaskListFilterSearch);

  const { data: allTasks } = useGetTaskListQuery(
    { projectId: projectId ?? '1', search },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const { page, totalPages, setPage, prevPageHandler, nextPageHandler } = usePagination(
    allTasks?.length ?? 0,
    LIMIT,
  );

  const { data, isLoading } = useGetTaskListPageSearchQuery(
    { projectId: projectId ?? '1', search, page, limit: LIMIT },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

  return (
    <Fragment>
      <ProjectTaskListTable
        projectId={projectId}
        data={data}
        isLoading={isLoading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
        openCreateModalHandler={openModalHandler}
      />
      <EditableTaskModal projectId={projectId} isOpen={isOpenModal} onClose={closeModalHandler} />
    </Fragment>
  );
};

export default ProjectTaskListPage;
