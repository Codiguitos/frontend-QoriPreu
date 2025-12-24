import EventIcon from "../../atoms/calendario/EventIcon";
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

const EventBadge: React.FC<{
  evento: Evento;
  onClick: () => void;
}> = ({ evento, onClick }) => {
  const getTipoColor = (tipo: Evento['tipo']): string => {
    const colors: Record<Evento['tipo'], string> = {
      simulacro: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      reunion: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      feriado: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      taller: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      academico: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    };
    return colors[tipo];
  };

  return (
    <div
      className={`text-xs p-1.5 rounded border ${getTipoColor(
        evento.tipo
      )} cursor-pointer hover:scale-105 transition-transform`}
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        <EventIcon tipo={evento.tipo} />
        <span className="truncate font-medium">{evento.titulo}</span>
      </div>
    </div>
  );
};
export default EventBadge;