import Text from '../../../components/atoms/Text'

const Calificaciones = () => {
    return (
        <div className='w-full p-5 md:p-8 bg-gray-50 min-h-screen'>
            <div className='mb-6'>
                <Text size='h3' className='text-gray-900 mb-2'>Calificaciones</Text>
                <Text size='small' className='text-gray-600'>Gestiona las calificaciones de tus estudiantes</Text>
            </div>

            <div className='bg-white rounded-xl p-8 border border-gray-200 text-center'>
                <Text size='h5' className='text-gray-400 mb-2'>Sección en desarrollo</Text>
                <Text size='small' className='text-gray-500'>
                    Esta sección estará disponible próximamente para gestionar calificaciones
                </Text>
            </div>
        </div>
    )
}

export default Calificaciones
