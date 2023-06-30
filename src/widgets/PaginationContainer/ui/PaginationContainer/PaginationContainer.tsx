import { memo, FC } from 'react';

import LeftArrowIcon from '@/shared/assets/left-arrow.svg';
import RightArrowIcon from '@/shared/assets/right-arrow.svg';
import { IconButton } from '@/shared/ui/IconButton';

interface PaginationContainerProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  prevPageHandler: () => void;
  nextPageHandler: () => void;
}

export const PaginationContainer: FC<PaginationContainerProps> = memo(
  ({ className, currentPage, totalPages, setCurrentPage, prevPageHandler, nextPageHandler }) => {
    const pageList: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pageList.push(i);
    }

    const setCurrentPageHandler = (page: number) => () => {
      setCurrentPage(page);
    };

    return (
      <div
        className={`flex items-center justify-between border bg-slate-50 py-2 px-4 ${className}`}
      >
        <IconButton disabled={currentPage <= 1} Svg={LeftArrowIcon} onClick={prevPageHandler} />
        <ul className='flex gap-x-2'>
          {pageList.map(value => (
            <li
              key={value}
              className={`cursor-pointer text-xl hover:text-blue-500 hover:opacity-100 ${
                currentPage === value
                  ? 'border-b border-black opacity-100 hover:border-blue-500'
                  : 'opacity-60'
              }`}
            >
              <button type='button' onClick={setCurrentPageHandler(value)}>
                {value}
              </button>
            </li>
          ))}
        </ul>
        <IconButton
          disabled={currentPage >= totalPages}
          Svg={RightArrowIcon}
          onClick={nextPageHandler}
        />
      </div>
    );
  },
);
