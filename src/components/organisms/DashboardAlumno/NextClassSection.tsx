import React from 'react'
import LinkClassCard from '../../molecules/dashboard/LinkClassCard'
import Text from '../../atoms/Text'
import type { Curso2 as Curso } from '../../../type/Curso'
import type { Horario } from '../../../type/Curso'
type props={
    cursos:Curso[],
}
const NextClassSection = ({cursos}:props) => {
    const getNextThreeClasses = (cursos: Curso[]) => {
        if (!cursos || cursos.length === 0) return [] as any[]
        const dayMap: Record<string, number> = {
            domingo: 0, lunes: 1, martes: 2, miercoles: 3, miércoles: 3, jueves: 4, viernes: 5, sabado: 6, sábado: 6
        }

        const parseTime = (timeStr: string) => {
            const [hh, mm] = timeStr.split(':').map(Number)
            return { hh: hh || 0, mm: mm || 0 }
        }

        const today = new Date()
        const instances: { curso: Curso; horario: any; date: Date }[] = []

        cursos.forEach(curso => {
            const fechaInicio = curso.fechaInicio ? new Date(curso.fechaInicio) : null
            const fechaFin = curso.fechaFin ? new Date(curso.fechaFin) :null;
            (curso.horarios || []).forEach((horario:Horario) => {
                const diaKey = (horario.dia || '').toLowerCase()
                const targetWeekday = dayMap[diaKey]
                if (targetWeekday === undefined) return

                const { hh, mm } = parseTime(horario.horaInicio || '00:00')
                const todayWeekday = today.getDay()
                let daysUntil = (targetWeekday - todayWeekday + 7) % 7

                const candidate = new Date(today)
                candidate.setDate(today.getDate() + daysUntil)
                candidate.setHours(hh, mm, 0, 0)

                if (daysUntil === 0 && candidate.getTime() <= today.getTime()) {
                    candidate.setDate(candidate.getDate() + 7)
                }

                if (fechaInicio && candidate < fechaInicio) {
                    while (candidate < fechaInicio) candidate.setDate(candidate.getDate() + 7)
                }
                // Solo incluir clases cuya hora de inicio esté entre 16:00 (inclusive) y 18:00 (exclusive)
                const startHour = hh
                if (!(startHour >= 16 && startHour < 18)) return
                if (fechaFin && candidate > fechaFin) return

                instances.push({ curso, horario, date: candidate })
            })
        })

        instances.sort((a, b) => a.date.getTime() - b.date.getTime())

        const formatTime = (t?: string) => {
            if (!t) return ''
            const parts = t.split(':')
            const hh = (parts[0] ?? '00').padStart(2, '0')
            const mm = ((parts[1] ?? '00').split('.')[0] ?? '00').padStart(2, '0')
            return `${hh}:${mm}`
        }

        return instances.slice(0, 3).map(inst => ({
            name: inst.curso.nombreCurso || inst.curso.nombreCurso,
            fecha: inst.date.toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            hora: `${formatTime(inst.horario.horaInicio)}${inst.horario.horaFinal ? ' - ' + formatTime(inst.horario.horaFinal) : ''}`,
            link: '#'
        }))
    }

    const clases = getNextThreeClasses(cursos)
    return (
    <section className='bg-[#0d1512] rounded-xl p-5 border border-gray-800'>
        <Text size='h5' className='text-white mb-3'>Proximas Clases</Text>
        <div className='grid gap-5'>
            {clases.map((clase, index) => (
                <LinkClassCard
                    key={index}
                    name={clase.name}
                    fecha={clase.fecha}
                    hora={clase.hora}
                    link={clase.link}
                />
            ))}
        </div>
    </section>
  )
}

export default NextClassSection