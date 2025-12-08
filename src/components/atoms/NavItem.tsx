import React from 'react'
import { Link } from 'react-router-dom'

const variantMap = {
  primary:
    "w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all font-semibold text-gray-400 hover:bg-gray-800 hover:text-gray-200",
  secondary:
    "bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white shadow-lg shadow-[#006B4B]/30 px-4 py-3 rounded-xl"
}

type NavItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary"
  active?: boolean,
  to?:string
}

const NavItem = ({to="", active = false, variant = "primary", className = "", ...props }: NavItemProps) => {
  return (
    <Link
       to={to}
      {...props}
      className={` pr-2 
        ${variantMap[variant]} 
        ${active ? "bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white shadow-lg shadow-[#006B4B]/30" : ""} 
        ${className}
      `}
    >
      {props.children}
    </Link>
  )
}

export default NavItem
