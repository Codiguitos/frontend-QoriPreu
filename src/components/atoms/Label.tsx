import React from 'react'
type LabelProps= {
    children:React.ReactNode
}
const Label = ({children}:LabelProps) => {
  return (
    <label className='text-white text-lg'>{children}</label>
  )
}

export default Label