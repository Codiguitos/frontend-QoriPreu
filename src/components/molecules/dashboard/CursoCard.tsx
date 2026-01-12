import React from 'react'
import Text from '../../atoms/Text'
import {ChevronRight,Clock} from 'lucide-react'
import Progress from '../../atoms/Progress'
import { useNavigate } from 'react-router-dom'
type CursoCardProps={
    name:string,
    teacher:string,
    icon:React.ReactNode,
    
}

const CursoCard = ({...props}:CursoCardProps) => {
  const navigate = useNavigate();
  return (
    <article onClick={() => navigate(`${props.name}`)} className='bg-[#0d1512] rounded-xl p-5 hover:bg-[#162019] transition-all cursor-pointer border border-gray-800 hover:border-[#006B4B] group
                        hover:text-green-400 flex flex-col gap-2 w-full'>
        <div className='flex  justify-between  '>
            <div className='flex justify-center items-center gap-4'>
              {props.icon}
              <div>
                  <Text size='h6' className='text-white  group-hover:text-[#00A676] '>{props.name}</Text>
                  <Text size='small' className='text-gray-400'>Prof {props.teacher}</Text>
              </div>
            </div>
            <ChevronRight className='text-white group-hover:text-[#00A676]'/>
        </div>
        

    </article>
  )
}

export default CursoCard