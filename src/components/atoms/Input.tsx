import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'primary'; // Puedes añadir más variantes si lo necesitas
};

const Input = ({ className, ...props }: InputProps) => {
  return (    
    <input
        className={`w-full bg-[#0d1512] border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                    focus:outline-none focus:ring-2 focus:ring-[#00A676] focus:border-[#00A676]
                    transition-all duration-300 ${className}`}
        {...props}
    />
  )
}

export default Input