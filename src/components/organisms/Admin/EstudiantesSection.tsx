// Organism: Gestión de Estudiantes
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import Glass from "../../atoms/Glass";
import NavItem from "../../atoms/NavItem";
import {Modal} from "../../molecules/Modal";
import {Table} from "../../molecules/Table";
import {Plus,Filter } from 'lucide-react'
import { AdminCursoCard } from "../../molecules/Admin/AdminCursoCard";
import { useState } from "react";

import InputLabel from "../../molecules/InputLabel";
import { Download } from "lucide-react";
export const EstudiantesSection = () => {
  const estudiantes = [
    { nombre: 'Ana Martínez', email: 'ana@example.com', cursosInscritos: 3, promedio: '16.5' },
    { nombre: 'Pedro Ruiz', email: 'pedro@example.com', cursosInscritos: 2, promedio: '15.8' },
    { nombre: 'Lucía Torres', email: 'lucia@example.com', cursosInscritos: 4, promedio: '17.2' }
  ];

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <Text size='h2' className='mb-2'>Gestión de Estudiantes</Text>
          <Text size='p'>Administra los estudiantes registrados</Text>
        </div>
        <div className='flex gap-3'>
          <Button variant='secondary'>
            <Download size={20} /> Exportar
          </Button>
          <Button variant='primary'>
            <Plus size={20} /> Nuevo Estudiante
          </Button>
        </div>
      </div>

      <Table
        columns={['Nombre', 'Email', 'Cursos Inscritos', 'Promedio']}
        data={estudiantes}
        onEdit={(row) => console.log('Editar:', row)}
        onDelete={(row) => console.log('Eliminar:', row)}
      />
    </div>
  );
};