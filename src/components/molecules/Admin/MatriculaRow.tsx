import Button from "../../atoms/Button";
import { Check, X, AlertCircle } from "lucide-react";


type Matricula = {
  idMatricula: number;
  fechaMatricula: string;
  Estado: 'pendiente' | 'confirmada' | 'cancelada';
  dniAlumno: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  nombreCurso: string;
  idCurso: number; // Necesario para el filtro
  cupoMaximo: number;
  inscritosActuales: number;
};
const MatriculaRow = ({ data, onValidate, onReject }: { data: Matricula, onValidate: () => void, onReject: () => void }) => {
  const isPending = data.Estado === 'pendiente';
  const fecha = new Date(data.fechaMatricula).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', hour: '2-digit', minute:'2-digit' });

  return (
    <div className="bg-[#0d1512] p-4 rounded-xl border border-gray-800 hover:border-gray-600 transition-all flex flex-col md:flex-row items-center gap-4 group">
      
      {/* 1. Info Estudiante */}
      <div className="flex items-center gap-4 flex-1 w-full border-b md:border-b-0 border-gray-800 pb-3 md:pb-0">
        <div className="w-10 h-10 rounded-full bg-[#1a2220] flex items-center justify-center text-[#00A676] font-bold border border-gray-700">
          {data.nombreAlumno.charAt(0)}{data.apellidoAlumno.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-medium group-hover:text-[#00A676] transition-colors">
            {data.nombreAlumno} {data.apellidoAlumno}
          </h4>
          <span className="text-xs text-gray-500 font-mono">DNI: {data.dniAlumno}</span>
        </div>
      </div>

      {/* 2. Info Curso */}
      <div className="flex-1 w-full md:w-auto">
        <div className="flex items-center gap-2 text-gray-300">
            <span className="text-sm font-medium bg-[#1a2220] px-2 py-1 rounded text-gray-200 border border-gray-700">
                {data.nombreCurso}
            </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 mt-1 ml-1">
             <span className="text-xs">📅 {fecha}</span>
        </div>
      </div>

      {/* 3. Estado */}
      <div className="w-full md:w-auto flex justify-start md:justify-center">
        {isPending ? (
            <span className="flex items-center gap-1.5 text-yellow-500 text-xs font-bold bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20 animate-pulse">
                <AlertCircle size={12}/> PENDIENTE
            </span>
        ) : (
            <span className="flex items-center gap-1.5 text-green-500 text-xs font-bold bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                <Check size={12}/> CONFIRMADA
            </span>
        )}
      </div>

      {/* 4. Acciones */}
      <div className="flex gap-2 w-full md:w-auto justify-end pt-3 md:pt-0">
        {isPending ? (
          <>
            <button onClick={onReject} className="p-2 rounded-lg text-gray-400 hover:bg-red-500/20 hover:text-red-500 transition-colors" title="Rechazar">
                <X size={20} />
            </button>
            <Button onClick={onValidate} variant="primary" className="px-5 py-2 text-sm shadow-lg shadow-green-900/20">
                Validar Acceso
            </Button>
          </>
        ) : (
            <button className="text-gray-600 hover:text-gray-300 text-sm px-4">
                Ver Recibo
            </button>
        )}
      </div>
    </div>
  );
};

export default MatriculaRow;