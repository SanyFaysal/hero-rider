import React from "react";
import { useNavigate } from "react-router-dom";
import rider from "../../assets/vector/rider.jpg";
import driving from "../../assets/vector/driving-learner.jpg";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[80vh] ">
      <h1 className="text-center my-7 text-2xl  font-bold">Register as ...</h1>
      <div className="flex justify-evenly ">
        <div
          onClick={() => navigate("/register/rider")}
          className="flex flex-col bg-slate-100 justify-between transition-all rounded-lg p-5 border border-white hover:border-blue-500 hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-[50vh] w-[60vh]" src={rider} alt="" />
          <p className="text-center text-3xl">Rider</p>
        </div>
        <div
          onClick={() => navigate("/register/employer")}
          className="flex flex-col bg-slate-100 justify-between transition-all rounded-lg p-5 border border-white hover:border-blue-500 hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-[50vh] w-[60vh]" src={driving} alt="" />
          <p className="text-center text-3xl">Driving Lesson Learner</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
