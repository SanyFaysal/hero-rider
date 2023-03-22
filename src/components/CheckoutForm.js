import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import { PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error) {
      setMessage(error.message);
    }
    setIsProcessing(false);
  };
  return (
    <form id="payment-form" className="" onSubmit={handleSubmit}>
      <PaymentElement />

      <div className="flex justify-end">
        <input
          disable={isProcessing}
          id="submit"
          type="submit"
          value={isProcessing ? "Processing..." : "Pay Now"}
          className="bg-green-100 hover:cursor-pointer px-3 py-2 rounded-lg font-semibold text-green-500 mt-5 ml-auto"
        />

        {/* <span>{isProcessing ? "Processing..." : "Pay Now"}</span> */}
      </div>

      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
