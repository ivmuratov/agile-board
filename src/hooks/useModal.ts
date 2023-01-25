import { useState } from 'react';

export const useModal = () => {
  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => {
    setActiveModal(true);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  return { activeModal, openModal, closeModal };
};
