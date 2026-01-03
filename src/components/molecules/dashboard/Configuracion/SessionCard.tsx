// src/components/molecules/configuracion/SessionCard.tsx
import React from 'react';
import Text from '../../../atoms/Text';

type SessionCardProps = {
  icon: React.ReactNode;
  device: string;
  location: string;
  isCurrent?: boolean;
  onLogout?: () => void;
};

const SessionCard = ({ icon, device, location, isCurrent, onLogout }: SessionCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <Text size="p" className="font-semibold text-gray-100">{device}</Text>
          <Text size="small" className="text-gray-400">{location}</Text>
        </div>
      </div>
      {isCurrent ? (
        <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-semibold">
          Actual
        </span>
      ) : (
        <button
          onClick={onLogout}
          className="text-red-400 hover:text-red-300 text-sm font-semibold"
        >
          Cerrar sesión
        </button>
      )}
    </div>
  );
};

export default SessionCard;