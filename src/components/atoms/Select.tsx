// src/components/atoms/Select.tsx
import React from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  error?: string;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <select
          ref={ref}
          className={`w-full bg-[#0d1512] border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                      focus:outline-none focus:ring-2 focus:ring-[#00A676] focus:border-[#00A676]
                      transition-all duration-300 ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-[#0a0e0d]">
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;