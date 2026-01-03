import React from 'react'
import PerfilSection from '../../../components/organisms/DashboardAlumno/Configuracion/PerfilSection'
type PerfilData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  dni: string;
  direccion: string;
  ciudad: string;
};
const Configuracion = () => {
    const data={
        nombre: "Juan",
        apellido: "Doe",
        email:"juan@gmail",
        telefono: "123456789",
        dni: "12345678",
        direccion: "123 Main St",
        ciudad: "New York",


    }
    return (
    <div>
        <PerfilSection perfil={data} onChange={()=>{}} />
    </div>
  )
}

export default Configuracion