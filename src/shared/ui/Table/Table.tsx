import { FC, ReactNode, memo } from 'react';

export interface TableColumn {
  value: string;
}

export interface TableRowElement {
  keyId: string;
  value: ReactNode;
}

export interface TableRow {
  id: string;
  items: TableRowElement[];
}

interface TableProps {
  className?: string;
  columns: TableColumn[];
  rows: TableRow[];
}

export const Table: FC<TableProps> = memo(({ className, columns, rows }) => (
  <table className={`min-w-full border p-3 ${className}`}>
    <thead className='h-12 border bg-violet-100/50 text-left'>
      <tr>
        {columns.map(({ value }) => (
          <th className='px-4 font-medium opacity-90' key={value}>
            {value}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map(({ id, items }) => (
        <tr className='h-10 bg-slate-50 px-4 opacity-90 hover:bg-violet-200/50' key={id}>
          {items.map(({ keyId, value }) => (
            <td className='px-4' key={keyId}>
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
));
