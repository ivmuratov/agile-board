import { forwardRef, ReactNode, Ref, SelectHTMLAttributes } from 'react';

export interface Option<T> {
  value: T;
  name: ReactNode;
}

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label: string;
  options: Option<T>[];
}

const Select = forwardRef(
  <T extends string>(
    { className, options, label, ...props }: SelectProps<T>,
    ref: Ref<HTMLSelectElement>,
  ) => (
    <div className={`flex items-center gap-x-2 ${className}`}>
      <label className='font-medium opacity-80' htmlFor={label}>
        {label}
      </label>
      <select ref={ref} {...props}>
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
  props: SelectProps<T> & { ref: Ref<HTMLSelectElement> },
) => JSX.Element;
