import React from 'react'
import Text from '../../atoms/Text'
const variantMap = {
    primary: 'bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-2xl p-5 relative overflow-hidden',
    secondary: 'bg-[#0d1512] rounded-2xl p-5 border border-gray-800',
}
type StatCardProps = {
    nombre:string,
    valor:string,
    icono?:React.ReactNode,
    variant?: 'primary' | 'secondary'
}
const StatCard = ({nombre, valor, icono,variant = 'primary'}:StatCardProps) => {
  return (
    <div className={`flex w-full ${variantMap[variant]}`}>
        {icono}
        <div className='flex flex-col'>
            <Text size='p'>{nombre}</Text>
            <Text size='h5' className='text-white'>{valor}</Text>
        </div>
    </div>
  )
}

export default StatCard