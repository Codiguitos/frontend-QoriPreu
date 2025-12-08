import React from 'react'
import Text from '../../../atoms/Text'
import Button from '../../../atoms/Button'
const TeacherSection = () => {
  return (
    <section className='bg-[#0d1512] grid gap-5 rounded-xl p-6 border border-gray-800'>
        <Text size='h5' className='text-white'>Informacion del Docente</Text>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[100px] h-[100px] rounded-full bg-gradient'>
                <Text size='h3' className='text-white flex items-center justify-center h-full'>JP</Text>
            </div>
            <Text size='h6' className='text-white mt-2'>Juan Perez</Text>
            <Text size='p' className='text-gray-400'>Profesor de Matemáticas</Text>
        </div>
        <Button variant='secondary' className='w-full'>Enviar Mensaje</Button>
    </section>
  )
}

export default TeacherSection