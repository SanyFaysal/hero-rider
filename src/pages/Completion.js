import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Completion() {
  const navigate = useNavigate();

  return (
    <div className="text-center text-5xl my-32 ">
      Thanks you
      <br />
      <p
        onClick={() => navigate("/")}
        className="text-xl mt-10 inline-block hover:cursor-pointer bg-orange-100 text-orange-500 font-semibold px-2 py-1 rounded-lg"
      >
        <FiArrowLeft className="inline" /> Go to home
      </p>
    </div>
  );
}
