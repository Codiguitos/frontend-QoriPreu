import { Award, Users, Calendar, BookOpen, CheckCircle } from 'lucide-react';
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
const EventIcon: React.FC<{ tipo: Evento['tipo'] }> = ({ tipo }) => {
  const icons: Record<Evento['tipo'], React.FC<{ size: number }>> = {
    simulacro: Award,
    reunion: Users,
    feriado: Calendar,
    taller: BookOpen,
    academico: CheckCircle
  };
  const IconComponent = icons[tipo];
  return <IconComponent size={10} />;
};

export default EventIcon;