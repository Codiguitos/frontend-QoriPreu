// Organism: Dashboard Overview
import Text from "../../atoms/Text";
import {StatCard} from "../../molecules/Admin/StatCard";
import { BookOpen, Users, UserCheck, Settings, LogOut, Search, Plus, Edit, Trash2, Eye, X, Mail, Phone, Calendar, Clock, Award, TrendingUp, GraduationCap, Filter, Download, ChevronRight, Video, FileText } from 'lucide-react';

export const DashboardSection = () => {
  const stats = [
    { icon: BookOpen, titulo: 'Total Cursos', valor: '24', cambio: 12 },
    { icon: Users, titulo: 'Estudiantes', valor: '1,234', cambio: 8 },
    { icon: UserCheck, titulo: 'Docentes', valor: '45', cambio: 5 },
    { icon: Award, titulo: 'Certificados', valor: '892', cambio: 15 }
  ];

  return (
    <div className='space-y-6'>
      <div>
        <Text size='h2' className='mb-2'>Panel de Control</Text>
        <Text size='p'>Resumen general de la academia</Text>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
          <Text size='h5' className='mb-4'>Cursos Recientes</Text>
          <div className='space-y-3'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='flex items-center justify-between p-4 bg-[#0a0e0d] rounded-lg hover:bg-[#162019] transition-all'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-gradient rounded-lg flex items-center justify-center'>
                    <BookOpen size={20} className='text-white' />
                  </div>
                  <div>
                    <Text size='p' className='text-white font-semibold'>Matemática Avanzada</Text>
                    <Text size='small'>Prof. Juan Pérez</Text>
                  </div>
                </div>
                <ChevronRight className='text-gray-400' />
              </div>
            ))}
          </div>
        </div>

        <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
          <Text size='h5' className='mb-4'>Actividad Reciente</Text>
          <div className='space-y-3'>
            {[
              { texto: 'Nuevo estudiante registrado', tiempo: 'Hace 5 min', color: 'bg-green-500' },
              { texto: 'Curso actualizado', tiempo: 'Hace 15 min', color: 'bg-blue-500' },
              { texto: 'Nueva tarea asignada', tiempo: 'Hace 1 hora', color: 'bg-yellow-500' }
            ].map((item, idx) => (
              <div key={idx} className='flex items-start gap-3 p-3 bg-[#0a0e0d] rounded-lg'>
                <div className={`w-2 h-2 ${item.color} rounded-full mt-2`}></div>
                <div className='flex-1'>
                  <Text size='p' className='text-white'>{item.texto}</Text>
                  <Text size='small'>{item.tiempo}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};