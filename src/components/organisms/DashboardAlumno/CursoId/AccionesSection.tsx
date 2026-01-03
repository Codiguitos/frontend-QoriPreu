import React from 'react'
import Button from '../../../atoms/Button'
import Text from '../../../atoms/Text'
import { Calendar, Video } from 'lucide-react'
import Swal from 'sweetalert2'

type Props = {
    link?: string; // Lo hacemos opcional por si el profe no puso link aún
}

const AccionesSection = ({ link }: Props) => {

    const handleNoLink = (e: React.MouseEvent) => {
        if (!link) {
            e.preventDefault();
            Swal.fire({
                icon: 'info',
                title: 'Sin enlace',
                text: 'El docente aún no ha configurado el enlace para la clase virtual.',
                confirmButtonColor: '#006B4B'
            });
        }
    }

    return (
        <section className='bg-[#0d1512] grid gap-5 rounded-xl p-6 border border-gray-800 h-fit'>
            
            <Text size='h5' className='text-white'>Acciones Rápidas</Text>
            
            {/* Botón de Clase Virtual */}
            <a 
                href={link || "#"} 
                target={link ? "_blank" : "_self"} 
                rel="noreferrer"
                onClick={handleNoLink}
                className='w-full'
            >
                {/* Asumo que tu Button acepta className para ancho completo */}
                <Button variant='primary' className='w-full flex items-center justify-center gap-3'>
                    <Video size={20} className="text-white" />
                    Unirse Clase Virtual
                </Button>
            </a>

            {/* Botón de Horario */}
            <Button variant='horario' className='w-full flex items-center justify-center gap-3'>
                <Calendar size={20} className="text-white" />
                Ver Horario
            </Button>
            
        </section>
    )
}

export default AccionesSection