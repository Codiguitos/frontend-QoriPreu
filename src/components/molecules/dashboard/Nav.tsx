import React from 'react'
import NavItem from '../../atoms/NavItem'
import { BookOpen, Video, FileText, Calendar, Bell, User, LogOut, Home, BarChart, Settings, Download, Clock, ChevronRight, PlayCircle, Award, TrendingUp } from 'lucide-react';
import { useLocation } from 'react-router';
const Nav = () => {
    const location=useLocation()
    const items=[{
        name:"Inicio",
        to:"/das",
        icon:<Home />
    },
    {

        name:"Cursos",
        to:"/das/Mis-cursos",
        icon:<BookOpen/>
    },
    {
        name:"Calendario",
        to:"/das/Calendario",
        icon:<Calendar/>
    },
    {
        name:"Mis Notas",
        to:"/das/mis-notas",
        icon:<TrendingUp/>
    },
    {
        name:"Configuracion",
        to:"/das/Configuracion",
        icon:<Settings/>
    }
]
    return (
        <nav className='h-auto py-5 px-3'>
            {items.map(e=>(
                <NavItem to={e.to} active={location.pathname===e.to} >
                    {e.icon}
                    {e.name}
                </NavItem>
            ))}    
        </nav>
  )
}

export default Nav