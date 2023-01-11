import { FC, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ITableColumn from '../../types/ITableColumn';
import EmptyTable from '../EmptyTable/EmptyTable';
import Table from '../UI/Table';

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
  const { projects, isLoading } = useTypedSelector(state => state.projectReducer);

  const { fetchProjects } = useActions();

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <header className='mb-5'>
        <h3 className='text-2xl'>Список проектов</h3>
      </header>
      {isLoading && <div>... is loading</div>}
      {projects && projects.length === 0 && !isLoading && (
        <EmptyTable title='Нет проектов Agile' buttonTitle='Создать проект' />
      )}
      {projects && projects.length !== 0 && !isLoading && (
        <Table
          columns={columns}
          rows={projects.map(({ _id, prefix, name, manager, tasks }) => ({
            id: _id,
            items: [
              {
                id: '0',
                value: prefix,
              },
              {
                id: '1',
                value: (
                  <NavLink to={`/projects/${_id}`} className='hover:text-blue-500'>
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
                value: `${tasks.length}`,
              },
            ],
          }))}
        />
      )}
    </Fragment>
  );
};

export default ProjectListTable;
