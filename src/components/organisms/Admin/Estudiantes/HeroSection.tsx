import { Search, BookOpen, AlertCircle, Check, UserCheck, ChevronDown } from "lucide-react";
import TabButton from "../../../molecules/Admin/TabButton"; // Ajusta la ruta según tu estructura

// Definimos qué datos necesita este componente para funcionar
interface HeroSectionProps {
  statusFilter: 'todos' | 'pendiente' | 'confirmada';
  setStatusFilter: (status: 'todos' | 'pendiente' | 'confirmada') => void;
  courseFilter: number | 'todos';
  setCourseFilter: (course: number | 'todos') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  // Datos para contadores y dropdowns
  matriculas: any[]; 
  cursosDisponibles: { id: number; nombre: string }[];
}

const HeroSection = ({
  statusFilter,
  setStatusFilter,
  courseFilter,
  setCourseFilter,
  searchTerm,
  setSearchTerm,
  matriculas,
  cursosDisponibles
}: HeroSectionProps) => {

  return (
    <div className="flex flex-col gap-6 mb-6">
      
      {/* Título y Descripción */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-white">Revisión de Matrículas</h2>
        <p className="text-gray-400 text-sm">Valida los pagos y confirma el acceso a los cursos.</p>
      </div>

      {/* --- BARRA DE CONTROL (Tabs de Estado) --- */}
      <div className="flex space-x-1 bg-[#0d1512] p-1 rounded-xl border border-gray-800 w-fit overflow-x-auto">
        <TabButton 
            active={statusFilter === 'pendiente'} 
            onClick={() => setStatusFilter('pendiente')}
            icon={<AlertCircle size={16} />}
            label="Pendientes"
            count={matriculas.filter(m => m.Estado === 'pendiente').length}
            color="yellow"
        />
        <TabButton 
            active={statusFilter === 'confirmada'} 
            onClick={() => setStatusFilter('confirmada')}
            icon={<Check size={16} />}
            label="Confirmadas"
            count={matriculas.filter(m => m.Estado === 'confirmada').length}
            color="green"
        />
        <TabButton 
            active={statusFilter === 'todos'} 
            onClick={() => setStatusFilter('todos')}
            icon={<UserCheck size={16} />}
            label="Historial Completo"
            color="gray"
        />
      </div>

      {/* --- FILTROS AVANZADOS (Buscador + Curso) --- */}
      <div className="flex flex-col md:flex-row gap-4 bg-[#1a2220] p-4 rounded-xl border border-gray-700 items-center">
        
        {/* 1. Buscador de Texto */}
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar alumno por nombre o DNI..." 
            className="w-full bg-[#0d1512] border border-gray-600 rounded-lg pl-10 pr-4 py-2.5 text-gray-200 focus:outline-none focus:border-[#00A676] transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 2. Filtro de Curso (Dropdown Estilizado) */}
        <div className="relative w-full md:w-64">
          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <select 
            className="w-full bg-[#0d1512] border border-gray-600 rounded-lg pl-10 pr-10 py-2.5 text-gray-200 appearance-none focus:outline-none focus:border-[#00A676] cursor-pointer"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value === 'todos' ? 'todos' : Number(e.target.value))}
          >
            <option value="todos">Todos los Cursos</option>
            {cursosDisponibles.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
        </div>

      </div>
    </div>
  );
}

export default HeroSection;