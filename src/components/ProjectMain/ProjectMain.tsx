import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, Fragment } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import ProjectHeader from '../ProjectHeader/ProjectHeader';

import { useGetProjectByIdQuery } from '@/pages/ProjectListPage/api/projectListApi';
import ParamsType from '@/shared/types/ParamsType';

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
