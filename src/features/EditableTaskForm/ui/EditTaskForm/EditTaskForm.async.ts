import { FC, lazy } from 'react';

import { EditTaskFormProps } from './EditTaskForm';

export default lazy<FC<EditTaskFormProps>>(() => import('./EditTaskForm'));
