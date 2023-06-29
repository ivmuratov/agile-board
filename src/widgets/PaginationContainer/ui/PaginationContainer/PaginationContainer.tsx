import { memo, FC } from 'react';

import LeftArrowIcon from '@/shared/assets/left-arrow.svg';
import RightArrowIcon from '@/shared/assets/right-arrow.svg';
import { IconButton } from '@/shared/ui/IconButton';

interface PaginationContainerProps {
  className?: string;
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  prevPageHandler: () => void;
  nextPageHandler: () => void;
}

export const PaginationContainer: FC<PaginationContainerProps> = memo(
  ({ className, page, totalPages, setPage, prevPageHandler, nextPageHandler }) => {
    const pageList: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pageList.push(i);
    }

    const setPageHandler = (page: number) => () => {
      setPage(page);
    };

    return (
      <div
        className={`flex items-center justify-between border bg-slate-50 py-2 px-4 ${className}`}
      >
        <IconButton disabled={page <= 1} Svg={LeftArrowIcon} onClick={prevPageHandler} />
        <ul className='flex gap-x-2'>
          {pageList.map(value => (
            <li
              key={value}
              className={`cursor-pointer hover:text-blue-500 hover:opacity-100 ${
                page === value ? 'border-b border-black opacity-100' : 'opacity-60'
              }`}
            >
              <button type='button' onClick={setPageHandler(value)}>
                {value}
              </button>
            </li>
          ))}
        </ul>
        <IconButton disabled={page >= totalPages} Svg={RightArrowIcon} onClick={nextPageHandler} />
      </div>
    );
  },
);
