import { Filter } from "lucide-react";
import MatriculaRow from "../../../molecules/Admin/MatriculaRow"; // Ajusta tu import
import { FullScreenLoader } from "../../../molecules/Loading";

interface MatriculasSectionProps {
  matriculas: any[]; // O usa el tipo Matricula[]
  loading: boolean;
  onValidate: (id: number) => void;
  onReject: (id: number) => void;
}

export const MatriculasSection = ({ matriculas, loading, onValidate, onReject }: MatriculasSectionProps) => {
  
  return (
    <div className="w-full">
      {loading && <FullScreenLoader message="Cargando..." />}

      <div className="space-y-3">
        {matriculas.length > 0 ? (
          matriculas.map((matricula) => (
            <MatriculaRow 
              key={matricula.idMatricula} 
              data={matricula} 
              onValidate={() => onValidate(matricula.idMatricula)} 
              onReject={() => onReject(matricula.idMatricula)} 
            />
          ))
        ) : (
           <div className="text-center py-12 bg-[#0d1512]/50 rounded-xl border border-dashed border-gray-800">
             <Filter className="mx-auto text-gray-600 mb-3" size={40} />
             <p className="text-gray-400 font-medium">No se encontraron estudiantes</p>
             <p className="text-gray-600 text-sm">Intenta cambiar los filtros de búsqueda</p>
           </div>
        )}
      </div>
    </div>
  );
};