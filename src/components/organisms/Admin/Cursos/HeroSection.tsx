import Text from '../../../atoms/Text'
import Button from '../../../atoms/Button'
import StatCard from '../../../molecules/StatCard'
import CreateCurso from './modals/CreateCurso'
import { useEffect, useState } from 'react'
import { useAdminStore } from '../../../../store/useAdminStore'
const HeroSection = () => {
  const {getCursos,cursos}=useAdminStore()
  const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
      setShowModal(true);
    };
    useEffect(() => {
    getCursos();
  }, []);
  return (
    <section className='grid gap-8 '>
        <div className='flex justify-between  '  >
            <div className='grid'>
                <Text size='h3' className='text-white'>Gestion Cursos</Text>
                <Text size='p'>Administra los cursos de la carrea</Text>
            </div>
            <Button variant='primary' onClick={handleOpenModal}>+ Crear Curso</Button>
        </div>
        <div className='flex w-100 gap-8'>
            <StatCard variant='secondary' nombre='total Cursos' valor={cursos.length.toString()}/>
        </div>
        {showModal && <CreateCurso onClose={() => setShowModal(false)}/>}
    </section>
  )
}

export default HeroSection