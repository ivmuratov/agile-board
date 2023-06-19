import { memo, FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { Project } from '@/entities/Project';
import { Table, TableColumn, TableRow } from '@/shared/ui/Table';
import { EmptyTable } from '@/widgets/EmptyTable';

const columns: TableColumn[] = [
  {
    id: '0',
    value: 'Префикс',
  },
  {
    id: '1',
    value: 'Проект',
  },
  {
    id: '2',
    value: 'Менеджер',
  },
  {
    id: '3',
    value: 'Задачи',
  },
];

interface ProjectListTableProps {
  className?: string;
  isLoading: boolean;
  data?: Project[];
  openModal: () => void;
}

export const ProjectListTable: FC<ProjectListTableProps> = memo(
  ({ className, isLoading, data, openModal }) => {
    const rows: TableRow[] | undefined = useMemo(
      () =>
        data?.map(({ id, prefix, name, manager, countTasks }) => ({
          id,
          items: [
            {
              id: '0',
              value: prefix,
            },
            {
              id: '1',
              value: (
                <NavLink to={`/projects/${id}`} className='hover:text-blue-500'>
                  {name}
                </NavLink>
              ),
            },
            {
              id: '2',
              value: manager,
            },
            {
              id: '3',
              value: countTasks,
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
        <EmptyTable
          title='Нет проектов Agile'
          buttonTitle='Создать проект'
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
