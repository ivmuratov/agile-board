import { FC } from 'react';

import ITableColumn from '../types/ITableColumn';
import ITableRow from '../types/ITableRow';

interface IProps {
  columns: ITableColumn[];
  rows: ITableRow[];
}

const Table: FC<IProps> = ({ columns, rows }) => {
  return (
    <table className='min-w-full border p-3'>
      <thead className='h-12 border bg-violet-100/50 text-left'>
        <tr>
          {columns.map(({ id, value }) => (
            <th className='px-4 font-medium opacity-90' key={id}>
              {value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ id, items }) => (
          <tr className='h-10 px-4 opacity-90 hover:bg-violet-200/50' key={id}>
            {items.map(({ id, value }) => (
              <td className='px-4' key={id}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
