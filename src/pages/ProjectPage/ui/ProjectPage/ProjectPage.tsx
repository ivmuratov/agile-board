import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC, Fragment } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useGetProjectByIdQuery } from '../../api/projectByIdApi';
import { ProjectNavbar } from '../ProjectNavbar/ProjectNavbar';

import type { AppParams } from '@/shared/types/route';

const ProjectPage: FC = () => {
  const { projectId } = useParams<AppParams>();

  const { data } = useGetProjectByIdQuery(projectId ?? skipToken);

  let content: JSX.Element | null = null;

  if (projectId && data) {
    content = (
      <Fragment>
        <ProjectNavbar projectTitle={data.name} projectId={projectId} />
        <Outlet />
      </Fragment>
    );
  }

  return <main>{content}</main>;
};

export default ProjectPage;
