import Button from '../../../atoms/Button'
import Text from '../../../atoms/Text'
import { Calendar, Video, ClipboardList } from 'lucide-react'

const AccionesSectionDocente = () => {
    return (
        <section className='bg-[#0d1512] grid gap-5 rounded-xl p-6 border border-gray-800'>
            <Text size='h5' className='text-white'>Acciones Rápidas</Text>
            <Button variant='primary' className='flex items-center justify-center gap-2'>
                <Video size={20} className="text-white" />
                Iniciar Clase Virtual
            </Button>
            <Button variant='horario'>
                <ClipboardList size={20} className="text-white mr-2" />
                Tomar Asistencia
            </Button>
            <Button variant='secondary' className='flex items-center justify-center gap-2'>
                <Calendar size={20} />
                Ver Horario
            </Button>
        </section>
    )
}

export default AccionesSectionDocente
