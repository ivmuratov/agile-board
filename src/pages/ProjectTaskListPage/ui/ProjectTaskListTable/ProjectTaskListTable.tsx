import { memo, FC, useMemo, Fragment, useState } from 'react';

import { TaskSchema } from '@/entities/Task';
import {
  EditTaskFormSchema,
  EditableTaskModal,
  editTaskFormActions,
} from '@/features/EditableTaskForm';
import EditIcon from '@/shared/assets/edit.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { IconButton } from '@/shared/ui/IconButton';
import { Table, TableColumn, TableRow } from '@/shared/ui/Table';
import { EmptyTable } from '@/widgets/EmptyTable';
import { PaginationContainer } from '@/widgets/PaginationContainer';
import { TaskListHeader } from '@/widgets/TaskListHeader';

const columns: TableColumn[] = [
  {
    value: 'Название',
  },
  {
    value: 'Категория',
  },
  {
    value: 'Тип',
  },
  {
    value: 'Приоритет',
  },
  {
    value: 'Статус',
  },
  {
    value: 'Автор',
  },
  {
    value: 'Исполнитель',
  },
  {
    value: 'Создана',
  },
  {
    value: 'Изменена',
  },
  {
    value: 'Завершена',
  },
  {
    value: '',
  },
];

interface ProjectTaskListTableProps {
  className?: string;
  projectId?: string;
  isLoading: boolean;
  data?: TaskSchema[];
  currentpage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  prevPageHandler: () => void;
  nextPageHandler: () => void;
  openCreateModalHandler: () => void;
}

export const ProjectTaskListTable: FC<ProjectTaskListTableProps> = memo(
  ({
    className,
    projectId,
    isLoading,
    data,
    currentpage,
    totalPages,
    setCurrentPage,
    prevPageHandler,
    nextPageHandler,
    openCreateModalHandler,
  }) => {
    const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

    const dispatch = useAppDispatch();

    const [taskId, setTaskId] = useState<string | undefined>(undefined);

    const openEditModalHandler = (id: string, editTask: EditTaskFormSchema) => () => {
      setTaskId(id);
      dispatch(editTaskFormActions.setEditForm(editTask));
      openModalHandler();
    };

    const rows: TableRow[] | undefined = useMemo(
      () =>
        data?.map(task => ({
          id: task.id,
          items: [
            {
              keyId: '0',
              value: task.name,
            },
            {
              keyId: '1',
              value: task.category || '-',
            },
            {
              keyId: '2',
              value: task.type,
            },
            {
              keyId: '3',
              value: task.priority,
            },
            {
              keyId: '4',
              value: task.status,
            },
            {
              keyId: '5',
              value: task.author,
            },
            {
              keyId: '6',
              value: task.executor || '-',
            },
            {
              keyId: '7',
              value: task.createdDate,
            },
            {
              keyId: '8',
              value: task.updatedDate || '-',
            },
            {
              keyId: '9',
              value: task.finishedDate || '-',
            },
            {
              keyId: '10',
              value: (
                <IconButton
                  Svg={EditIcon}
                  onClick={openEditModalHandler(task.id, {
                    name: task.name,
                    description: task.description,
                    category: task.category,
                    executor: task.executor,
                    status: task.status,
                    priority: task.priority,
                  })}
                />
              ),
            },
          ],
        })),
      [data],
    );

    let content: JSX.Element | null;

    if (isLoading) {
      content = <div>... is loading</div>;
    } else if (data && data.length === 0) {
      content = (
        <Fragment>
          <TaskListHeader className='mb-5' createTaskHandler={openCreateModalHandler} />
          <EmptyTable
            title='Нет задач в проекте'
            buttonName='Создать задачу'
            createRowHandler={openCreateModalHandler}
          />
        </Fragment>
      );
    } else if (rows && rows.length !== 0) {
      content = (
        <Fragment>
          <TaskListHeader className='mb-5' createTaskHandler={openCreateModalHandler} />
          <Table className='mb-5' columns={columns} rows={rows} />
          {totalPages > 1 && (
            <PaginationContainer
              currentPage={currentpage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              prevPageHandler={prevPageHandler}
              nextPageHandler={nextPageHandler}
            />
          )}
          <EditableTaskModal
            projectId={projectId}
            taskId={taskId}
            isOpen={isOpenModal}
            onClose={closeModalHandler}
          />
        </Fragment>
      );
    } else {
      content = null;
    }

    return <div className={className}>{content}</div>;
  },
);
