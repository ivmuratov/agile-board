import { memo, FC, useMemo, Fragment, useState } from 'react';

import { TaskSchema } from '@/entities/Task';
import {
  EditTaskFormSchema,
  EditableTaskModal,
  editTaskFormActions,
} from '@/features/EditableTaskForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Button } from '@/shared/ui/Button';
import { Table, TableColumn, TableRow } from '@/shared/ui/Table';
import { EmptyTable } from '@/widgets/EmptyTable';
import { ProjectTaskListFilters } from '@/widgets/ProjectTaskListFilters';

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
  openCreateModalHandler: () => void;
}

export const ProjectTaskListTable: FC<ProjectTaskListTableProps> = memo(
  ({ className, projectId, isLoading, data, openCreateModalHandler }) => {
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
        data?.map(
          ({
            id,
            name,
            description,
            type,
            priority,
            category,
            status,
            author,
            executor,
            createdDate,
            updatedDate,
            finishedDate,
          }) => ({
            id,
            items: [
              {
                keyId: '0',
                value: name,
              },
              {
                keyId: '1',
                value: category || '-',
              },
              {
                keyId: '2',
                value: type,
              },
              {
                keyId: '3',
                value: priority,
              },
              {
                keyId: '4',
                value: status,
              },
              {
                keyId: '5',
                value: author,
              },
              {
                keyId: '6',
                value: executor || '-',
              },
              {
                keyId: '7',
                value: createdDate,
              },
              {
                keyId: '8',
                value: updatedDate || '-',
              },
              {
                keyId: '9',
                value: finishedDate || '-',
              },
              {
                keyId: '10',
                value: (
                  <Button
                    onClick={openEditModalHandler(id, {
                      name,
                      description,
                      category,
                      executor,
                      status,
                      priority,
                    })}
                  >
                    Редактировать
                  </Button>
                ),
              },
            ],
          }),
        ),
      [data],
    );

    let content: JSX.Element | null;

    if (isLoading) {
      content = <div>... is loading</div>;
    } else if (data && data.length === 0) {
      content = (
        <EmptyTable
          title='Нет задач в проекте'
          buttonName='Создать задачу'
          createRowHandler={openCreateModalHandler}
        />
      );
    } else if (rows && rows.length !== 0) {
      content = (
        <Fragment>
          <ProjectTaskListFilters className='mb-5' createTaskHandler={openCreateModalHandler} />
          <Table columns={columns} rows={rows} />
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
