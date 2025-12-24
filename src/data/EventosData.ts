type Evento = {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string; // YYYY-MM-DD
  horaInicio: string;
  horaFin: string;
  tipo: 'simulacro' | 'reunion' | 'feriado' | 'taller' | 'academico';
  lugar: string;
  participantes?: number;
  estado?: string;
};
export const Eventos:Evento[]=[
    {
      id: 1,
      titulo: 'Simulacro General UNSAAC',
      descripcion: 'Examen de práctica para todas las áreas según el prospecto UNSAAC 2025',
      fecha: '2024-12-21',
      horaInicio: '08:00',
      horaFin: '12:00',
      tipo: 'simulacro',
      lugar: 'Aula Principal - Sede Central',
      participantes: 120,
      estado: 'programado'
    },
    {
      id: 2,
      titulo: 'Reunión de Docentes',
      descripcion: 'Planificación académica del siguiente ciclo y evaluación de resultados',
      fecha: '2024-12-23',
      horaInicio: '18:00',
      horaFin: '20:00',
      tipo: 'reunion',
      lugar: 'Sala de Conferencias',
      participantes: 24,
      estado: 'programado'
    },
    {
      id: 3,
      titulo: 'Inicio de Vacaciones',
      descripcion: 'Receso académico por fiestas de fin de año',
      fecha: '2024-12-27',
      horaInicio: '00:00',
      horaFin: '23:59',
      tipo: 'feriado',
      lugar: 'Todas las sedes',
      estado: 'programado'
    },
    {
      id: 4,
      titulo: 'Taller de Estrategias de Examen',
      descripcion: 'Técnicas y métodos para optimizar el tiempo en el examen de admisión',
      fecha: '2024-12-20',
      horaInicio: '15:00',
      horaFin: '17:00',
      tipo: 'taller',
      lugar: 'Aula 201',
      participantes: 45,
      estado: 'programado'
    },
    {
      id: 5,
      titulo: 'Entrega de Notas - Ciclo I',
      descripcion: 'Publicación de calificaciones del primer ciclo académico',
      fecha: '2024-12-24',
      horaInicio: '10:00',
      horaFin: '18:00',
      tipo: 'academico',
      lugar: 'Plataforma Virtual',
      participantes: 156,
      estado: 'programado'
    }
  ];
