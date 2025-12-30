import { Elements } from "@stripe/react-stripe-js";
import stripePromise from  "../../../../config/stripe"
import PaymentSystem from "./PagarCursos";

<Elements stripe={stripePromise}>
  <PaymentSystem selectedCursos={selectedCursos} />
</Elements>
