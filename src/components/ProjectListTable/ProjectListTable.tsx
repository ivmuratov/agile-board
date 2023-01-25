import { FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { useGetProjectListQuery } from '../../services/projectService';
import ITableColumn from '../../types/ITableColumn';
import Table from '../../UI/Table';
import EmptyTable from '../EmptyTable/EmptyTable';

const columns: ITableColumn[] = [
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

const ProjectListTable: FC = () => {
  const { data, isLoading } = useGetProjectListQuery();

  return (
    <Fragment>
      <header className='mb-5'>
        <h3 className='text-2xl'>Список проектов</h3>
      </header>
      {isLoading && <div>... is loading</div>}
      {data && data.length === 0 && (
        /* !isLoading && */ <EmptyTable title='Нет проектов Agile' buttonTitle='Создать проект' />
      )}
      {data && data.length !== 0 && (
        /* !isLoading && */ <Table
          columns={columns}
          rows={data.map(({ id, prefix, name, manager, countTasks }) => ({
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
          }))}
        />
      )}
    </Fragment>
  );
};

export default ProjectListTable;
