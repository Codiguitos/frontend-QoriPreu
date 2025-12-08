import React from 'react'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import {PlayCircle} from 'lucide-react'
type LinkClassCardProps={
    name:string,
    fecha:string,
    hora:string,
    link:string
}
const LinkClassCard = ({name, fecha, hora, link}: LinkClassCardProps) => {
  return (
    <article className='bg-[#0a0e0d] rounded-lg flex flex-col   p-4 border border-gray-800 hover:border-[#006B4B] transition-all group'>
        <div className='flex items-center gap-2 mb-3'>
           <div className={`w-3 h-3 bg-red-500 rounded-full`}></div>
           <div>
            <Text size='p' className='text-white'>{name}</Text>
            <Text size='small' className=''>{fecha} - {hora}</Text>
           </div>
        </div>
        <Button className='flex items-center gap-2 justify-center py-2'  variant='primary'><PlayCircle size={16} /> Unirse Ahora</Button>
    </article>
  )
}

export default LinkClassCard