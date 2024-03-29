import { forwardRef, ReactNode, Ref, SelectHTMLAttributes } from 'react';

export interface Option<T> {
  value: T;
  name: ReactNode;
}

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label?: string;
  placeholder?: string;
  options: Option<T>[];
}

const Select = forwardRef(
  <T extends string>(
    { className, label, placeholder, options, ...props }: SelectProps<T>,
    ref?: Ref<HTMLSelectElement>,
  ) => (
    <div className={`flex flex-col gap-y-2 ${className}`}>
      {label && (
        <label className='font-medium opacity-80' htmlFor={label}>
          {label}
        </label>
      )}
      <select
        className='rounded border border-slate-50 bg-violet-100/60 px-3 py-2 transition-colors focus:border focus:border-gray-300 focus:bg-slate-50 focus:outline-none'
        defaultValue={options[0].value}
        ref={ref}
        {...props}
      >
        {placeholder && (
          <option selected disabled>
            {placeholder}
          </option>
        )}
        {options.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  ),
);

Select.displayName = 'Select';

export default Select as <T extends string>(
  props: SelectProps<T> & { ref?: Ref<HTMLSelectElement> },
) => JSX.Element;
