import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import type { AppParams } from '@/shared/types/route';

import { useGetAgileTaskListQuery } from '@/services/agileTaskService';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Modal } from '@/shared/ui/Modal';
import { Table, TableColumn } from '@/shared/ui/Table';
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

const AgileTaskListTable: FC = () => {
  const { projectId } = useParams<AppParams>();

  const { data, isLoading } = useGetAgileTaskListQuery(projectId ?? skipToken);

  const { isOpenModal, openModalHandler, closeModalHandler } = useModal();

  return (
    <Fragment>
      {isLoading && <div>... is loading</div>}
      {data && data.length === 0 && !isLoading && (
        <EmptyTable
          title='Нет задач в проекте'
          buttonTitle='Создать задачу'
          buttonAction={openModalHandler}
        />
      )}
      {data && data.length !== 0 && !isLoading && (
        <Table
          columns={columns}
          rows={data.map(
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
          )}
        />
      )}
      <Modal isOpen={isOpenModal} onClose={closeModalHandler} title='Новая задача'>
        <div>123</div>
      </Modal>
    </Fragment>
  );
};

export default AgileTaskListTable;
