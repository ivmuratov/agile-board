import { FC, ReactNode, memo } from 'react';

export interface TableColumn {
  id: string;
  value: string;
}

export interface TableRowElement {
  id: string;
  value: ReactNode;
}

export interface TableRow {
  id: string;
  items: TableRowElement[];
}

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

export const Table: FC<TableProps> = memo(({ columns, rows }) => (
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
));
