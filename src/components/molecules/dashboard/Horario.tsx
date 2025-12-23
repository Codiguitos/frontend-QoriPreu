import React from 'react'
import HorarioItem from '../../atoms/HorarioItem'
import Text from '../../atoms/Text';
type horario={
    curso:"Matematica" | "Quimica" | "Algebra",
    horaInicio:string,
    horaFin:string,
    dia:string,
    color:string,
    profesor?:string,
    
}

const Horario = () => {
    const Cursos:horario[]=[
        {
            curso:"Matematica",
            horaInicio:"7:00",
            horaFin:"9:00",
            dia:"Lunes",
            color:"bg-blue-500",
            profesor:"Juan Perez"
        }  ,
        {
            curso:"Quimica",
            horaInicio:"9:00",
            horaFin:"11:00",
            dia:"Martes",
            color:"bg-green-500",
            profesor:"Maria Gomez"
        }  ,
        {
            curso:"Algebra",
            horaInicio:"14:00",
            horaFin:"16:00",
            dia:"Miercoles",        
            color:"bg-red-500",
            profesor:"Carlos Lopez"
        },
        {
            curso:"Algebra",
            horaInicio:"14:00",
            horaFin:"16:00",
            dia:"Jueves",        
            color:"bg-red-500",
            profesor:"Carlos Lopez"
        }
    ]
    const diasCompletos = ['hora','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const horasDia = [7,9, 11, 13, 14, 16,  18, 20];
    return (
        <div className='flex '>           {/* cuadraditos */}
            <div className='flex gap-3  w-full'>
                {diasCompletos.map((dia) => (
                    <div key={dia} className="mb-4 w-full flex flex-col gap-3 items-center">
                        <h3 className="text-lg font-semibold mb-2 text-white">{dia}</h3>
                         {horasDia.map((hora) => {
                            
                            const esCurso = Cursos.find((curso) => 
                                curso.dia === dia && (
                                parseInt(curso.horaInicio.split(':')[0]) === hora ||
                                parseInt(curso.horaFin.split(':')[0]) === hora)
                            );
                            
                            return (
                                <HorarioItem
                                key={dia + hora}
                                horario={esCurso ? esCurso : undefined}
                                className={dia === 'hora' ? "flex justify-center items-center" : ""}
                                >
                                {dia === 'hora' ? <Text size='p'>{hora}:00</Text> : null}
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