import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Container: FC<IProps> = ({ children }) => (
  <div className='container mx-auto h-full px-3'>{children}</div>
);

export default Container;
