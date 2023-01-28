import { ButtonHTMLAttributes, FC } from 'react';

type Variant = 'primary' | 'success' | 'secondary' | 'danger';

const themes: Record<Variant, string> = {
  primary: 'bg-blue-600/90 hover:bg-blue-700/90',
  success: 'bg-green-600/90 hover:bg-green-700/90',
  secondary: 'bg-zinc-500/90 hover:bg-gray-600/90',
  danger: 'bg-red-600/90 hover:bg-red-700/90',
};

interface IProps {
  variant?: Variant;
  children: JSX.Element | string;
}

const Button: FC<IProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'primary',
  children,
  ...props
}) => (
  <button
    className={`rounded border py-2 px-5 font-medium text-slate-50 ${themes[variant]}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
