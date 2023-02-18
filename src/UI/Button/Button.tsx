import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'success',
  SUCCESS = 'secondary',
  DANGER = 'danger',
}

const themes: Record<ButtonTheme, string> = {
  primary: 'bg-blue-600/90 hover:bg-blue-700/90',
  success: 'bg-green-600/90 hover:bg-green-700/90',
  secondary: 'bg-zinc-500/90 hover:bg-gray-600/90',
  danger: 'bg-red-600/90 hover:bg-red-700/90',
};

interface ButtonProps {
  theme?: ButtonTheme;
  children: ReactNode;
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  theme = ButtonTheme.PRIMARY,
  children,
  ...props
}) => (
  <button
    type='button'
    className={`rounded border py-2 px-5 font-medium text-slate-50 ${themes[theme]}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
