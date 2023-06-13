import { FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { useGetProjectListQuery } from '../../services/projectService';
import { useModal } from '../../shared/lib/hooks/useModal/useModal';
import Button from '../../shared/ui/Button/Button';
import Modal from '../../shared/ui/Modal/Modal';
import Table, { TableColumn } from '../../shared/ui/Table/Table';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import EmptyTable from '../EmptyTable/EmptyTable';

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

const ProjectListTable: FC = () => {
  const { data, isLoading } = useGetProjectListQuery();

  const { activeModal, openModal, closeModal } = useModal();

  return (
    <Fragment>
      <header className='mb-5 flex justify-between'>
        <h3 className='text-2xl'>Список проектов</h3>
        {data && data.length !== 0 && <Button onClick={openModal}>Создать проект</Button>}
      </header>
      {isLoading && <div>... is loading</div>}
      {data && data.length === 0 && (
        /* !isLoading && */ <EmptyTable
          title='Нет проектов Agile'
          buttonTitle='Создать проект'
          buttonAction={openModal}
        />
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
      <Modal active={activeModal} setInactive={closeModal} title='Новый проект'>
        <CreateProjectForm setInactiveModal={closeModal} />
      </Modal>
    </Fragment>
  );
};

export default ProjectListTable;
