import { FC, lazy } from 'react';

import { CreateTaskFormProps } from './CreateTaskForm';

export default lazy<FC<CreateTaskFormProps>>(() => import('./CreateTaskForm'));
