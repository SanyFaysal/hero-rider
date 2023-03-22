import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Completion() {
  const navigate = useNavigate();

  return (
    <div className="text-center text-5xl my-32 ">
      <p className="text-green-500 "> Congratulation🎉</p>
      <p className="text-green-500 "> You successfully bought the package</p>
      <br />
      <p
        onClick={() => navigate("/")}
        className="text-xl mt8 inline-block hover:cursor-pointer bg-orange-100 text-orange-500 font-semibold px-2 py-1 rounded-lg"
      >
        <FiArrowLeft className="inline" /> Go to home
      </p>
    </div>
  );
}
