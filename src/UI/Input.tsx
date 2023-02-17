import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  textHelper?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps & InputHTMLAttributes<HTMLInputElement>>(
  ({ label, placeholder, textHelper, ...props }, ref) => (
    <div className='flex flex-col'>
      <label className='mb-2 font-medium opacity-80' htmlFor={label}>
        {label}
      </label>
      <input
        type='text'
        className='mb-1 rounded border border-slate-50 bg-violet-100/60 px-3 py-2 transition-colors focus:border focus:border-gray-300 focus:bg-slate-50 focus:outline-none'
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
      <div className='text-sm font-medium text-gray-500/80'>{textHelper}</div>
    </div>
  ),
);

Input.displayName = 'Input';

export default Input;
