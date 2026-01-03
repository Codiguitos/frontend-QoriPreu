import GlassCard from '../../../molecules/dashboard/GlassCard'
import Text from '../../../atoms/Text'

type HeroSectionDocenteProps = {
  nombreCurso: string,
  codigo: string,
  estudiantes: number,
  materiales: number,
  aula: string
}

const HeroSectionDocente = ({ nombreCurso, codigo, estudiantes, materiales, aula }: HeroSectionDocenteProps) => {
  return (
    <section className='rounded-2xl p-5 bg-gradient-to-r from-[#006B4B] to-[#00A676] flex justify-between items-center'>
      <div className='grid gap-3'>
        <Text size='h3' className='text-white'>{nombreCurso}</Text>
        <Text size='p' className='text-white/90'>Código: {codigo}</Text>
        <div className='flex gap-4'>
          <GlassCard title='Estudiantes' number={estudiantes.toString()} />
          <GlassCard title='Materiales' number={materiales.toString()} />
        </div>
      </div>
      <GlassCard title='Aula' number={aula} />
    </section>
  )
}

export default HeroSectionDocente
