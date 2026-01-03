import {LogOut} from 'lucide-react'

type Props={
  name:string  | "",
  apellido:string|"",
  rol:string|"",
  Logout:()=>void
}
const CerrarSesion = ({name,apellido,rol,Logout}:Props) => {
  return (
    <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 mb-3 p-3 bg-[#0d1512] rounded-xl">
            <div className="w-10 h-10 bg-linear-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {name[0].toUpperCase() + apellido[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-white truncate">{name} {apellido}</p>
                <p className="text-xs text-gray-400">{rol}</p>
            </div>
        </div>
        <button onClick={Logout} className="w-full  cursor-pointer flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-[#0d1512] rounded-xl transition-all text-sm">
            <LogOut size={18} />
            <span>Cerrar Sesión</span>
        </button>
    </div>
  )
}

export default CerrarSesion