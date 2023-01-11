import { FC } from 'react';
import { useParams } from 'react-router-dom';

import IParamsType from '../../types/IParamsType';

const ProjectInfo: FC = () => {
  const { projectId } = useParams<IParamsType>();
  return <h1>Project Info {projectId}</h1>;
};

export default ProjectInfo;
