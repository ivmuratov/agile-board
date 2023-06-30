import { useState } from 'react';

export const usePagination = (itemsLength: number, limit: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(itemsLength / limit);

  const nextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return { currentPage, totalPages, setCurrentPage, nextPageHandler, prevPageHandler };
};
