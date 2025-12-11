import MaterialItem from '../../../molecules/dashboard/MaterialItem'
import Text from '../../../atoms/Text'
import type { Material } from '../../../../type/MaterialITem'
import { FileText, Plus } from 'lucide-react'

type MaterialSectionDocenteProps = {
    materiales: Material[]
}

const MaterialSectionDocente = ({ materiales }: MaterialSectionDocenteProps) => {
    return (
        <section className='bg-[#0d1512] grid gap-5 rounded-xl p-6 border border-gray-800'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div className="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center">
                        <FileText size={24} className="text-white" />
                    </div>
                    <Text size='h5' className='text-white'>Materiales del curso</Text>
                </div>
                <button className='flex items-center gap-2 px-4 py-2 bg-gradient text-white rounded-lg hover:shadow-lg transition-all'>
                    <Plus size={18} />
                    <span className='text-sm font-semibold'>Subir Material</span>
                </button>
            </div>
            <div className='grid gap-2'>
                {materiales.map(material => (
                    <MaterialItem
                        key={material.id}
                        nombreMaterial={material.title}
                        tipoMaterial={material.type.toString() as "video" | "documento"}
                        fechaSubida="1 Nov 2023"
                        enlaceDescarga={material.url}
                    />
                ))}
            </div>
        </section>
    )
}

export default MaterialSectionDocente
