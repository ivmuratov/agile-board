import { FC, Suspense } from 'react';

import CreateTaskFormAsync from '../CreateTaskForm/CreateTaskForm.async';

import { Modal } from '@/shared/ui/Modal';

interface CreateTaskModalProps {
  projectId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CreateTaskModal: FC<CreateTaskModalProps> = ({ isOpen, projectId, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title='Новая задача'>
    <Suspense fallback={<div>... loading</div>}>
      <CreateTaskFormAsync projectId={projectId} cancelHandler={onClose} />
    </Suspense>
  </Modal>
);
