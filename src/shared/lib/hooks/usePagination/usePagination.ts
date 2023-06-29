import { useState } from 'react';

export const usePagination = (itemsLength: number, limit: number) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(itemsLength / limit);

  const nextPageHandler = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  return { page, totalPages, setPage, nextPageHandler, prevPageHandler };
};
