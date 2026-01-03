import React from 'react'
import Text from '../../atoms/Text'
import {Download,Video,NotebookPen} from 'lucide-react'
type MaterialItemProps = {
  nombreMaterial: string,
  tipoMaterial: "video" | "documento" ,
  fechaSubida: string,
  enlaceDescarga: string

}
const MaterialItem = ({nombreMaterial, tipoMaterial, fechaSubida, enlaceDescarga}: MaterialItemProps) => {
  return (  
    <div className=' flex items-center justify-between p-4 bg-[#0a0e0d] rounded-lg hover:bg-[#162019] transition-all border border-gray-800 hover:border-[#006B4B] group'>
      <div className='flex items-center gap-3'>
        {tipoMaterial === "video" ? <Video className='text-[#00A676] ' /> : <NotebookPen className='text-[#00A676] ' />}
        <div className='flex flex-col'>
          <Text size='p' className='text-white font-semibold group-hover:text-[#00A676]'>{`${nombreMaterial}`}</Text>
          <Text size='small'> {fechaSubida}</Text>
        </div>
      </div>
      <button className="cursor-pointer text-[#00A676] hover:text-[#00d494] transition-colors p-2 hover:bg-[#006B4B]/10 rounded-lg">
          <Download size={20} />
      </button>
    </div>
  )
}

export default MaterialItem