import React from 'react'
import HorarioItem from '../../atoms/HorarioItem'
import Text from '../../atoms/Text';
import { useAlumnoStore } from '../../../store/useAlumnoStore'; // 1. Importar Store

// Definimos el tipo para la visualización
type BloqueHorario = {
    idCurso: number;
    curso: string;
    horaInicio: string;
    horaFin: string;
    dia: string;
    color: string;
    profesor?: string;
}

const Horario = () => {
    // 2. Traer cursos reales del store
    const { cursos } = useAlumnoStore();

    // 3. Función auxiliar para asignar colores consistentes según el ID del curso
    const getColor = (id: number) => {
        const colors = [
            'bg-blue-600'
        ];
        return colors[id % colors.length];
    }

    // 4. TRANSFORMACIÓN DE DATOS (Backend -> Frontend)
    // El backend trae: [ { nombreCurso: 'Math', horarios: [{dia: 'Lunes'...}] } ]
    // Nosotros necesitamos: [ { curso: 'Math', dia: 'Lunes', ... }, ... ]
    const bloquesHorario: BloqueHorario[] = cursos.flatMap(curso => 
        (curso.horarios || []).map(h => ({
            idCurso: curso.idCurso,
            curso: curso.nombreCurso,
            horaInicio: h.horaInicio, // Viene como "07:00:00"
            horaFin: h.horaFinal,
            dia: h.dia, // Viene como "Lunes", "Martes", etc.
            color: getColor(curso.idCurso),
            profesor: curso.docente 
                ? `${curso.docente.nombre} ${curso.docente.apellido}` 
                : "Docente por asignar"
        }))
    );

    const diasCompletos = ['hora', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    
    // He ampliado el rango de horas para asegurar que se vean todas las clases (de 7am a 8pm)
    // Puedes ajustar esto según tus turnos reales
    const horasDia = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <div className='flex overflow-x-auto pb-4'> 
            <div className='flex gap-3 w-full min-w-[800px]'>
                {diasCompletos.map((dia) => (
                    <div key={dia} className="mb-4 w-full flex flex-col gap-3 items-center">
                        {/* Cabecera del día */}
                        <h3 className={`text-lg font-semibold mb-2 ${dia === 'hora' ? 'text-transparent' : 'text-white'}`}>
                            {dia}
                        </h3>

                        {horasDia.map((hora) => {
                            // Lógica de comparación: ¿Hay una clase este día a esta hora?
                            const claseEncontrada = bloquesHorario.find((bloque) => {
                                // Extraemos la hora entera (ej: "14:00:00" -> 14)
                                const horaInicioBloque = parseInt(bloque.horaInicio.split(':')[0]);
                                const horaFinBloque = parseInt(bloque.horaFin.split(':')[0]);
                                
                                // Coincide si es el mismo día Y la hora actual es la de inicio
                                // (Opcional: puedes hacer lógica para que ocupe varios bloques si dura 2 horas)
                                return bloque.dia === dia && horaInicioBloque === hora;
                            });

                            return (
                                <HorarioItem
                                    key={dia + hora}
                                    horario={claseEncontrada ? {
                                        curso: claseEncontrada.curso as any,
                                        horaInicio: claseEncontrada.horaInicio.slice(0, 5), // Cortamos los segundos
                                        horaFin: claseEncontrada.horaFin.slice(0, 5),
                                        dia: claseEncontrada.dia,
                                        color: claseEncontrada.color,
                                        profesor: claseEncontrada.profesor
                                    } : undefined}
                                    className={dia === 'hora' ? "flex justify-center items-center h-[100px]" : "h-[100px]"} // Altura fija para alineación
                                >
                                    {dia === 'hora' ? (
                                        <Text size='p' className="text-gray-400 font-bold">
                                            {hora}:00
                                        </Text>
                                    ) : null}
                                </HorarioItem>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Horario