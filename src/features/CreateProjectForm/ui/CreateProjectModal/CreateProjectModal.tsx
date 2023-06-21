import { FC, Suspense } from 'react';

import CreateProjectFormAsync from '../CreateProjectForm/CreateProjectForm.async';

import { Modal } from '@/shared/ui/Modal';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateProjectModal: FC<CreateProjectModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title='Новый проект'>
    <Suspense fallback={<div>... loading</div>}>
      <CreateProjectFormAsync cancelHandler={onClose} />
    </Suspense>
  </Modal>
);
