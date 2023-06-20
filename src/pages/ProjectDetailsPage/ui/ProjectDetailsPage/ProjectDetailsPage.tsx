import { FC } from 'react';
import { useParams } from 'react-router-dom';

import type { AppParams } from '@/shared/types/route';

interface ProjectDetailsPageProps {
  className?: string;
}

const ProjectDetailsPage: FC<ProjectDetailsPageProps> = ({ className }) => {
  const { projectId } = useParams<AppParams>();

  return <h1 className={className}>Project Details id = {projectId}</h1>;
};

export default ProjectDetailsPage;
