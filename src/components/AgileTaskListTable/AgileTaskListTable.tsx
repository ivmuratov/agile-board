import { FC, Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import IParamsType from '../../types/IParamsType';
import ITableColumn from '../../types/ITableColumn';
import EmptyTable from '../EmptyTable/EmptyTable';
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

  const { agileTaskList, isLoading } = useTypedSelector(state => state.agileTaskReducer);

  const { fetchAgileTaskList } = useActions();

  useEffect(() => {
    if (projectId) {
      fetchAgileTaskList(projectId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isLoading && <div>... is loading</div>}
      {agileTaskList && agileTaskList.length === 0 && !isLoading && (
        <EmptyTable title='Нет задач в проекте' buttonTitle='Создать задачу' />
      )}
      {agileTaskList && agileTaskList.length !== 0 && !isLoading && (
        <Table
          columns={columns}
          rows={agileTaskList.map(
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
                  value: updatedDate ? updatedDate : '-',
                },
                {
                  id: '9',
                  value: finishedDate ? finishedDate : '-',
                },
              ],
            }),
          )}
        />
      )}
    </Fragment>
  );
};

export default AgileTaskListTable;
