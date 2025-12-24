import EventBadge from "./EventBadge";
import EventCounter from "../../atoms/calendario/EventCounter";
type Evento = {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  tipo: 'simulacro' | 'reunion' | 'feriado' | 'taller' | 'academico';
  lugar: string;
  participantes?: number;
  estado?: string;
};
const EventList: React.FC<{
  eventos: Evento[];
  maxVisible: number;
  onEventClick: (evento: Evento) => void;
}> = ({ eventos, maxVisible, onEventClick }) => (
  <div className="space-y-1">
    {eventos.slice(0, maxVisible).map(evento => (
      <EventBadge key={evento.id} evento={evento} onClick={() => onEventClick(evento)} />
    ))}
    {eventos.length > maxVisible && <EventCounter count={eventos.length - maxVisible} />}
  </div>
);
export default EventList;

