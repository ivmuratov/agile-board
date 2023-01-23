import { ButtonHTMLAttributes, FC } from 'react';

interface IProps {
  children: JSX.Element | string;
}

const Button: FC<IProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button
      className='rounded border bg-blue-600/90 py-2 px-5 font-medium text-slate-50 hover:bg-blue-700/90'
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
