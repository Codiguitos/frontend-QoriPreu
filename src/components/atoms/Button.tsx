import React from 'react'

const styles={
    primary:"text-white bg-gradient  ",
    secondary:"text-[#00A676] border-2 border-[#00A676] hover:bg-[#00A676] hover:text-white",
    horario:"w-full bg-gradient-to-r from-[#FFB800] to-[#ff9500] text-white py-3 rounded-lg hover:shadow-lg hover:shadow-[#FFB800]/30 transition-all font-semibold flex items-center justify-center gap-2",
    urgente:"mt-3 bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors",
    proximo:"mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors",
    none:""
  }

const sizeMap={
    normal:"py-3 px-8",
    small:"py-2 px-4",
}
type ButtonProps=React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children:React.ReactNode,
    variant:"primary"|"secondary"|"horario"|"urgente"|"proximo"|"none",
    className?:string,
    size?: "normal" | "small",
    onClick?:()=>void
   

}
const Button = ({variant,children,className,onClick,size="normal",...props}:ButtonProps & {size?: "normal" | "small"}) => {
  return (
    <button onClick={onClick} className={`transition-all duration-300 ${sizeMap[size]} rounded-lg  font-semibold cursor-pointer hover:-translate-y-0.5
          hover:shadow-[0_6px_20px_rgba(0,107,75,0.5)] 
        ${styles[variant]} ${className}`} {...props}>{children}</button>
  )
}

export default Button