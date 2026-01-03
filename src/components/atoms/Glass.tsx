import React, { Children } from 'react'
interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Glass = ({children,...props}: GlassProps) => {
  return (
    <div {...props} className='bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
      {children}
    </div>
  )
}

export default Glass