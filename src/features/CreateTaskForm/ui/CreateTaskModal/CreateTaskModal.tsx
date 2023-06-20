import { FC, Suspense } from 'react';

import CreateTaskFormAsync from '../CreateTaskForm/CreateTaskForm.async';

import { Modal } from '@/shared/ui/Modal';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateTaskModal: FC<CreateTaskModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title='Новая задача'>
    <Suspense fallback={<div>... loading</div>}>
      <CreateTaskFormAsync onCancelHandler={onClose} />
    </Suspense>
  </Modal>
);
