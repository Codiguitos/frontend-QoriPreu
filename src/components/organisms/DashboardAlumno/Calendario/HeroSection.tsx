import React from 'react'
import StatCard from '../../../molecules/dashboard/StatCard'
import Text from '../../../atoms/Text'
import {Bell} from 'lucide-react'
const HeroSection = () => {
  return (
    <section className='w-full grid md:grid-cols-[2fr_1fr] gap-5 '>
        <div>
            <Text size='h3' className='text-white'>Calendario</Text>
            <Text size='p'>Mira tu semana academica de forma inteligente</Text>
            <div className='flex  gap-10'>
                <StatCard nombre='Total Clase' variant='primary' valor='11' />
                <StatCard nombre='Horas/Semanal' variant='secondary' valor='22h'/>
                <StatCard nombre='Asistencia' variant='secondary' valor='95%'/>
            </div>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Bell className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-yellow-400 mb-1">Recordatorio</h4>
                  <p className="text-sm text-gray-300">
                    Tu clase virtual de Comunicación comienza en 30 minutos
                  </p>
                  <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-all">
                    Unirse Ahora
                  </button>
                </div>
              </div>
        </div>
    </section>
  )
}

export default HeroSection