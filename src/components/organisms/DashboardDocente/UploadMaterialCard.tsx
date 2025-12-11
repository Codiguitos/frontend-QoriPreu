import Text from '../../atoms/Text'
import { Plus } from 'lucide-react'

type UploadMaterialCardProps = {
    onClick?: () => void
}

const UploadMaterialCard = ({ onClick }: UploadMaterialCardProps) => {
    return (
        <article 
            onClick={onClick}
            className='bg-[#0d1512] rounded-xl p-8 border-2 border-dashed border-gray-700 hover:border-[#006B4B] hover:bg-[#162019] transition-all cursor-pointer group flex flex-col items-center justify-center min-h-[200px]'
        >
            <div className='w-16 h-16 bg-gray-800 group-hover:bg-[#006B4B] rounded-full flex items-center justify-center mb-4 transition-colors'>
                <Plus size={32} className='text-gray-500 group-hover:text-white transition-colors' />
            </div>
            <Text size='h6' className='text-gray-300 group-hover:text-[#00A676] transition-colors mb-2'>
                Subir Material
            </Text>
            <Text size='small' className='text-gray-500 text-center'>
                Haz clic para agregar un nuevo material
            </Text>
        </article>
    )
}

export default UploadMaterialCard
