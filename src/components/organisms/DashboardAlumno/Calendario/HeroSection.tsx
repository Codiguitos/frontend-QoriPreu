import React, { useMemo } from 'react'
import StatCard from '../../../molecules/StatCard'
import Text from '../../../atoms/Text'
import { Bell, BookOpen } from 'lucide-react'
import { useAlumnoStore } from '../../../../store/useAlumnoStore'
const HeroSection = () => {
  const { cursos } = useAlumnoStore();

  // Cálculos automáticos basados en la data real
  const stats = useMemo(() => {
    const totalCursos = cursos.length;
    
    // Calculamos horas semanales sumando la duración de todos los horarios
    let horasSemanales = 0;
    cursos.forEach(c => {
        if(c.horarios) {
            c.horarios.forEach(h => {
                const inicio = parseInt(h.horaInicio.split(':')[0]);
                const fin = parseInt(h.horaFinal.split(':')[0]);
                horasSemanales += (fin - inicio);
            });
        }
    });

    return { totalCursos, horasSemanales };
  }, [cursos]);

  return (
    <section className='w-full grid md:grid-cols-[2fr_1fr] gap-5'>
        <div>
            <Text size='h3' className='text-white'>Calendario Académico</Text>
            <Text size='p' className="mb-6 text-gray-400">
                Organiza tu tiempo y no pierdas ninguna clase.
            </Text>
            
            <div className='flex  gap-5'>
                <StatCard 
                    icono={<BookOpen className='text-white mr-2'/>} 
                    nombre='Cursos Activos' 
                    variant='primary' 
                    valor={stats.totalCursos.toString()} 
                />
                <StatCard 
                    nombre='Horas/Semana' 
                    variant='secondary' 
                    valor={`${stats.horasSemanales}h`}
                />
                {/* Asistencia hardcodeada por ahora hasta que tengas el endpoint de asistencia */}
                {/* <StatCard 
                    nombre='Asistencia Promedio' 
                    variant='secondary' 
                    valor='100%'
                /> */}
            </div>
        </div>

        {/* Sección de Notificación / Próxima clase */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5 flex flex-col justify-center">
              <div className="flex items-start gap-3">
                <Bell className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-yellow-400 mb-1">Recordatorio</h4>
                  <p className="text-sm text-gray-300">
                     Recuerda revisar tu material antes de las clases.
                     {/* Aquí podrías calcular cuál es la clase más próxima usando new Date() */}
                  </p>
                  <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-all w-full">
                    Ver Próxima Clase
                  </button>
                </div>
              </div>
        </div>
    </section>
  )
}

export default HeroSection