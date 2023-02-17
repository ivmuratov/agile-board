import { FC } from 'react';
import { useParams } from 'react-router-dom';

import ParamsType from '../../types/ParamsType';

const ProjectInfo: FC = () => {
  const { projectId } = useParams<ParamsType>();
  return <h1>Project Info {projectId}</h1>;
};

export default ProjectInfo;
