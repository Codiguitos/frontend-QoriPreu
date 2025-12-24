export type Evento = {
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