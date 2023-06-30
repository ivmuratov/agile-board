import { FC, Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ProjectTaskListTable } from '../ProjectTaskListTable/ProjectTaskListTable';

import { useGetTaskListPageSearchQuery } from '@/entities/Task';
import { EditableTaskModal } from '@/features/EditableTaskForm';
import { getTaskListFilterSearch } from '@/features/TaskListFilter';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { usePagination } from '@/shared/lib/hooks/usePagination/usePagination';
import { AppParams } from '@/shared/types/route';

const LIMIT = 10;

const ProjectTaskListPage: FC = () => {
  const { projectId } = useParams<AppParams>();

  const search = useSelector(getTaskListFilterSearch);

  const [totalCount, setTotalCount] = useState<number | undefined>();

  const { currentPage, totalPages, setCurrentPage, prevPageHandler, nextPageHandler } =
    usePagination(totalCount ?? 0, LIMIT);

  const { data, isLoading } = useGetTaskListPageSearchQuery(
    {
      projectId: projectId ?? '1',
      search,
      page: currentPage,
      limit: LIMIT,
    },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  useEffect(() => {
    setTotalCount(data?.totalCount);
  }, [data?.totalCount]);

  const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

  return (
    <Fragment>
      <ProjectTaskListTable
        projectId={projectId}
        data={data?.data}
        isLoading={isLoading}
        currentpage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
        openCreateModalHandler={openModalHandler}
      />
      <EditableTaskModal projectId={projectId} isOpen={isOpenModal} onClose={closeModalHandler} />
    </Fragment>
  );
};

export default ProjectTaskListPage;
