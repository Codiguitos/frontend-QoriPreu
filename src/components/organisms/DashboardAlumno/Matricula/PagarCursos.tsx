import React, { useState } from 'react';
import { CreditCard, Smartphone, Building2, CheckCircle, AlertCircle, Lock, Shield, Clock, Calendar, User, Mail, Phone, MapPin, FileText, Download, Printer, ChevronRight, X, Info } from 'lucide-react';
import type { Curso } from '../../../../type/Curso';
type Props={
  selectedCursos:Curso[]
}
const PaymentSystem = ({selectedCursos}:Props) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: '',
    phone: '',
    dni: '',
    address: ''
  });

  const subtotal = selectedCourses.reduce((sum, course) => sum + course.price, 0);
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const handlePayment = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Payment Section */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Payment Method Selection */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="text-green-400" />
                  Método de Pago
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === 'card'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <CreditCard className="mx-auto mb-2 text-green-400" size={32} />
                    <p className="font-semibold text-sm">Tarjeta</p>
                    <p className="text-xs text-gray-400">Débito/Crédito</p>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('yape')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === 'yape'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <Smartphone className="mx-auto mb-2 text-green-400" size={32} />
                    <p className="font-semibold text-sm">Yape/Plin</p>
                    <p className="text-xs text-gray-400">Pago móvil</p>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === 'bank'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <Building2 className="mx-auto mb-2 text-green-400" size={32} />
                    <p className="font-semibold text-sm">Transferencia</p>
                    <p className="text-xs text-gray-400">Bancaria</p>
                  </button>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 animate-in fade-in duration-500">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Número de Tarjeta</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                          maxLength={19}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                          placeholder="1234 5678 9012 3456"
                        />
                        <CreditCard className="absolute right-3 top-3 text-gray-500" size={20} />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Nombre en la Tarjeta</label>
                      <input
                        type="text"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value.toUpperCase())}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="JUAN PEREZ"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Fecha de Expiración</label>
                        <input
                          type="text"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          maxLength={5}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300 flex items-center gap-1">
                          CVV
                          <Info size={14} className="text-gray-500" />
                        </label>
                        <input
                          type="text"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          maxLength={4}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900/50 p-3 rounded-lg">
                      <Lock size={16} className="text-green-400" />
                      <span>Tu información está protegida con encriptación de nivel bancario</span>
                    </div>
                  </div>
                )}
              </div>
            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 sticky top-6">
                <h2 className="text-xl font-bold mb-4">Resumen de Compra</h2>
                
                {/* Courses List */}
              

               
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span>S/ {subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-400">
                      <span>Descuento ({(discount * 100).toFixed(0)}%)</span>
                      <span>- S/ {discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-3">
                    <span>Total</span>
                    <span className="text-green-400">S/ {total.toFixed(2)}</span>
                  </div>
                </div>

                

                {/* Payment Button */}
                <button
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2"
                >
                  <Lock size={20} />
                  Realizar Pago Seguro
                  <ChevronRight size={20} />
                </button>

              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PaymentSystem;