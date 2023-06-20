import { NavLinkProps, Params } from 'react-router-dom';

export interface AppNavLink extends NavLinkProps {
  name: string;
}

export interface AppParams extends Params {
  projectId: string;
  agileTaskId: string;
}
