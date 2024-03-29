import { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: HTMLElement;
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children, element = document.body }) =>
  createPortal(children, element);
