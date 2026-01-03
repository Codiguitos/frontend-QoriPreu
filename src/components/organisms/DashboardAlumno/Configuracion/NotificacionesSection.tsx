// src/components/organisms/configuracion/NotificacionesSection.tsx
import React from 'react';
import Text from '../../../atoms/Text';
import SettingItem from '../../../molecules/dashboard/Configuracion/SettingItem';
import { Mail, Bell, Smartphone } from 'lucide-react';

type NotificationSettings = {
  emailNuevasClases: boolean;
  emailTareas: boolean;
  emailNotas: boolean;
  pushNuevasClases: boolean;
  pushTareas: boolean;
  pushRecordatorios: boolean;
  smsRecordatorios: boolean;
};

type NotificacionesSectionProps = {
  notificaciones: NotificationSettings;
  onChange: (field: keyof NotificationSettings, value: boolean) => void;
};

const NotificacionesSection = ({ notificaciones, onChange }: NotificacionesSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
        <Text size="h3" className="text-gray-100 mb-2">Preferencias de Notificaciones</Text>
        <Text size="p" className="text-gray-400 mb-6">
          Configura cómo y cuándo quieres recibir notificaciones
        </Text>

        {/* Email Notifications */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Mail className="text-blue-400" size={20} />
            </div>
            <Text size="h5" className="text-gray-100">Notificaciones por Email</Text>
          </div>
          <div className="space-y-4 ml-13">
            <SettingItem
              title="Nuevas clases programadas"
              description="Recibe un email cuando se programe una nueva clase"
              checked={notificaciones.emailNuevasClases}
              onChange={(value) => onChange('emailNuevasClases', value)}
            />
            <SettingItem
              title="Tareas y trabajos"
              description="Notificaciones sobre tareas asignadas y fechas límite"
              checked={notificaciones.emailTareas}
              onChange={(value) => onChange('emailTareas', value)}
            />
            <SettingItem
              title="Notas y calificaciones"
              description="Recibe emails cuando se publiquen tus calificaciones"
              checked={notificaciones.emailNotas}
              onChange={(value) => onChange('emailNotas', value)}
            />
          </div>
        </div>

        {/* Push Notifications */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Bell className="text-purple-400" size={20} />
            </div>
            <Text size="h5" className="text-gray-100">Notificaciones Push</Text>
          </div>
          <div className="space-y-4 ml-13">
            <SettingItem
              title="Recordatorios de clases"
              description="15 minutos antes de cada clase"
              checked={notificaciones.pushRecordatorios}
              onChange={(value) => onChange('pushRecordatorios', value)}
            />
            <SettingItem
              title="Tareas pendientes"
              description="Recordatorios sobre tareas próximas a vencer"
              checked={notificaciones.pushTareas}
              onChange={(value) => onChange('pushTareas', value)}
            />
            <SettingItem
              title="Nuevas clases"
              description="Notificaciones cuando se añadan nuevas clases"
              checked={notificaciones.pushNuevasClases}
              onChange={(value) => onChange('pushNuevasClases', value)}
            />
          </div>
        </div>

        {/* SMS Notifications */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Smartphone className="text-green-400" size={20} />
            </div>
            <Text size="h5" className="text-gray-100">Notificaciones SMS</Text>
          </div>
          <div className="space-y-4 ml-13">
            <SettingItem
              title="Recordatorios importantes"
              description="Solo para eventos críticos como exámenes"
              checked={notificaciones.smsRecordatorios}
              onChange={(value) => onChange('smsRecordatorios', value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificacionesSection;