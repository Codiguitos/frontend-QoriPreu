import PlanCard from '../../molecules/inicio/PlanCard'
import Text from '../../atoms/Text'
const PlanSection = () => {
  const listOrdinario=["Todos los cursos incluidos","Clases presenciales y virtuales",
                      "Material didáctico completo","Simulacros semanales","Asesoría personalizada",
                    "Acceso a plataforma 24/7","Certificado al finalizar"]
  const ListaCursos=["Elige tus cursos","Flexibilidad total","Material del curso seleccionado",
                     "Evaluaciones específicas","Acceso a plataforma","Paga solo lo que necesitas"]
  return (
    <section className='flex flex-col items-center gap-10'>
        <Text size='h3' className='text-white'>Elige tu Plan de Estudio</Text>
        <Text size='p'>Tenemos opciones adaptadas a tus necesidades y objetivos</Text>
        <div className='flex flex-col  justify-between md:flex-wrap md:flex-row gap-20 px-20'>
            <PlanCard 
                title='Plan Ordinario' 
                text='Preparación integral con todos los cursos necesarios para el examen de admisión.'
                list={listOrdinario}/>
            <PlanCard 
                popular={true}
                title='Plan Primera Opcion' 
                text='Preparación integral con todos los cursos necesarios para el examen de admisión.'
                list={listOrdinario}/>
            <PlanCard 
                title='Plan por Cursos' 
                text='Selecciona solo los cursos que necesitas reforzar para tu preparación.'
                list={ListaCursos}/>
        </div>

    </section>
  )
}

export default PlanSection