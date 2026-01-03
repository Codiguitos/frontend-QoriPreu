// src/components/atoms/Avatar.tsx
import React from 'react';
import { Camera } from 'lucide-react';

type AvatarProps = {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  editable?: boolean;
  onEdit?: () => void;
};

const sizeMap = {
  sm: 'w-16 h-16 text-xl',
  md: 'w-24 h-24 text-3xl',
  lg: 'w-32 h-32 text-4xl'
};

const Avatar = ({ initials, size = 'lg', editable = false, onEdit }: AvatarProps) => {
  return (
    <div className="relative">
      <div className={`${sizeMap[size]} bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold`}>
        {initials}
      </div>
      {editable && (
        <button
          onClick={onEdit}
          className="absolute bottom-0 right-0 w-10 h-10 bg-[#00A676] rounded-full flex items-center justify-center hover:bg-[#00d494] transition-all"
        >
          <Camera className="text-white" size={20} />
        </button>
      )}
    </div>
  );
};

export default Avatar;