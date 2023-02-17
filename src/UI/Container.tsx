import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className='container mx-auto h-full px-3'>{children}</div>
);

export default Container;
