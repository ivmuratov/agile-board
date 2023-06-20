import { memo, FC, useMemo } from 'react';

import { TaskSchema } from '@/entities/Task';
import { Table, TableColumn, TableRow } from '@/shared/ui/Table';
import { EmptyTable } from '@/widgets/EmptyTable';

const columns: TableColumn[] = [
  {
    value: 'Название',
  },
  {
    value: 'Тип',
  },
  {
    value: 'Приоритет',
  },
  {
    value: 'Категория',
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
];

interface ProjectTaskListTableProps {
  className?: string;
  isLoading: boolean;
  data?: TaskSchema[];
  openModal: () => void;
}

export const ProjectTaskListTable: FC<ProjectTaskListTableProps> = memo(
  ({ className, isLoading, data, openModal }) => {
    const rows: TableRow[] | undefined = useMemo(
      () =>
        data?.map(
          ({
            id,
            name,
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
                value: type,
              },
              {
                keyId: '2',
                value: priority,
              },
              {
                keyId: '3',
                value: category,
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
                value: executor,
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
          buttonTitle='Создать задачу'
          buttonAction={openModal}
        />
      );
    } else if (rows && rows.length !== 0) {
      content = <Table columns={columns} rows={rows} />;
    } else {
      content = null;
    }

    return <div className={className}>{content}</div>;
  },
);
