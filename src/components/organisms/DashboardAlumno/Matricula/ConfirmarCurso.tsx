import { CheckCircle,Mail,Calendar,Download,Printer } from 'lucide-react'
type Props={
    email:string,
    total:number,
}
const ConfirmarCurso = ({total,email}:Props) => {
  return (
    <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle size={40} />
              </div>
              
              <h1 className="text-3xl font-bold mb-4">¡Pago Exitoso!</h1>
              <p className="text-gray-300 mb-8">Tu matrícula ha sido confirmada correctamente</p>
              
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6 text-left">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1">Número de Orden</p>
                    <p className="font-bold">QP-2025-001234</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Fecha</p>
                    <p className="font-bold">27 Diciembre 2025</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Método de Pago</p>
                    <p className="font-bold">Tarjeta •••• 3456</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Total Pagado</p>
                    <p className="font-bold text-green-400">S/ {total}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 text-sm text-left">
                  <Mail className="inline mr-2 text-blue-400" size={16} />
                  Hemos enviado la confirmación a <span className="font-semibold">{email || 'tu correo'}</span>
                </div>
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 text-sm text-left">
                  <Calendar className="inline mr-2 text-green-400" size={16} />
                  Inicio de clases: <span className="font-semibold">Lunes 6 de Enero, 2025</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Download size={18} />
                  Descargar Comprobante
                </button>
                <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Printer size={18} />
                  Imprimir
                </button>
              </div>

              <button className="mt-6 text-green-400 hover:text-green-300 font-semibold">
                Volver al Inicio →
              </button>
            </div>
          </div>
  )
}

export default ConfirmarCurso