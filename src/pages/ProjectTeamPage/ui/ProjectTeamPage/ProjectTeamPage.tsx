import { FC } from 'react';

interface ProjectTeamPageProps {
  className?: string;
}

const ProjectTeamPage: FC<ProjectTeamPageProps> = ({ className }) => (
  <div className={className}>TEAM</div>
);

export default ProjectTeamPage;
