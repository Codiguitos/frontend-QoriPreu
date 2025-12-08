import React from 'react'
import { useParams } from 'react-router-dom'
import CursoLayout from '../../../components/templates/CursoLayout'

const CursoId = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);
  return (
    <CursoLayout/>
  )
}

export default CursoId