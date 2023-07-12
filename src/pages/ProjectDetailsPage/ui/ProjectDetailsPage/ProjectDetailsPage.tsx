import { FC } from 'react';
import { useParams } from 'react-router-dom';

import type { AppParams } from '@/shared/types/route';

const ProjectDetailsPage: FC = () => {
  const { projectId } = useParams<AppParams>();

  return <h2 className='pt-20 text-center text-4xl'>Проект id = {projectId}</h2>;
};

export default ProjectDetailsPage;
