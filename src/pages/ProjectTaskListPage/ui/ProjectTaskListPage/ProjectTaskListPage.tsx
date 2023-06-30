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
import { EmptyTable } from '@/widgets/EmptyTable';
import { TaskListHeader } from '@/widgets/TaskListHeader';

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

  if (isLoading) {
    return <div>... is loading</div>;
  }

  if (data && data.taskList.length === 0 && search === '') {
    return (
      <EmptyTable
        title='Нет задач в проекте'
        buttonName='Создать задачу'
        createRowHandler={openModalHandler}
      />
    );
  }

  if (data && data.taskList.length === 0 && search !== '') {
    return (
      <Fragment>
        <TaskListHeader className='mb-5' createTaskHandler={openModalHandler} />
        <h2 className='pt-8 text-center text-3xl'>Ничего не найдено</h2>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <TaskListHeader className='mb-5' createTaskHandler={openModalHandler} />
      {data && data.taskList.length !== 0 && (
        <ProjectTaskListTable
          projectId={projectId}
          taskList={data.taskList}
          currentpage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          nextPageHandler={nextPageHandler}
          prevPageHandler={prevPageHandler}
        />
      )}
      <EditableTaskModal projectId={projectId} isOpen={isOpenModal} onClose={closeModalHandler} />
    </Fragment>
  );
};

export default ProjectTaskListPage;
