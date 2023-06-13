import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, Fragment } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useGetProjectByIdQuery } from '../../services/projectService';
import ParamsType from '../../shared/types/ParamsType';
import NotFound from '../NotFound/NotFound';
import ProjectHeader from '../ProjectHeader/ProjectHeader';

const ProjectMain: FC = () => {
  const { projectId } = useParams<ParamsType>();

  const { data, isError } = useGetProjectByIdQuery(projectId ?? skipToken);

  if (isError) {
    return <NotFound />;
  }
  return (
    <Fragment>
      {projectId && data && <ProjectHeader projectTitle={data.name} projectId={projectId} />}
      {data && <Outlet />}
    </Fragment>
  );
};

export default ProjectMain;
