import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetAgileTaskListQuery } from '../../services/agileTaskService';
import IParamsType from '../../types/IParamsType';
import ITableColumn from '../../types/ITableColumn';
import EmptyTable from '../EmptyTable/EmptyTable';
import Modal from '../UI/Modal';
import Table from '../UI/Table';

const columns: ITableColumn[] = [
  {
    id: '0',
    value: 'Название',
  },
  {
    id: '1',
    value: 'Тип',
  },
  {
    id: '2',
    value: 'Приоритет',
  },
  {
    id: '3',
    value: 'Категория',
  },
  {
    id: '4',
    value: 'Статус',
  },
  {
    id: '5',
    value: 'Автор',
  },
  {
    id: '6',
    value: 'Исполнитель',
  },
  {
    id: '7',
    value: 'Создана',
  },
  {
    id: '8',
    value: 'Изменена',
  },
  {
    id: '9',
    value: 'Завершена',
  },
];

const AgileTaskListTable: FC = () => {
  const { projectId } = useParams<IParamsType>();

  const { data, isLoading } = useGetAgileTaskListQuery(projectId ?? skipToken);

  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => {
    setActiveModal(true);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <Fragment>
      {isLoading && <div>... is loading</div>}
      {data && data.length === 0 && !isLoading && (
        <EmptyTable
          title='Нет задач в проекте'
          buttonTitle='Создать задачу'
          buttonAction={openModal}
        />
      )}
      {data && data.length !== 0 && !isLoading && (
        <Table
          columns={columns}
          rows={data.map(
            ({
              _id,
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
              id: _id,
              items: [
                {
                  id: '0',
                  value: name,
                },
                {
                  id: '1',
                  value: type,
                },
                {
                  id: '2',
                  value: priority,
                },
                {
                  id: '3',
                  value: category,
                },
                {
                  id: '4',
                  value: status,
                },
                {
                  id: '5',
                  value: author,
                },
                {
                  id: '6',
                  value: executor,
                },
                {
                  id: '7',
                  value: createdDate,
                },
                {
                  id: '8',
                  value: updatedDate || '-',
                },
                {
                  id: '9',
                  value: finishedDate || '-',
                },
              ],
            }),
          )}
        />
      )}
      <Modal active={activeModal} setInactive={closeModal} title='Создать задачу'>
        <div>123</div>
      </Modal>
    </Fragment>
  );
};

export default AgileTaskListTable;
