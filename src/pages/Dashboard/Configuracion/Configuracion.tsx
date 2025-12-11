import React, { useState } from 'react';
import { User, Bell, Lock, Palette, Globe, Mail, Smartphone, Shield, Eye, EyeOff, Camera, Save, AlertCircle, Check, Moon, Sun, Monitor } from 'lucide-react';

interface UserProfile {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  dni: string;
  direccion: string;
  ciudad: string;
  foto: string;
}

interface NotificationSettings {
  emailNuevasClases: boolean;
  emailTareas: boolean;
  emailNotas: boolean;
  pushNuevasClases: boolean;
  pushTareas: boolean;
  pushRecordatorios: boolean;
  smsRecordatorios: boolean;
}

interface PrivacySettings {
  perfilPublico: boolean;
  mostrarEmail: boolean;
  mostrarTelefono: boolean;
  mostrarNotas: boolean;
}

interface AppearanceSettings {
  tema: 'claro' | 'oscuro' | 'auto';
  colorPrimario: string;
  tamanoFuente: 'pequeño' | 'mediano' | 'grande';
}

export default function Configuracion() {
  const [seccionActiva, setSeccionActiva] = useState<string>('perfil');
  const [mostrarPassword, setMostrarPassword] = useState<boolean>(false);
  const [guardando, setGuardando] = useState<boolean>(false);
  const [mostrado, setMostrado] = useState<boolean>(false);

  const [perfil, setPerfil] = useState<UserProfile>({
    nombre: 'Juan',
    apellido: 'Díaz Mendoza',
    email: 'juan.diaz@email.com',
    telefono: '+51 987 654 321',
    dni: '12345678',
    direccion: 'Av. La Cultura 1234',
    ciudad: 'Cusco',
    foto: ''
  });

  const [notificaciones, setNotificaciones] = useState<NotificationSettings>({
    emailNuevasClases: true,
    emailTareas: true,
    emailNotas: true,
    pushNuevasClases: true,
    pushTareas: true,
    pushRecordatorios: true,
    smsRecordatorios: false
  });

  const [privacidad, setPrivacidad] = useState<PrivacySettings>({
    perfilPublico: false,
    mostrarEmail: false,
    mostrarTelefono: false,
    mostrarNotas: true
  });

  const [apariencia, setApariencia] = useState<AppearanceSettings>({
    tema: 'oscuro',
    colorPrimario: '#00A676',
    tamanoFuente: 'mediano'
  });

  const secciones = [
    { id: 'perfil', nombre: 'Perfil', icono: User },
    { id: 'notificaciones', nombre: 'Notificaciones', icono: Bell },
    { id: 'seguridad', nombre: 'Seguridad', icono: Lock },
    { id: 'apariencia', nombre: 'Apariencia', icono: Palette },
    { id: 'privacidad', nombre: 'Privacidad', icono: Shield }
  ];

  const coloresPrimarios = [
    { nombre: 'Verde QoriPreu', color: '#00A676' },
    { nombre: 'Azul', color: '#3B82F6' },
    { nombre: 'Morado', color: '#8B5CF6' },
    { nombre: 'Rosa', color: '#EC4899' },
    { nombre: 'Naranja', color: '#F59E0B' }
  ];

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
          <h1 className="text-5xl font-bold text-gray-100 mb-2 flex items-center gap-3">
            <span className="text-5xl">⚙️</span>
            Configuración
          </h1>
          <p className="text-xl text-gray-400">Personaliza tu experiencia en QoriPreu</p>
        </div>

        {/* Success Alert */}
        {mostrado && (
          <div className="mb-6 bg-green-500/20 border border-green-500/30 rounded-2xl p-4 flex items-center gap-3 animate-in">
            <Check className="text-green-400" size={24} />
            <p className="text-green-400 font-semibold">¡Cambios guardados exitosamente!</p>
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
            {/* Perfil */}
            {seccionActiva === 'perfil' && (
              <div className="space-y-6">
                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-100 mb-6">Información Personal</h2>

                  {/* Avatar Section */}
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-800">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        JD
                      </div>
                      <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#00A676] rounded-full flex items-center justify-center hover:bg-[#00d494] transition-all">
                        <Camera className="text-white" size={20} />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100">{perfil.nombre} {perfil.apellido}</h3>
                      <p className="text-gray-400 mb-3">Estudiante • Plan Ordinario</p>
                      <button className="text-[#00A676] hover:text-[#00d494] font-semibold text-sm">
                        Cambiar foto de perfil
                      </button>
                    </div>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 font-semibold mb-2 text-sm">Nombres</label>
                      <input
                        type="text"
                        value={perfil.nombre}
                        onChange={(e) => setPerfil({ ...perfil, nombre: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-semibold mb-2 text-sm">Apellidos</label>
                      <input
                        type="text"
                        value={perfil.apellido}
                        onChange={(e) => setPerfil({ ...perfil, apellido: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-semibold mb-2 text-sm">Email</label>
                      <input
                        type="email"
                        value={perfil.email}
                        onChange={(e) => setPerfil({ ...perfil, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-semibold mb-2 text-sm">Teléfono</label>
                      <input
                        type="tel"
                        value={perfil.telefono}
                        onChange={(e) => setPerfil({ ...perfil, telefono: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-semibold mb-2 text-sm">DNI</label>
                      <input
                        type="text"
                        value={perfil.dni}
                        onChange={(e) => setPerfil({ ...perfil, dni: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-semibold mb-2 text-sm">Ciudad</label>
                      <input
                        type="text"
                        value={perfil.ciudad}
                        onChange={(e) => setPerfil({ ...perfil, ciudad: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-gray-400 font-semibold mb-2 text-sm">Dirección</label>
                      <input
                        type="text"
                        value={perfil.direccion}
                        onChange={(e) => setPerfil({ ...perfil, direccion: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notificaciones */}
            {seccionActiva === 'notificaciones' && (
              <div className="space-y-6">
                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-100 mb-2">Preferencias de Notificaciones</h2>
                  <p className="text-gray-400 mb-6">Configura cómo y cuándo quieres recibir notificaciones</p>

                  {/* Email Notifications */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="text-blue-400" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-100">Notificaciones por Email</h3>
                    </div>
                    <div className="space-y-4 ml-13">
                      <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                        <div>
                          <p className="font-semibold text-gray-100">Nuevas clases programadas</p>
                          <p className="text-sm text-gray-400">Recibe un email cuando se programe una nueva clase</p>
                        </div>
                        <label className="relative inline-block w-14 h-7">
                          <input
                            type="checkbox"
                            checked={notificaciones.emailNuevasClases}
                            onChange={(e) => setNotificaciones({ ...notificaciones, emailNuevasClases: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                        <div>
                          <p className="font-semibold text-gray-100">Tareas y trabajos</p>
                          <p className="text-sm text-gray-400">Notificaciones sobre tareas asignadas y fechas límite</p>
                        </div>
                        <label className="relative inline-block w-14 h-7">
                          <input
                            type="checkbox"
                            checked={notificaciones.emailTareas}
                            onChange={(e) => setNotificaciones({ ...notificaciones, emailTareas: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                        <div>
                          <p className="font-semibold text-gray-100">Notas y calificaciones</p>
                          <p className="text-sm text-gray-400">Recibe emails cuando se publiquen tus calificaciones</p>
                        </div>
                        <label className="relative inline-block w-14 h-7">
                          <input
                            type="checkbox"
                            checked={notificaciones.emailNotas}
                            onChange={(e) => setNotificaciones({ ...notificaciones, emailNotas: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Push Notifications */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Bell className="text-purple-400" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-100">Notificaciones Push</h3>
                    </div>
                    <div className="space-y-4 ml-13">
                      <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                        <div>
                          <p className="font-semibold text-gray-100">Recordatorios de clases</p>
                          <p className="text-sm text-gray-400">15 minutos antes de cada clase</p>
                        </div>
                        <label className="relative inline-block w-14 h-7">
                          <input
                            type="checkbox"
                            checked={notificaciones.pushRecordatorios}
                            onChange={(e) => setNotificaciones({ ...notificaciones, pushRecordatorios: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                        <div>
                          <p className="font-semibold text-gray-100">Tareas pendientes</p>
                          <p className="text-sm text-gray-400">Recordatorios sobre tareas próximas a vencer</p>
                        </div>
                        <label className="relative inline-block w-14 h-7">
                          <input
                            type="checkbox"
                            checked={notificaciones.pushTareas}
                            onChange={(e) => setNotificaciones({ ...notificaciones, pushTareas: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* SMS Notifications */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Smartphone className="text-green-400" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-100">Notificaciones SMS</h3>
                    </div>
                    <div className="space-y-4 ml-13">
                      <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                        <div>
                          <p className="font-semibold text-gray-100">Recordatorios importantes</p>
                          <p className="text-sm text-gray-400">Solo para eventos críticos como exámenes</p>
                        </div>
                        <label className="relative inline-block w-14 h-7">
                          <input
                            type="checkbox"
                            checked={notificaciones.smsRecordatorios}
                            onChange={(e) => setNotificaciones({ ...notificaciones, smsRecordatorios: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Seguridad */}
            {seccionActiva === 'seguridad' && (
              <div className="space-y-6">
                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-100 mb-6">Seguridad de la Cuenta</h2>

                  {/* Change Password */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-100 mb-4">Cambiar Contraseña</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-400 font-semibold mb-2 text-sm">Contraseña Actual</label>
                        <div className="relative">
                          <input
                            type={mostrarPassword ? 'text' : 'password'}
                            className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676] pr-12"
                            placeholder="••••••••"
                          />
                          <button
                            onClick={() => setMostrarPassword(!mostrarPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                          >
                            {mostrarPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-400 font-semibold mb-2 text-sm">Nueva Contraseña</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 font-semibold mb-2 text-sm">Confirmar Nueva Contraseña</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 bg-[#0a0e0d] border border-gray-800 rounded-xl text-gray-100 focus:outline-none focus:border-[#00A676]"
                          placeholder="••••••••"
                        />
                      </div>
                      <button className="bg-[#00A676] hover:bg-[#00d494] text-white px-6 py-3 rounded-xl font-semibold transition-all">
                        Actualizar Contraseña
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Auth */}
                  <div className="mb-8 p-6 bg-[#0a0e0d] rounded-xl border border-gray-800">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <Shield className="text-green-400" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-100 mb-1">Autenticación de Dos Factores</h3>
                          <p className="text-sm text-gray-400">Añade una capa extra de seguridad a tu cuenta</p>
                        </div>
                      </div>
                      <button className="bg-[#006B4B] hover:bg-[#00A676] text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm">
                        Activar
                      </button>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-100 mb-4">Sesiones Activas</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Monitor className="text-blue-400" size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-100">Chrome en Windows</p>
                            <p className="text-sm text-gray-400">Lima, Perú • Activo ahora</p>
                          </div>
                        </div>
                        <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-semibold">Actual</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <Smartphone className="text-purple-400" size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-100">App Móvil - Android</p>
                            <p className="text-sm text-gray-400">Cusco, Perú • Hace 2 horas</p>
                          </div>
                        </div>
                        <button className="text-red-400 hover:text-red-300 text-sm font-semibold">
                          Cerrar sesión
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Apariencia */}
            {seccionActiva === 'apariencia' && (
              <div className="space-y-6">
                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-100 mb-6">Personalización</h2>

                  {/* Theme Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-100 mb-4">Tema</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        onClick={() => setApariencia({ ...apariencia, tema: 'claro' })}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          apariencia.tema === 'claro'
                            ? 'border-[#00A676] bg-[#00A676]/10'
                            : 'border-gray-800 bg-[#0a0e0d]'
                        }`}
                      >
                        <Sun className="mx-auto mb-3 text-yellow-400" size={32} />
                        <p className="font-semibold text-gray-100 text-center">Claro</p>
                      </button>
                      <button
                        onClick={() => setApariencia({ ...apariencia, tema: 'oscuro' })}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          apariencia.tema === 'oscuro'
                            ? 'border-[#00A676] bg-[#00A676]/10'
                            : 'border-gray-800 bg-[#0a0e0d]'
                        }`}
                      >
                        <Moon className="mx-auto mb-3 text-blue-400" size={32} />
                        <p className="font-semibold text-gray-100 text-center">Oscuro</p>
                      </button>
                      <button
                        onClick={() => setApariencia({ ...apariencia, tema: 'auto' })}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          apariencia.tema === 'auto'
                            ? 'border-[#00A676] bg-[#00A676]/10'
                            : 'border-gray-800 bg-[#0a0e0d]'
                        }`}
                      >
                        <Monitor className="mx-auto mb-3 text-purple-400" size={32} />
                        <p className="font-semibold text-gray-100 text-center">Auto</p>
                      </button>
                    </div>
                  </div>

                  {/* Color Primario */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-100 mb-4">Color Primario</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {coloresPrimarios.map((item) => (
                        <button
                          key={item.color}
                          onClick={() => setApariencia({ ...apariencia, colorPrimario: item.color })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            apariencia.colorPrimario === item.color
                              ? 'border-white'
                              : 'border-gray-800'
                          }`}
                          style={{ backgroundColor: item.color }}
                        >
                          <div className="h-12 flex items-center justify-center">
                            {apariencia.colorPrimario === item.color && (
                              <Check className="text-white" size={24} />
                            )}
                          </div>
                          <p className="text-white text-xs font-semibold text-center mt-2">{item.nombre}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tamaño de Fuente */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-100 mb-4">Tamaño de Fuente</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        onClick={() => setApariencia({ ...apariencia, tamanoFuente: 'pequeño' })}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          apariencia.tamanoFuente === 'pequeño'
                            ? 'border-[#00A676] bg-[#00A676]/10'
                            : 'border-gray-800 bg-[#0a0e0d]'
                        }`}
                      >
                        <p className="text-sm font-semibold text-gray-100 text-center">Pequeño</p>
                        <p className="text-xs text-gray-400 text-center mt-2">Aa</p>
                      </button>
                      <button
                        onClick={() => setApariencia({ ...apariencia, tamanoFuente: 'mediano' })}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          apariencia.tamanoFuente === 'mediano'
                            ? 'border-[#00A676] bg-[#00A676]/10'
                            : 'border-gray-800 bg-[#0a0e0d]'
                        }`}
                      >
                        <p className="text-base font-semibold text-gray-100 text-center">Mediano</p>
                        <p className="text-sm text-gray-400 text-center mt-2">Aa</p>
                      </button>
                      <button
                        onClick={() => setApariencia({ ...apariencia, tamanoFuente: 'grande' })}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          apariencia.tamanoFuente === 'grande'
                            ? 'border-[#00A676] bg-[#00A676]/10'
                            : 'border-gray-800 bg-[#0a0e0d]'
                        }`}
                      >
                        <p className="text-lg font-semibold text-gray-100 text-center">Grande</p>
                        <p className="text-base text-gray-400 text-center mt-2">Aa</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacidad */}
            {seccionActiva === 'privacidad' && (
              <div className="space-y-6">
                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-100 mb-2">Configuración de Privacidad</h2>
                  <p className="text-gray-400 mb-6">Controla qué información es visible para otros</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-100">Perfil Público</p>
                        <p className="text-sm text-gray-400">Permite que otros estudiantes vean tu perfil</p>
                      </div>
                      <label className="relative inline-block w-14 h-7">
                        <input
                          type="checkbox"
                          checked={privacidad.perfilPublico}
                          onChange={(e) => setPrivacidad({ ...privacidad, perfilPublico: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-100">Mostrar Email</p>
                        <p className="text-sm text-gray-400">Tu email será visible en tu perfil público</p>
                      </div>
                      <label className="relative inline-block w-14 h-7">
                        <input
                          type="checkbox"
                          checked={privacidad.mostrarEmail}
                          onChange={(e) => setPrivacidad({ ...privacidad, mostrarEmail: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-100">Mostrar Teléfono</p>
                        <p className="text-sm text-gray-400">Tu teléfono será visible para otros estudiantes</p>
                      </div>
                      <label className="relative inline-block w-14 h-7">
                        <input
                          type="checkbox"
                          checked={privacidad.mostrarTelefono}
                          onChange={(e) => setPrivacidad({ ...privacidad, mostrarTelefono: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-100">Mostrar Notas</p>
                        <p className="text-sm text-gray-400">Permite que otros vean tus calificaciones</p>
                      </div>
                      <label className="relative inline-block w-14 h-7">
                        <input
                          type="checkbox"
                          checked={privacidad.mostrarNotas}
                          onChange={(e) => setPrivacidad({ ...privacidad, mostrarNotas: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00A676]"></div>
                      </label>
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-red-400 mb-2">Zona de Peligro</h3>
                        <p className="text-sm text-gray-300 mb-4">
                          Estas acciones son permanentes y no se pueden deshacer. Por favor, procede con precaución.
                        </p>
                        <div className="space-y-3">
                          <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50 py-3 rounded-lg font-semibold transition-all">
                            Descargar Mis Datos
                          </button>
                          <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50 py-3 rounded-lg font-semibold transition-all">
                            Eliminar Mi Cuenta
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end gap-4 mt-6">
              <button className="px-6 py-3 bg-[#0d1512] border border-gray-800 text-gray-100 rounded-xl font-semibold hover:border-gray-700 transition-all">
                Cancelar
              </button>
              <button
                onClick={handleGuardar}
                disabled={guardando}
                className="px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#006B4B]/30 transition-all flex items-center gap-2 disabled:opacity-50"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}