// src/components/organisms/configuracion/SeguridadSection.tsx
import React, { useState } from 'react';
import Text from '../../../atoms/Text';
import Input from '../../../atoms/Input';
import Label from '../../../atoms/Label';
import Button from '../../../atoms/Button';
import SessionCard from '../../../molecules/dashboard/Configuracion/SessionCard';
import { Eye, EyeOff, Shield, Monitor, Smartphone } from 'lucide-react';

const SeguridadSection = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const sessions = [
    {
      device: 'Chrome en Windows',
      location: 'Lima, Perú • Activo ahora',
      icon: <Monitor className="text-blue-400" size={20} />,
      isCurrent: true
    },
    {
      device: 'App Móvil - Android',
      location: 'Cusco, Perú • Hace 2 horas',
      icon: <Smartphone className="text-purple-400" size={20} />,
      isCurrent: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
        <Text size="h3" className="text-gray-100 mb-6">Seguridad de la Cuenta</Text>

        {/* Change Password */}
        <div className="mb-8">
          <Text size="h5" className="text-gray-100 mb-4">Cambiar Contraseña</Text>
          <div className="space-y-4">
            <div>
              <Label>Contraseña Actual</Label>
              <div className="relative">
                <Input
                  type={mostrarPassword ? 'text' : 'password'}
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
              <Label>Nueva Contraseña</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <Label>Confirmar Nueva Contraseña</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button variant="primary" size="normal">
              Actualizar Contraseña
            </Button>
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
                <Text size="h6" className="text-gray-100 mb-1">
                  Autenticación de Dos Factores
                </Text>
                <Text size="small" className="text-gray-400">
                  Añade una capa extra de seguridad a tu cuenta
                </Text>
              </div>
            </div>
            <Button variant="primary" size="small">
              Activar
            </Button>
          </div>
        </div>

        {/* Active Sessions */}
        <div>
          <Text size="h5" className="text-gray-100 mb-4">Sesiones Activas</Text>
          <div className="space-y-3">
            {sessions.map((session, index) => (
              <SessionCard
                key={index}
                icon={session.icon}
                device={session.device}
                location={session.location}
                isCurrent={session.isCurrent}
                onLogout={() => console.log('Cerrar sesión')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeguridadSection;