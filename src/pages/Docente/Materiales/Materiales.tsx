import Text from '../../../components/atoms/Text'
import MaterialCard from '../../../components/organisms/DashboardDocente/MaterialCard'
import UploadMaterialCard from '../../../components/organisms/DashboardDocente/UploadMaterialCard'

const Materiales = () => {
    const materiales = [
        {
            nombre: 'Ecuaciones Cuadráticas.pdf',
            tipo: 'PDF',
            fecha: '20 Nov 2024',
            size: '2.4 MB'
        },
        {
            nombre: 'Video Tutorial - Álgebra.mp4',
            tipo: 'Video',
            fecha: '18 Nov 2024',
            size: '45 MB'
        },
        {
            nombre: 'Ejercicios Resueltos.pdf',
            tipo: 'PDF',
            fecha: '15 Nov 2024',
            size: '1.8 MB'
        },
        {
            nombre: 'Práctica Calificada 3.pdf',
            tipo: 'PDF',
            fecha: '12 Nov 2024',
            size: '890 KB'
        },
        {
            nombre: 'Fórmulas Trigonométricas.pdf',
            tipo: 'PDF',
            fecha: '10 Nov 2024',
            size: '1.2 MB'
        },
        {
            nombre: 'Geometría Analítica - Clase 5.pdf',
            tipo: 'PDF',
            fecha: '08 Nov 2024',
            size: '3.1 MB'
        }
    ]

    const handleUpload = () => {
        console.log('Abrir modal de subida de material')
    }

    const handleDownload = (nombre: string) => {
        console.log('Descargar:', nombre)
    }

    const handleDelete = (nombre: string) => {
        console.log('Eliminar:', nombre)
    }

    return (
        <div className='w-full p-5 md:p-8 bg-[#0a0e0d] min-h-screen'>
            <div className='mb-6'>
                <Text size='h3' className='text-white mb-2'>Materiales</Text>
                <Text size='small' className='text-gray-400'>Gestiona los materiales de tus cursos</Text>
            </div>

            <div className='mb-6'>
                <Text size='h6' className='text-white mb-2'>Materiales Subidos</Text>
                <Text size='small' className='text-gray-400 mb-6'>
                    Tienes {materiales.length} materiales disponibles
                </Text>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <UploadMaterialCard onClick={handleUpload} />
                
                {materiales.map((material, index) => (
                    <MaterialCard
                        key={index}
                        nombre={material.nombre}
                        tipo={material.tipo}
                        fecha={material.fecha}
                        size={material.size}
                        onDownload={() => handleDownload(material.nombre)}
                        onDelete={() => handleDelete(material.nombre)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Materiales
