import { memo, FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { ProjectSchema } from '@/entities/Project';
import { Table, TableColumn, TableRow } from '@/shared/ui/Table';
import { EmptyTable } from '@/widgets/EmptyTable';

const columns: TableColumn[] = [
  {
    value: 'Префикс',
  },
  {
    value: 'Проект',
  },
  {
    value: 'Менеджер',
  },
  {
    value: 'Задачи',
  },
];

interface ProjectListTableProps {
  className?: string;
  isLoading: boolean;
  data?: ProjectSchema[];
  openModal: () => void;
}

export const ProjectListTable: FC<ProjectListTableProps> = memo(
  ({ className, isLoading, data, openModal }) => {
    const rows: TableRow[] | undefined = useMemo(
      () =>
        data?.map(project => ({
          id: project.id,
          items: [
            {
              keyId: '0',
              value: project.prefix,
            },
            {
              keyId: '1',
              value: (
                <NavLink to={`/projects/${project.id}`} className='hover:text-blue-500'>
                  {project.name}
                </NavLink>
              ),
            },
            {
              keyId: '2',
              value: project.manager,
            },
            {
              keyId: '3',
              value: project.countTasks,
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
          buttonName='Создать проект'
          createRowHandler={openModal}
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
