import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useGetProjectByIdQuery } from '../../api/projectByIdApi';
import { ProjectHeader } from '../ProjectHeader/ProjectHeader';

import type { AppParams } from '@/shared/types/route';

interface ProjectPageProps {
  className?: string;
}

const ProjectPage: FC<ProjectPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  const { data } = useGetProjectByIdQuery(projectId ?? skipToken);

  return (
    <main className={className}>
      {projectId && data && <ProjectHeader projectTitle={data.name} projectId={projectId} />}
      {data && <Outlet />}
    </main>
  );
};

export default ProjectPage;
