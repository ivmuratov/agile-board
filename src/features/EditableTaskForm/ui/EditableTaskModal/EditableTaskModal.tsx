import { FC, Suspense } from 'react';

import CreateTaskFormAsync from '../CreateTaskForm/CreateTaskForm.async';
import EditTaskFormAsync from '../EditTaskForm/EditTaskForm.async';

import { Modal } from '@/shared/ui/Modal';

interface EditableTaskModalProps {
  projectId?: string;
  taskId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const EditableTaskModal: FC<EditableTaskModalProps> = ({
  projectId,
  taskId,
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} title={taskId ? 'Редактировать' : 'Новая задача'}>
    <Suspense fallback={<div>... loading</div>}>
      {taskId ? (
        <EditTaskFormAsync projectId={projectId} taskId={taskId} cancelHandler={onClose} />
      ) : (
        <CreateTaskFormAsync projectId={projectId} cancelHandler={onClose} />
      )}
    </Suspense>
  </Modal>
);
