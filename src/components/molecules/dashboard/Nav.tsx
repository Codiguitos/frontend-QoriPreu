import React, { useState } from 'react';
import NavItem from '../../atoms/NavItem';
import { 
    BookOpen, 
    Video, 
    FileText, 
    Calendar, 
    Home, 
    Settings, 
    ChevronUp, 
    TrendingUp 
} from 'lucide-react';
import { useLocation } from 'react-router';

type NavItemProps={
    name:string,
    to:string,
    icon:React.ReactNode,
    cursos?:{name:string,to:string,icon:React.ReactNode}[]
}

type NavProps={
    items:NavItemProps[]
}
const Nav = ({items}:NavProps) => {

    const [openSection, setOpenSection] = useState<string | null>(null);
    const location = useLocation();

    const toggle = (name: string) => {
        setOpenSection(openSection === name ? null : name);
    }

    return (
        <nav className="h-auto py-5 px-3 flex flex-col gap-1">

            {items.map((item) => {

                const isOpen = openSection === item.name;

                return (
                    <div key={item.name}>

                        {/* Item principal */}
                        {item.cursos ? (
                            <NavItem
                                to={item.to}
                                onClick={() => toggle(item.name)}
                            >
                                {item.icon}
                                {item.name}
                                <ChevronUp
                                    className={`ml-auto transition-transform duration-300 ${
                                        isOpen ? "rotate-0" : "rotate-180"
                                    }`}
                                    size={18}
                                />
                            </NavItem>
                        ) : (
                            <NavItem
                                to={item.to}
                                active={location.pathname === item.to}
                            >
                                {item.icon}
                                {item.name}
                            </NavItem>
                        )}

                        {/* Submenú */}
                        {item.cursos && (
                            <div
                                className={`
                                    overflow-hidden transition-all duration-300 ml-4
                                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                `}
                            >
                                <div className="flex flex-col gap-1 mt-2">
                                    {item.cursos.map((curso) => (
                                        <NavItem
                                            key={curso.name}
                                            to={curso.to}
                                            active={location.pathname === curso.to}
                                            className="text-sm"
                                        >
                                            {curso.icon}
                                            {curso.name}
                                        </NavItem>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}

export default Nav;
