import React from 'react'
import Button from '../../../atoms/Button'
import Text from '../../../atoms/Text'
import { Calendar,Video } from 'lucide-react'
const AccionesSection = () => {
  return (
    <section className='bg-[#0d1512] grid gap-5 rounded-xl p-6 border border-gray-800'>
        
        <Text size='h5' className='text-white'>Acciones Rapidas</Text>
        <Button variant='primary' className='flex items-center justify-center gap-5'>
            <Video size={20} className="text-white" />
            Unirse Clase Virtual
        </Button>
        <Button variant='horario'>
            <Calendar size={20} className="text-white mr-2" />
            Ver Horario
        </Button>
    </section>
  )
}

export default AccionesSection