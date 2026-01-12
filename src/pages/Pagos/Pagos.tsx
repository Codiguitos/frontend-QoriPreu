import { useState } from 'react'
import { CreditCard, Smartphone, ArrowLeft, Lock, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router'

const Pagos = () => {
    const navigate = useNavigate()
    const [metodoPago, setMetodoPago] = useState<'tarjeta' | 'yape'>('tarjeta')
    const [pagoExitoso, setPagoExitoso] = useState(false)

    const planSeleccionado = {
        nombre: 'Plan Premium',
        precio: 350,
        duracion: 'Mensual',
        beneficios: [
            'Acceso a todos los cursos',
            'Clases en vivo ilimitadas',
            'Material descargable',
            'Asesoría personalizada',
            'Simulacros de examen'
        ]
    }

    const handlePago = (e: React.FormEvent) => {
        e.preventDefault()
        setPagoExitoso(true)
        setTimeout(() => {
            navigate('/das')
        }, 3000)
    }

    if (pagoExitoso) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] flex items-center justify-center p-6'>
                <div className='bg-[#0d1512] rounded-2xl p-12 border border-gray-800 max-w-md w-full text-center'>
                    <div className='w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                        <CheckCircle size={48} className='text-white' />
                    </div>
                    <h1 className='text-3xl font-bold text-white mb-4'>¡Pago Exitoso!</h1>
                    <p className='text-gray-400 mb-6'>
                        Tu pago ha sido procesado correctamente. Serás redirigido a tu dashboard en unos segundos.
                    </p>
                    <div className='flex items-center justify-center gap-2 text-[#00A676]'>
                        <div className='w-2 h-2 bg-[#00A676] rounded-full animate-pulse' />
                        <span className='text-sm font-semibold'>Redirigiendo...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] p-6'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='mb-8'>
                    <button
                        onClick={() => navigate(-1)}
                        className='flex items-center gap-2 text-gray-400 hover:text-white transition-all mb-6'
                    >
                        <ArrowLeft size={20} />
                        <span>Volver</span>
                    </button>
                    <h1 className='text-5xl font-bold text-gray-100 mb-2'>Pasarela de Pagos</h1>
                    <p className='text-xl text-gray-400'>Completa tu inscripción de forma segura</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {/* Resumen del Plan */}
                    <div className='lg:col-span-1'>
                        <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800 sticky top-6'>
                            <h2 className='text-2xl font-bold text-white mb-6'>Resumen</h2>
                            
                            <div className='space-y-4 mb-6'>
                                <div>
                                    <h3 className='text-white font-semibold text-lg mb-2'>{planSeleccionado.nombre}</h3>
                                    <p className='text-gray-400 text-sm'>{planSeleccionado.duracion}</p>
                                </div>

                                <div className='border-t border-gray-800 pt-4'>
                                    <h4 className='text-gray-400 text-sm font-semibold mb-3'>Incluye:</h4>
                                    <ul className='space-y-2'>
                                        {planSeleccionado.beneficios.map((beneficio, index) => (
                                            <li key={index} className='flex items-start gap-2 text-gray-400 text-sm'>
                                                <CheckCircle size={16} className='text-[#00A676] mt-0.5 flex-shrink-0' />
                                                <span>{beneficio}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className='border-t border-gray-800 pt-4'>
                                <div className='flex items-center justify-between mb-2'>
                                    <span className='text-gray-400'>Subtotal</span>
                                    <span className='text-white font-semibold'>S/ {planSeleccionado.precio}</span>
                                </div>
                                <div className='flex items-center justify-between mb-4'>
                                    <span className='text-gray-400'>IGV (18%)</span>
                                    <span className='text-white font-semibold'>S/ {(planSeleccionado.precio * 0.18).toFixed(2)}</span>
                                </div>
                                <div className='flex items-center justify-between pt-4 border-t border-gray-800'>
                                    <span className='text-white font-bold text-lg'>Total</span>
                                    <span className='text-[#00A676] font-bold text-2xl'>
                                        S/ {(planSeleccionado.precio * 1.18).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de Pago */}
                    <div className='lg:col-span-2'>
                        <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
                            <h2 className='text-2xl font-bold text-white mb-6'>Método de Pago</h2>

                            {/* Métodos de Pago */}
                            <div className='grid grid-cols-2 gap-4 mb-8'>
                                <button
                                    onClick={() => setMetodoPago('tarjeta')}
                                    className={`p-4 rounded-lg border-2 transition-all ${
                                        metodoPago === 'tarjeta'
                                            ? 'border-[#006B4B] bg-[#006B4B]/10'
                                            : 'border-gray-800 hover:border-gray-700'
                                    }`}
                                >
                                    <CreditCard size={32} className={metodoPago === 'tarjeta' ? 'text-[#00A676]' : 'text-gray-400'} />
                                    <p className={`mt-2 text-sm font-semibold ${metodoPago === 'tarjeta' ? 'text-white' : 'text-gray-400'}`}>
                                        Tarjeta
                                    </p>
                                </button>

                                <button
                                    onClick={() => setMetodoPago('yape')}
                                    className={`p-4 rounded-lg border-2 transition-all ${
                                        metodoPago === 'yape'
                                            ? 'border-[#006B4B] bg-[#006B4B]/10'
                                            : 'border-gray-800 hover:border-gray-700'
                                    }`}
                                >
                                    <Smartphone size={32} className={metodoPago === 'yape' ? 'text-[#00A676]' : 'text-gray-400'} />
                                    <p className={`mt-2 text-sm font-semibold ${metodoPago === 'yape' ? 'text-white' : 'text-gray-400'}`}>
                                        Yape/Plin
                                    </p>
                                </button>
                            </div>

                            {/* Formulario según método */}
                            <form onSubmit={handlePago}>
                                {metodoPago === 'tarjeta' && (
                                    <div className='space-y-6'>
                                        <div>
                                            <label className='block text-gray-400 text-sm font-semibold mb-2'>
                                                Número de Tarjeta
                                            </label>
                                            <input
                                                type='text'
                                                placeholder='1234 5678 9012 3456'
                                                maxLength={19}
                                                className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className='block text-gray-400 text-sm font-semibold mb-2'>
                                                Nombre del Titular
                                            </label>
                                            <input
                                                type='text'
                                                placeholder='Como aparece en la tarjeta'
                                                className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                                required
                                            />
                                        </div>

                                        <div className='grid grid-cols-2 gap-4'>
                                            <div>
                                                <label className='block text-gray-400 text-sm font-semibold mb-2'>
                                                    Fecha de Vencimiento
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='MM/AA'
                                                    maxLength={5}
                                                    className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className='block text-gray-400 text-sm font-semibold mb-2'>
                                                    CVV
                                                </label>
                                                <input
                                                    type='text'
                                                    placeholder='123'
                                                    maxLength={3}
                                                    className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {metodoPago === 'yape' && (
                                    <div className='space-y-6'>
                                        <div className='bg-[#0a1410] rounded-lg p-6 text-center'>
                                            <div className='w-48 h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center'>
                                                <p className='text-gray-800 font-bold'>QR CODE</p>
                                            </div>
                                            <p className='text-gray-400 mb-2'>Escanea el código QR con tu app</p>
                                            <p className='text-white font-bold text-2xl'>987 654 321</p>
                                        </div>

                                        <div>
                                            <label className='block text-gray-400 text-sm font-semibold mb-2'>
                                                Número de Operación
                                            </label>
                                            <input
                                                type='text'
                                                placeholder='Ingresa el número de operación'
                                                className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Botón de Pago */}
                                <div className='mt-8'>
                                    <button
                                        type='submit'
                                        className='w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all'
                                    >
                                        <Lock size={20} />
                                        <span>Realizar Pago Seguro</span>
                                    </button>
                                    <p className='text-gray-500 text-xs text-center mt-3'>
                                        🔒 Tus datos están protegidos con encriptación SSL
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagos
