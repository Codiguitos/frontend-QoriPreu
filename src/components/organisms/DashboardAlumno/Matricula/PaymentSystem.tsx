import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useAlumnoStore } from "../../../../store/useAlumnoStore";
import { useEffect } from "react";
import { useNavigate } from "react-router";
type Props = {
  selectedCursos: any[];
};

const PaymentSystem = ({ selectedCursos }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  // Obtenemos el perfil del alumno desde el store
  const { Profile,getProfile } = useAlumnoStore();
  useEffect(() => {
    getProfile();
  }, []);
  const subtotal = selectedCursos.reduce(
    (sum, c) => sum + Number(c.Precio),
    0
  );
  console.log('Profile:', Profile);
  const handlePayment = async () => {
    if (!stripe || !elements) return;

    // Validación de seguridad
    if (!Profile || !Profile.DNI) {
        alert("Error: No se ha cargado el perfil del alumno.");
        return;
    }

    try {
        // 1️⃣ Backend: Creamos la intención de pago
        // IMPORTANTE: Usa la URL de tu variable de entorno, no localhost directo
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
        
        const res = await fetch(`${API_URL}/pagos/crear`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // Enviamos el DNI o CodigoAlumno real del store
            // (Nota: Asegúrate que tu backend espere 'codigoAlumno' o 'dni'. 
            // Si tu backend espera 'codigoAlumno' numérico y solo tienes DNI, 
            // el backend debería buscar el ID usando el DNI, o debes tener el ID en el store).
            codigoAlumno: Profile.DNI, // O Profile.codigoAlumno si lo tienes mapeado
            cursos: selectedCursos
          })
        });

        if (!res.ok) throw new Error("Error al iniciar el pago en el servidor");

        const { clientSecret } = await res.json();

        // 2️⃣ Stripe: Confirmamos el pago
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              name: `${Profile.Nombre} ${Profile.Apellido}`,
              email: Profile.Correo,
            },
          }
        });

        if (result.error) {
          Swal.fire('Error', result.error.message || 'Pago fallido', 'error');
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            Swal.fire('¡Éxito!', 'Pago realizado correctamente', 'success');
            navigate('/alumno')
            // Aquí deberías redirigir a "Mis Cursos" o limpiar el carrito
          }
        }
    } catch (error) {
        console.error(error);
        alert("Error procesando el pago");
    }
  };
console.log("stripe:", stripe);
console.log("elements:", elements);

  return (
    <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg">
      <h2 className="text-white text-xl mb-4">Pago</h2>

      <CardElement
  options={{
    style: {
      base: {
        color: "#ffffff",
        fontSize: "16px",
        "::placeholder": {
          color: "#9ca3af",
        },
      },
      invalid: {
        color: "#ef4444",
      },
    },
  }}
  className="p-4 bg-gray-800 rounded"
/>


      <div className="text-white mt-4">
        Total: S/ {subtotal.toFixed(2)}
      </div>
<button
  onClick={handlePayment}
  disabled={!stripe}
  className="mt-4 w-full bg-green-600 disabled:bg-gray-600 text-white py-3 rounded"
>
  Pagar
</button>
    </div>
  );
};

export default PaymentSystem;
