import React, { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

export default function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/config")
      .then((res) => res.json())
      .then(({ publishableKey }) => {
        setStripePromise(loadStripe(publishableKey));
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/charge", {
      method: "POST",
      body: JSON.stringify({ amount: 20000 }),
    })
      .then((res) => res.json())
      .then(({ clientSecret }) => {
        setClientSecret(clientSecret);
      });
  }, []);
  return (
    <div className=" w-1/2 mx-auto mt-12 shadow p-6 rounded-lg border">
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
