import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';

type ButtonTheme = 'primary' | 'success' | 'secondary' | 'danger';

const themes: Record<ButtonTheme, string> = {
  primary: 'bg-blue-600/90 hover:bg-blue-700/90',
  success: 'bg-green-600/90 hover:bg-green-700/90',
  secondary: 'bg-zinc-500/90 hover:bg-gray-600/90',
  danger: 'bg-red-600/90 hover:bg-red-700/90',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = memo(
  ({ className, theme = 'primary', children, ...props }) => (
    <button
      type='button'
      className={`rounded border py-2 px-5 font-medium text-slate-50 ${themes[theme]} ${className}`}
      {...props}
    >
      {children}
    </button>
  ),
);
