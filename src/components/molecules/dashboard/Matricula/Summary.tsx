import React from 'react'
import { BookOpen,DollarSign } from 'lucide-react'
import Button from '../../../atoms/Button'
import Text from '../../../atoms/Text'
type Props={
    nroCursos:number,
    totalPrice:number
}

const Summary = ({nroCursos,totalPrice}:Props) => {
  return (
    <div className=" bg-[#0d1512] backdrop-blur-sm rounded-xl p-4 border border-gray-800">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <BookOpen className="text-green-400" size={20} />
                <span className="text-gray-300">Cursos seleccionados: <span className="font-bold text-white">{nroCursos}</span></span>
            </div>
            <div className="flex items-center gap-2">
                <DollarSign className="text-green-400" size={20} />
                <span className="text-gray-300">Total: <span className="font-bold text-white">S/ {totalPrice}</span></span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Summary