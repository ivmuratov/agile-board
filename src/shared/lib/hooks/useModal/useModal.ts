import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModalHandler = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return {
    isOpenModal,
    openModalHandler,
    closeModalHandler,
  };
};
