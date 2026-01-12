import React from 'react'
import MaterialItem from '../../../molecules/dashboard/MaterialItem'
import Text from '../../../atoms/Text'
import type { Material} from '../../../../type/MaterialITem'
import { FileText } from 'lucide-react'
type MaterialSectionProps = {
    materiales: Material[]
}

const MaterialSection = ({ materiales }: MaterialSectionProps   ) => {
    return (
        <section className='bg-[#0d1512] grid h-max gap-5 rounded-xl p-6 border border-gray-800'>
            <div className='flex gap-2 items-center'>
                <div className="w-12 h-12 bg-gradient  rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-white" />
                </div>
                <Text size='h5' className='text-white '>Materiales del curso</Text>
            </div>
            <div className='grid gap-2'>
                {materiales.map(material => (
                    <MaterialItem
                        key={material.id}
                        nombreMaterial={material.title}
                        tipoMaterial={material.type.toString() as "video" | "documento"}
                        fechaSubida=""
                        enlaceDescarga={material.url}
                    />
                ))}
            </div>
        </section>
  )
}

export default MaterialSection