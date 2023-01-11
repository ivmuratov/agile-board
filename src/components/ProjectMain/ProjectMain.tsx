import { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import ProjectHeader from '../ProjectHeader/ProjectHeader';

//TODO сделать валидацию на projectId
const ProjectMain: FC = () => {
  return (
    <Fragment>
      <ProjectHeader />
      <Outlet />
    </Fragment>
  );
};

export default ProjectMain;
