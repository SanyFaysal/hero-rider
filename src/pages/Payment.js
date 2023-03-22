import React, { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Payment() {
  const { user } = useSelector((state) => state.auth);
  const { name } = useParams();
  let amount;
  if (name === "bike-driving") {
    amount = 15000;
  }
  if (name === "car-driving") {
    amount = 20000;
  }
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
      body: JSON.stringify({ amount: amount }),
    })
      .then((res) => res.json())
      .then(({ clientSecret }) => {
        setClientSecret(clientSecret);
      });
  }, []);
  return (
    <div className=" w-1/2 mx-auto mt-12 shadow p-6 rounded-lg border">
      <div>
        <h1 className="text-2xl font-semibold">
          Hi,{" "}
          <span className="text-2xl capitalize text-orange-500">
            {user.fullName}
          </span>
        </h1>
        <p className="text-2xl mt-2  font-semibold">
          You are now buying the package{" "}
          <span className="text-sky-500 ">
            {" "}
            {name === "car-driving"
              ? "Car Driving Lesson"
              : "Bike Driving Lesson"}
          </span>
        </p>
        <p className="mb-10 font-semibold text-2xl ">
          Price : <span className="text-sky-500 text-3xl">{amount / 100}$</span>
        </p>
      </div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
