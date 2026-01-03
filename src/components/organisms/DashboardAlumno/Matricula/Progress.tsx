import { CheckCircle } from 'lucide-react'
const Progress = () => {
  return (
    <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
                <CheckCircle size={20} />
              </div>
              <span className="ml-2 text-sm font-semibold">Selección</span>
            </div>
            <div className="w-24 h-1 bg-green-500"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
                2
              </div>
              <span className="ml-2 text-sm font-semibold text-green-400">Confirmación</span>
            </div>
            <div className="w-24 h-1 bg-gray-700"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold">
                3
              </div>
              <span className="ml-2 text-sm text-gray-500">Pago</span>
            </div>
          </div>
        </div>
  )
}

export default Progress