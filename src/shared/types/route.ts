import { FC, SVGProps } from 'react';
import { NavLinkProps, Params } from 'react-router-dom';

export interface AppNavLink extends NavLinkProps {
  name: string;
}

export interface AppNavLinkIcon extends NavLinkProps {
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export interface AppParams extends Params {
  projectId: string;
  agileTaskId: string;
}
