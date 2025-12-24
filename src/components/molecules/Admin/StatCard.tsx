// Molecule: Estadística Card usando Glass
// Molecule: Card de Docente para Admin
import React, { useState } from 'react';
import { BookOpen, Users, UserCheck, Settings, LogOut, Search, Plus, Edit, Trash2, Eye, X, Mail, Phone, Calendar, Clock, Award, TrendingUp, GraduationCap, Filter, Download, ChevronRight, Video, FileText } from 'lucide-react';

// Importar tus atoms existentes (simulados aquí, en tu proyecto los importarías normalmente)
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';
import Text from '../../atoms/Text';
import Avatar from '../../atoms/Avatar';
import Glass from '../../atoms/Glass';
import NavItem from '../../atoms/NavItem';
type StatCardProps = {
    titulo:string,
    valor:string
    variant?:string,
    cambio:number,
    icon?:any
}

export const StatCard = ({ icon: Icon, titulo, valor, cambio, variant = 'primary' }: StatCardProps) => (
  <Glass className="hover:bg-white/15 transition-all cursor-pointer">
    <div className='flex items-center justify-between mb-3'>
      <div className={`w-12 h-12 ${variant === 'primary' ? 'bg-gradient' : 'bg-blue-500/20'} rounded-lg flex items-center justify-center`}>
        <Icon className='text-white' size={24} />
      </div>
      {cambio && (
        <span className={`text-sm font-semibold ${cambio > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {cambio > 0 ? '+' : ''}{cambio}%
        </span>
      )}
    </div>
    <Text size='small' className='mb-1'>{titulo}</Text>
    <Text size='h3' className='text-white'>{valor}</Text>
  </Glass>
);