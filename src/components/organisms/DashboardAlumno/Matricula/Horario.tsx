import React from 'react';
import { Calendar } from 'lucide-react';
import type { Curso } from '../../../../type/Curso';
import Text from '../../../atoms/Text';
type HorarioProps = {
  selectedCourses: Curso[];
  days: string[];
  timeSlots: string[];
  getScheduleGrid: () => Record<string, Curso[]>;
};

const Horario: React.FC<HorarioProps> = ({ selectedCourses, days, timeSlots, getScheduleGrid }) => {
  const scheduleGrid = getScheduleGrid();

  return (
    <div className="bg-[#0d1512] backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-bold mb-6 flex text-white items-center gap-2">
        <Calendar className="text-green-400" />
        Tu Horario Semanal
      </h2>

      {selectedCourses.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <Calendar size={64} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">No has seleccionado ningún curso todavía</p>
          <p className="text-sm mt-2">Selecciona cursos para ver tu horario</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-700 bg-[#0a0e0d] text-white p-3 text-left">Horario</th>
                {days.map(day => (
                  <th key={day} className="border border-gray-700 text-white bg-[#0a0e0d]  p-3 text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map(time => (
                <tr key={time}>
                  <td className="border border-gray-700 text-white bg-[#0a0e0d] p-3 text-sm">{time}</td>

                  {days.map(day => {
                    // Construimos la clave igual que en getScheduleGrid
                    const key = `${day}-${time}`;
                    const coursesInSlot = scheduleGrid[key] || [];

                    return (
                      <td key={day} className="border  border-gray-700 p-2">
                        {coursesInSlot.length > 0 ? (
                          <div className="space-y-1">
                            {coursesInSlot.map(course => (
                              <div
                                key={course.idCurso}
                                className="bg-gradient text-white text-center from-green-600 to-emerald-600 p-3 rounded-lg text-sm"
                              >
                                <div className="font-bold">{course.nombreCurso}</div>
                                <div className="text-xs opacity-90">Prof. {course.docente?.nombre}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="h-20 flex items-center justify-center text-gray-600">-</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Horario;
