import { memo, FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { ProjectSchema } from '@/entities/Project';
import { Table, TableColumn, TableRow } from '@/shared/ui/Table';

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
  projectList: ProjectSchema[];
}

export const ProjectListTable: FC<ProjectListTableProps> = memo(({ className, projectList }) => {
  const rows: TableRow[] = useMemo(
    () =>
      projectList.map(project => ({
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
    [projectList],
  );

  return <Table className={className} columns={columns} rows={rows} />;
});
