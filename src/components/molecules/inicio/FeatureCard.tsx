import React from 'react'
import Text from '../../atoms/Text'
type FeatureCardProps={
    icon:React.ReactNode,
    title:string,
    text:string
}
const FeatureCard = ({icon,title,text}:FeatureCardProps) => {
  return (
    <article className="
        feature-card group relative overflow-hidden
        bg-[linear-gradient(135deg,rgba(0,107,75,0.1),rgba(0,166,118,0.05))]
        py-10 px-8 rounded-[20px]
        border border-[rgba(0,107,75,0.2)]
        transition-all duration-400
        hover:-translate-y-[10px]
        hover:border-[rgba(0,107,75,0.5)]
        hover:shadow-[0_20px_40px_rgba(0,107,75,0.2)]
        flex flex-col gap-2  
        ">
        <div
            className=" absolute top-0 left-0 w-full h-[4px]  bg-[linear-gradient(90deg,#006B4B,#00A676)]
            scale-x-0 transition-transform duration-400
            origin-center group-hover:scale-x-100 
            "
        ></div>

        <div className="w-14 h-14 rounded-xl bg-[#00A676]/20 flex items-center justify-center text-[#00A676] text-4xl">
            {icon}
        </div>
        <Text size='h5' className='text-white'>{title}</Text>
        <Text size='p'>{text}</Text>
    </article>
  )
}

export default FeatureCard