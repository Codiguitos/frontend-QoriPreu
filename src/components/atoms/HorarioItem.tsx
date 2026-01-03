import React, { Children } from 'react'
import Text from '../atoms/Text'
import CursoCard from '../molecules/dashboard/CursoCard'
import { useNavigate } from 'react-router'
import {User} from 'lucide-react'
type horario={
    curso:"Matematica" | "Quimica" | "Algebra",
    horaInicio:string,
    horaFin:string,
    dia:string,
    color:string,
    profesor?:string
}
const variantMap={
    Matematica:'bg-[#3B82F6]',
    Quimica:'bg-gradient',
    Algebra:'bg-[#EF4444]'
}
type Props = {
    horario?:horario,
    children?:React.ReactNode,
    className?:string
}
const HorarioItem = ({horario,className,children}:Props) => {
    const navigate = useNavigate();
    return (
    <>
      {horario ? (
        <div  className={` w-full cursor-pointer bg-[#3B82F6] ${className} 
        rounded-xl border h-15 flex flex-col justify-center items-center hover:transform-3d hover:scale-[1.03] transition-all duration-300 ease-in-out`}>
            <Text size='p' className='text-white font-bold'>{horario.curso}</Text>
            <Text size='small' className='flex truncate'> <User size={20}/>Prof. {horario.profesor}</Text>
        </div>
      ) : (
        <div className={`bg-[#0a0e0d]/50 rounded-xl border border-gray-800/50 h-15 w-full ${className}`}>
            {children}
        </div>
      )}
    </>
  )
}

export default HorarioItem