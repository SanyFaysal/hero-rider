import React from "react";
import { useNavigate } from "react-router-dom";
import bike_driving from "../assets/vector/bike_driving_learner.jpeg";
import car_driving from "../assets/vector/car_driving_learner.avif";
export default function Packages() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[80vh] ">
        <h1 className="text-center my-9 text-3xl  font-semibold">
          Our Packages
        </h1>

        <div className="flex justify-center gap-16">
          <div className="flex  gap-6 bg-slate-100 justify-between transition-all rounded-lg py-5 px-7  hover:shadow-md  group">
            <img className="w-[30vh] h-[30vh]" src={bike_driving} alt="" />
            <div>
              <div>
                Package Name
                <p className="text-center text-2xl font-semibold">
                  Bike Driving Lesson{" "}
                </p>
              </div>
              <div className="mt-4">
                Price
                <p className=" text-2xl font-semibold">150$</p>
              </div>
              <div className="flex justify-end mt-7">
                <button
                  onClick={() => navigate("/packages/bike-driving")}
                  className="bg-orange-500 text-white px-3 py-2  rounded-lg "
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-6  bg-slate-100 justify-between transition-all rounded-lg p-5 hover:shadow-md group">
            <img className="  w-[30vh] h-[30vh]" src={car_driving} alt="" />
            <div>
              <div>
                Package Name
                <p className="text-center text-2xl font-semibold">
                  Car Driving Lesson
                </p>
              </div>
              <div className="mt-4">
                Price
                <p className=" text-2xl font-semibold">200$</p>
              </div>
              <div className="flex justify-end mt-7">
                <button
                  onClick={() => navigate("/packages/car-driving")}
                  className="bg-orange-500 text-white px-3 py-2  rounded-lg "
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
