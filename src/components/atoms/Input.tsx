// src/atoms/Input.tsx
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary";
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          ref={ref}
          className={`w-full bg-[#0d1512] border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                      focus:outline-none focus:ring-2 focus:ring-[#00A676] focus:border-[#00A676]
                      transition-all duration-300 ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
