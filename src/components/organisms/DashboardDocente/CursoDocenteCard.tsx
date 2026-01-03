import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import { Users, Clock, MapPin } from 'lucide-react'

type CursoDocenteCardProps = {
    nombre: string,
    codigo: string,
    descripcion: string,
    estudiantes: number,
    horario: string,
    aula: string,
    activo?: boolean,
    onClick?: () => void
}

const CursoDocenteCard = ({ 
    nombre, 
    codigo, 
    descripcion, 
    estudiantes, 
    horario, 
    aula, 
    activo = true,
    onClick 
}: CursoDocenteCardProps) => {
    return (
        <article className='bg-[#0d1512] rounded-xl p-6 border border-gray-800 hover:border-[#006B4B] hover:shadow-lg transition-all'>
            <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-lg flex items-center justify-center text-white text-xl font-bold'>
                        {nombre.charAt(0)}
                    </div>
                    <div>
                        <Text size='h6' className='text-white'>{nombre}</Text>
                        <Text size='small' className='text-gray-400'>{codigo}</Text>
                    </div>
                </div>
                {activo && (
                    <span className='bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full'>
                        Activo
                    </span>
                )}
            </div>
            
            <Text size='small' className='text-gray-400 mb-4'>{descripcion}</Text>
            
            <div className='flex flex-col gap-2 mb-4'>
                <div className='flex items-center gap-2 text-sm text-gray-300'>
                    <Users size={16} className='text-gray-500' />
                    <span>{estudiantes} estudiantes</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-300'>
                    <Clock size={16} className='text-gray-500' />
                    <span>{horario}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-300'>
                    <MapPin size={16} className='text-gray-500' />
                    <span>Aula {aula}</span>
                </div>
            </div>
            
            <Button 
                variant='primary' 
                className='w-full py-2'
                onClick={onClick}
            >
                Ver Detalles
            </Button>
        </article>
    )
}

export default CursoDocenteCard
