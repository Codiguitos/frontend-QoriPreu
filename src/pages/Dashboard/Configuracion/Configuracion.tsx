import React, { useState } from 'react';
import { Clock, Video, MapPin, ChevronLeft, ChevronRight, Bell, Download, Plus, Zap, Target } from 'lucide-react';

interface Clase {
  id: string;
  curso: string;
  hora: string;
  horaInicio: number;
  horaFin: number;
  duracion: number;
  docente: string;
  ubicacion: string;
  tipo: 'presencial' | 'virtual' | 'hibrido';
  icon: string;
  gradiente: string;
  enlace?: string;
  estudiantes?: number;
}

interface DiaClases {
  [key: string]: Clase[];
}

export default function Configuración() {
  const [vistaActual, setVistaActual] = useState<'semana' | 'dia' | 'mes'>('semana');
  const [diaSeleccionado, setDiaSeleccionado] = useState<number>(0);

  const horario: DiaClases = {
    lunes: [
      {
        id: '1',
        curso: 'Matemática Avanzada',
        hora: '08:00 - 10:00',
        horaInicio: 8,
        horaFin: 10,
        duracion: 2,
        docente: 'Prof. Juan Pérez',
        ubicacion: 'Aula 101 - Edificio A',
        tipo: 'presencial',
        icon: '📐',
        gradiente: 'from-blue-600 via-blue-500 to-cyan-400',
        estudiantes: 35
      },
      {
        id: '2',
        curso: 'Física Cuántica',
        hora: '15:00 - 17:00',
        horaInicio: 15,
        horaFin: 17,
        duracion: 2,
        docente: 'Prof. Carlos Mendoza',
        ubicacion: 'Laboratorio 3',
        tipo: 'presencial',
        icon: '⚛️',
        gradiente: 'from-purple-600 via-pink-500 to-rose-400',
        estudiantes: 28
      }
    ],
    martes: [
      {
        id: '3',
        curso: 'Química Orgánica',
        hora: '09:00 - 11:00',
        horaInicio: 9,
        horaFin: 11,
        duracion: 2,
        docente: 'Prof. Ana Torres',
        ubicacion: 'Lab Química 2',
        tipo: 'presencial',
        icon: '🧪',
        gradiente: 'from-green-600 via-emerald-500 to-teal-400',
        estudiantes: 30
      },
      {
        id: '4',
        curso: 'Comunicación Digital',
        hora: '14:00 - 16:00',
        horaInicio: 14,
        horaFin: 16,
        duracion: 2,
        docente: 'Prof. María García',
        ubicacion: 'Google Meet',
        tipo: 'virtual',
        icon: '📝',
        gradiente: 'from-orange-600 via-amber-500 to-yellow-400',
        enlace: 'https://meet.google.com/abc-defg-hij',
        estudiantes: 40
      }
    ],
    miercoles: [
      {
        id: '5',
        curso: 'Matemática Avanzada',
        hora: '10:00 - 12:00',
        horaInicio: 10,
        horaFin: 12,
        duracion: 2,
        docente: 'Prof. Juan Pérez',
        ubicacion: 'Zoom Meeting',
        tipo: 'virtual',
        icon: '📐',
        gradiente: 'from-blue-600 via-blue-500 to-cyan-400',
        enlace: 'https://zoom.us/j/123456789',
        estudiantes: 35
      },
      {
        id: '6',
        curso: 'Historia del Perú',
        hora: '16:00 - 18:00',
        horaInicio: 16,
        horaFin: 18,
        duracion: 2,
        docente: 'Prof. Luis Vargas',
        ubicacion: 'Aula 205',
        tipo: 'presencial',
        icon: '🏛️',
        gradiente: 'from-red-600 via-orange-500 to-amber-400',
        estudiantes: 32
      }
    ],
    jueves: [
      {
        id: '7',
        curso: 'Biología Molecular',
        hora: '08:00 - 10:00',
        horaInicio: 8,
        horaFin: 10,
        duracion: 2,
        docente: 'Prof. Rosa Chávez',
        ubicacion: 'Lab Biología',
        tipo: 'presencial',
        icon: '🧬',
        gradiente: 'from-teal-600 via-cyan-500 to-blue-400',
        estudiantes: 25
      },
      {
        id: '8',
        curso: 'Física Cuántica',
        hora: '13:00 - 15:00',
        horaInicio: 13,
        horaFin: 15,
        duracion: 2,
        docente: 'Prof. Carlos Mendoza',
        ubicacion: 'Microsoft Teams',
        tipo: 'virtual',
        icon: '⚛️',
        gradiente: 'from-purple-600 via-pink-500 to-rose-400',
        enlace: 'https://teams.microsoft.com/...',
        estudiantes: 28
      }
    ],
    viernes: [
      {
        id: '9',
        curso: 'Química Orgánica',
        hora: '09:00 - 11:00',
        horaInicio: 9,
        horaFin: 11,
        duracion: 2,
        docente: 'Prof. Ana Torres',
        ubicacion: 'Aula 102',
        tipo: 'presencial',
        icon: '🧪',
        gradiente: 'from-green-600 via-emerald-500 to-teal-400',
        estudiantes: 30
      },
      {
        id: '10',
        curso: 'Comunicación Digital',
        hora: '15:00 - 17:00',
        horaInicio: 15,
        horaFin: 17,
        duracion: 2,
        docente: 'Prof. María García',
        ubicacion: 'Zoom',
        tipo: 'virtual',
        icon: '📝',
        gradiente: 'from-orange-600 via-amber-500 to-yellow-400',
        enlace: 'https://zoom.us/j/987654321',
        estudiantes: 40
      }
    ],
    sabado: [
      {
        id: '11',
        curso: 'Historia del Perú',
        hora: '10:00 - 12:00',
        horaInicio: 10,
        horaFin: 12,
        duracion: 2,
        docente: 'Prof. Luis Vargas',
        ubicacion: 'Aula 301',
        tipo: 'presencial',
        icon: '🏛️',
        gradiente: 'from-red-600 via-orange-500 to-amber-400',
        estudiantes: 32
      }
    ]
  };

  const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  const diasDisplay = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const diasCompletos = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const horasDia = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  const totalClases = Object.values(horario).flat().length;
  const clasesVirtuales = Object.values(horario).flat().filter(c => c.tipo === 'virtual').length;
  const clasesPresenciales = Object.values(horario).flat().filter(c => c.tipo === 'presencial').length;

  const getClaseEnHora = (dia: string, hora: number): Clase | null => {
    const clases = horario[dia] || [];
    return clases.find(clase => hora >= clase.horaInicio && hora < clase.horaFin) || null;
  };

  const calcularPosicion = (horaInicio: number, duracion: number) => {
    const inicio = (horaInicio - 7) * 80;
    const altura = duracion * 80;
    return { top: inicio, height: altura };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Hero Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold text-gray-100 mb-2 flex items-center gap-3">
                <span className="text-5xl">📅</span>
                Mi Calendario
              </h1>
              <p className="text-xl text-gray-400">Organiza tu semana académica de forma inteligente</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-[#0d1512] border border-gray-800 rounded-xl text-gray-100 font-semibold hover:border-[#006B4B] transition-all flex items-center gap-2">
                <Plus size={20} />
                Nueva Clase
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#006B4B]/30 transition-all flex items-center gap-2">
                <Download size={20} />
                Exportar
              </button>
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-6xl opacity-10">📚</div>
              <div className="relative z-10">
                <p className="text-white/80 text-sm mb-1">Total Clases</p>
                <p className="text-4xl font-bold text-white">{totalClases}</p>
                <p className="text-white/60 text-xs mt-1">Esta semana</p>
              </div>
            </div>

            <div className="bg-[#0d1512] rounded-2xl p-5 border border-gray-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Presenciales</p>
                  <p className="text-3xl font-bold text-gray-100">{clasesPresenciales}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1512] rounded-2xl p-5 border border-gray-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Video className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Virtuales</p>
                  <p className="text-3xl font-bold text-gray-100">{clasesVirtuales}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1512] rounded-2xl p-5 border border-gray-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Horas/Semana</p>
                  <p className="text-3xl font-bold text-gray-100">22h</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1512] rounded-2xl p-5 border border-gray-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Target className="text-orange-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Asistencia</p>
                  <p className="text-3xl font-bold text-gray-100">94%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Calendar Grid - 3 columns */}
          <div className="xl:col-span-3">
            <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
              {/* Calendar Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-gray-100">Semana Actual</h2>
                  <div className="flex items-center gap-2">
                    <button className="p-2 bg-[#0a0e0d] hover:bg-[#006B4B] rounded-lg transition-all">
                      <ChevronLeft className="text-gray-400" size={20} />
                    </button>
                    <span className="px-4 py-2 bg-[#0a0e0d] rounded-lg text-gray-100 font-semibold">
                      7 - 13 Dic, 2025
                    </span>
                    <button className="p-2 bg-[#0a0e0d] hover:bg-[#006B4B] rounded-lg transition-all">
                      <ChevronRight className="text-gray-400" size={20} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-[#006B4B] text-white rounded-lg font-semibold">
                    Semana
                  </button>
                  <button className="px-4 py-2 bg-[#0a0e0d] text-gray-400 rounded-lg hover:text-gray-200">
                    Día
                  </button>
                  <button className="px-4 py-2 bg-[#0a0e0d] text-gray-400 rounded-lg hover:text-gray-200">
                    Mes
                  </button>
                </div>
              </div>

              {/* Modern Timeline View */}
              <div className="relative">
                {/* Days Header */}
                <div className="grid grid-cols-7 gap-3 mb-4">
                  <div className="text-center py-2"></div>
                  {diasCompletos.map((dia, idx) => (
                    <div key={idx} className="bg-[#0a0e0d] rounded-xl p-3 text-center border border-gray-800">
                      <p className="font-bold text-gray-100 text-sm">{dia}</p>
                      <p className="text-xs text-gray-500 mt-1">{8 + idx} Dic</p>
                      <div className="mt-2 flex justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {horario[dias[idx]]?.length || 0}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Timeline Grid */}
                <div className="overflow-x-auto">
                  <div style={{ minWidth: '1100px' }}>
                    {horasDia.map((hora) => (
                      <div key={hora} className="grid grid-cols-7 gap-3 mb-2">
                        {/* Time Label */}
                        <div className="flex items-start justify-center pt-2">
                          <span className="text-sm font-bold text-gray-400">
                            {hora}:00
                          </span>
                        </div>

                        {/* Day Cells */}
                        {dias.map((dia) => {
                          const clase = getClaseEnHora(dia, hora);
                          
                          if (clase && clase.horaInicio === hora) {
                            return (
                              <div
                                key={dia}
                                className={`relative rounded-2xl overflow-hidden cursor-pointer group`}
                                style={{ 
                                  height: `${clase.duracion * 80}px`,
                                  gridRow: `span 1`
                                }}
                              >
                                <div className={`absolute inset-0 bg-gradient-to-br ${clase.gradiente} p-4`}>
                                  {/* Card Content */}
                                  <div className="relative h-full flex flex-col justify-between">
                                    <div>
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="text-3xl">{clase.icon}</span>
                                        <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md px-2 py-1 rounded-full">
                                          {clase.tipo === 'virtual' ? (
                                            <Video size={12} className="text-white" />
                                          ) : (
                                            <MapPin size={12} className="text-white" />
                                          )}
                                          <span className="text-xs text-white font-semibold">
                                            {clase.tipo === 'virtual' ? 'Virtual' : 'Presencial'}
                                          </span>
                                        </div>
                                      </div>
                                      <h4 className="font-bold text-white text-sm mb-1 leading-tight">
                                        {clase.curso}
                                      </h4>
                                      <p className="text-white/80 text-xs mb-1">{clase.hora}</p>
                                      <p className="text-white/70 text-xs truncate">{clase.ubicacion}</p>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                      <span className="text-white/80 text-xs">{clase.docente}</span>
                                      {clase.tipo === 'virtual' && (
                                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-semibold transition-all">
                                          Unirse
                                        </button>
                                      )}
                                    </div>
                                  </div>

                                  {/* Hover Overlay */}
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                                </div>
                              </div>
                            );
                          }
                          
                          if (!clase || clase.horaInicio !== hora) {
                            return (
                              <div 
                                key={dia} 
                                className="bg-[#0a0e0d]/50 rounded-xl border border-gray-800/50 h-20"
                              ></div>
                            );
                          }
                          
                          return null;
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-800">
                <span className="text-sm text-gray-400 font-semibold">Modalidad:</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Presencial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Virtual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Híbrido</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Próxima Clase */}
            <div className="bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-8xl opacity-10">⏰</div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="text-white" size={20} />
                  <span className="text-white/80 font-semibold text-sm">PRÓXIMA CLASE</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Matemática</h3>
                <p className="text-white/90 mb-4">Hoy a las 8:00 AM</p>
                <button className="w-full bg-white text-[#006B4B] py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Clases de Hoy */}
            <div className="bg-[#0d1512] rounded-2xl p-5 border border-gray-800">
              <h3 className="text-lg font-bold text-gray-100 mb-4">Clases de Hoy</h3>
              <div className="space-y-3">
                {horario.lunes.slice(0, 2).map((clase) => (
                  <div key={clase.id} className="bg-[#0a0e0d] rounded-xl p-4 border border-gray-800 hover:border-[#006B4B] transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{clase.icon}</span>
                      <div className="flex-1">
                        <p className="font-bold text-gray-100 text-sm">{clase.curso}</p>
                        <p className="text-xs text-gray-400">{clase.hora}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      {clase.tipo === 'virtual' ? (
                        <Video size={12} />
                      ) : (
                        <MapPin size={12} />
                      )}
                      <span>{clase.ubicacion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#0d1512] rounded-2xl p-5 border border-gray-800">
              <h3 className="text-lg font-bold text-gray-100 mb-4">Resumen</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Horas esta semana</span>
                  <span className="text-2xl font-bold text-[#00A676]">22h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Clases completadas</span>
                  <span className="text-2xl font-bold text-gray-100">5/11</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Asistencia</span>
                  <span className="text-2xl font-bold text-[#FFB800]">94%</span>
                </div>
              </div>
            </div>

            {/* Alert */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Bell className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-yellow-400 mb-1">Recordatorio</h4>
                  <p className="text-sm text-gray-300">
                    Tu clase virtual de Comunicación comienza en 30 minutos
                  </p>
                  <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-all">
                    Unirse Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}