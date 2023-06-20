import { FC } from 'react';
import { useParams } from 'react-router-dom';

import type { AppParams } from '@/shared/types/route';

const ProjectInfo: FC = () => {
  const { projectId } = useParams<AppParams>();
  return <h1>Project Info {projectId}</h1>;
};

export default ProjectInfo;
