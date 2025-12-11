import Text from '../../atoms/Text'
import { Download, Trash2 } from 'lucide-react'

type MaterialCardProps = {
    nombre: string,
    tipo: string,
    fecha: string,
    size: string,
    onDownload?: () => void,
    onDelete?: () => void
}

const MaterialCard = ({ nombre, tipo, fecha, size, onDownload, onDelete }: MaterialCardProps) => {
    const getIconByType = (tipo: string) => {
        if (tipo.toLowerCase().includes('pdf')) return '📄'
        if (tipo.toLowerCase().includes('video')) return '🎥'
        if (tipo.toLowerCase().includes('imagen')) return '🖼️'
        return '📎'
    }

    return (
        <article className='bg-[#0d1512] rounded-xl p-5 border border-gray-800 hover:border-[#006B4B] hover:shadow-lg transition-all group'>
            <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center gap-3 flex-1'>
                    <div className='text-4xl'>
                        {getIconByType(tipo)}
                    </div>
                    <div className='flex-1 min-w-0'>
                        <Text size='p' className='text-white font-semibold truncate'>{nombre}</Text>
                        <Text size='small' className='text-gray-400'>{tipo}</Text>
                    </div>
                </div>
            </div>
            
            <div className='flex items-center justify-between mb-4'>
                <Text size='small' className='text-gray-400'>{fecha}</Text>
                <Text size='small' className='text-gray-400'>{size}</Text>
            </div>

            <div className='flex gap-2'>
                <button 
                    onClick={onDownload}
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#006B4B] text-white rounded-lg hover:bg-[#005a3d] transition-colors'
                >
                    <Download size={16} />
                    <span className='text-sm font-semibold'>Descargar</span>
                </button>
                <button 
                    onClick={onDelete}
                    className='px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors'
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </article>
    )
}

export default MaterialCard
