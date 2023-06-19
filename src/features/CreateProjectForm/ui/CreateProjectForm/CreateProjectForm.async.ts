import { FC, lazy } from 'react';

import { CreateProjectFormProps } from './CreateProjectForm';

export default lazy<FC<CreateProjectFormProps>>(() => import('./CreateProjectForm'));
