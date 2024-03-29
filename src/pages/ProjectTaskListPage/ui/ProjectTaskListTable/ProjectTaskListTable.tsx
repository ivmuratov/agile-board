import { memo, FC, useMemo, Fragment, useState } from 'react';

import {
  TaskSchema,
  getTaskTypeName,
  getPriorityTypeTaskName,
  getStatusTypeTaskName,
} from '@/entities/Task';
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
import { PaginationContainer } from '@/widgets/PaginationContainer';

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
  projectId?: string;
  taskList: TaskSchema[];
  currentpage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  prevPageHandler: () => void;
  nextPageHandler: () => void;
}

export const ProjectTaskListTable: FC<ProjectTaskListTableProps> = memo(
  ({
    projectId,
    taskList,
    currentpage,
    totalPages,
    setCurrentPage,
    prevPageHandler,
    nextPageHandler,
  }) => {
    const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

    const dispatch = useAppDispatch();

    const [taskId, setTaskId] = useState<string | undefined>(undefined);

    const openEditModalHandler = (id: string, editTask: EditTaskFormSchema) => () => {
      setTaskId(id);
      dispatch(editTaskFormActions.setEditForm(editTask));
      openModalHandler();
    };

    const rows: TableRow[] = useMemo(
      () =>
        taskList.map(task => ({
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
              value: getTaskTypeName(task.type),
            },
            {
              keyId: '3',
              value: getPriorityTypeTaskName(task.priority),
            },
            {
              keyId: '4',
              value: getStatusTypeTaskName(task.status),
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
      [taskList],
    );

    return (
      <Fragment>
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
  },
);
