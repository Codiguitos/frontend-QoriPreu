import { useParams } from 'react-router-dom'
import CursoDocenteLayout from '../../../components/templates/CursoDocenteLayout'

const CursoId = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log('Curso ID:', slug);
  
  return (
    <CursoDocenteLayout />
  )
}

export default CursoId
