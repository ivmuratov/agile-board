import { memo, FC } from 'react';

export interface CreateTaskFormProps {
  onCancelHandler?: () => void;
}

const CreateTaskForm: FC<CreateTaskFormProps> = memo(({ onCancelHandler }) => (
  <div>CreateTaskForm</div>
));

export default CreateTaskForm;
