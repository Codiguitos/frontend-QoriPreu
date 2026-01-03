// src/pages/Configuracion.tsx
import React, { useState } from 'react';
import Text from '../../../components/atoms/Text';
import Button from '../../../components/atoms/Button';
import NavItem from '../../../components/atoms/NavItem';
import PerfilSection from '../../../components/organisms/DashboardAlumno/Configuracion/PerfilSection';
import NotificacionesSection from '../../../components/organisms/DashboardAlumno/Configuracion/NotificacionesSection';
import SeguridadSection from '../../../components/organisms/DashboardAlumno/Configuracion/SeguridadSection';
import { User, Bell, Lock, Save, Check } from 'lucide-react';

type PerfilData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  dni: string;
  direccion: string;
  ciudad: string;
};

type NotificationSettings = {
  emailNuevasClases: boolean;
  emailTareas: boolean;
  emailNotas: boolean;
  pushNuevasClases: boolean;
  pushTareas: boolean;
  pushRecordatorios: boolean;
  smsRecordatorios: boolean;
};

const Configuracion = () => {
  const [seccionActiva, setSeccionActiva] = useState<string>('perfil');
  const [guardando, setGuardando] = useState<boolean>(false);
  const [mostrado, setMostrado] = useState<boolean>(false);
  
  const [perfil, setPerfil] = useState<PerfilData>({
    nombre: 'Juan',
    apellido: 'Díaz Mendoza',
    email: 'juan.diaz@email.com',
    telefono: '+51 987 654 321',
    dni: '12345678',
    direccion: 'Av. La Cultura 1234',
    ciudad: 'Cusco',
  });

  const [notificaciones, setNotificaciones] = useState<NotificationSettings>({
    emailNuevasClases: true,
    emailTareas: true,
    emailNotas: true,
    pushNuevasClases: true,
    pushTareas: true,
    pushRecordatorios: true,
    smsRecordatorios: false,
  });

  const secciones = [
    { id: 'perfil', nombre: 'Perfil', icono: User },
    { id: 'notificaciones', nombre: 'Notificaciones', icono: Bell },
    { id: 'seguridad', nombre: 'Seguridad', icono: Lock },
  ];

  const handlePerfilChange = (field: keyof PerfilData, value: string) => {
    setPerfil((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificacionesChange = (field: keyof NotificationSettings, value: boolean) => {
    setNotificaciones((prev) => ({ ...prev, [field]: value }));
  };

  const handleGuardar = () => {
    setGuardando(true);
    setTimeout(() => {
      setGuardando(false);
      setMostrado(true);
      setTimeout(() => setMostrado(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Text size="h2" className="text-gray-100 mb-2 flex items-center gap-3">
            <span className="text-5xl">⚙️</span>
            Configuración
          </Text>
          <Text size="p" className="text-gray-400">
            Personaliza tu experiencia en QoriPreu
          </Text>
        </div>

        {/* Success Alert */}
        {mostrado && (
          <div className="mb-6 bg-green-500/20 border border-green-500/30 rounded-2xl p-4 flex items-center gap-3">
            <Check className="text-green-400" size={24} />
            <Text size="p" className="text-green-400 font-semibold">
              ¡Cambios guardados exitosamente!
            </Text>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-[#0d1512] rounded-2xl p-4 border border-gray-800 sticky top-6">
              <nav className="space-y-2">
                {secciones.map((seccion) => {
                  const Icon = seccion.icono;
                  return (
                    <button
                      key={seccion.id}
                      onClick={() => setSeccionActiva(seccion.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                        seccionActiva === seccion.id
                          ? 'bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white'
                          : 'text-gray-400 hover:bg-[#0a0e0d] hover:text-gray-200'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{seccion.nombre}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {seccionActiva === 'perfil' && (
              <PerfilSection perfil={perfil} onChange={handlePerfilChange} />
            )}
            {seccionActiva === 'notificaciones' && (
              <NotificacionesSection
                notificaciones={notificaciones}
                onChange={handleNotificacionesChange}
              />
            )}
            {seccionActiva === 'seguridad' && <SeguridadSection />}

            {/* Save Button */}
            <div className="flex justify-end gap-4 mt-6">
              <Button variant="secondary" size="normal">
                Cancelar
              </Button>
              <Button
                variant="primary"
                size="normal"
                onClick={handleGuardar}
                disabled={guardando}
                className="flex items-center gap-2"
              >
                {guardando ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    Guardar Cambios
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;