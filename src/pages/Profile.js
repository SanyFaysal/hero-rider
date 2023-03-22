import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const data = useSelector((state) => state.auth);
  const user = data.user;

  if (!user.profilePicture) {
    return (
      <div className="w-full flex justify-center items-center h-[70vh] ">
        <p>loading ...</p>
      </div>
    );
  }
  return (
    <div className=" mt-5 mb-10  mx-12  rounded-lg">
      <div className="   text-gray-600 rounded-lg p-5 mb-4 ">
        <p className="text-center text-2xl mb-8">Profile</p>
        <div className="flex gap-16">
          <div className="mt-[-15px]">
            <span className="ml-1 text-lg"> Profile Picture</span>
            <img
              src={`http://localhost:5000/images/${user.profilePicture[0][0].filename}`}
              alt=""
              className="w-[150px] h-[150px] rounded-lg border-4 border-sky-100"
            />
          </div>
          <div className="">
            <span> Full Name</span>
            <p className="capitalize text-2xl  font-medium">{user.fullName}</p>

            <p className="mt-10"> Email Address</p>
            <p className=" text-xl  font-medium">{user.email}</p>
          </div>
          <div>
            <span> Age</span>
            <p className="capitalize text-xl  font-medium">{user.age}</p>

            <p className="mt-10"> Phone Number</p>
            <p className="capitalize text-xl  font-medium">{user.phone}</p>
          </div>
          <div>
            <span className=""> Vehicle Type</span>
            <p className="capitalize text-xl  font-medium ">
              {user.vehicleType}
            </p>

            <p className="mt-10"> Address</p>
            <p className="capitalize text-xl  font-medium">{user.address}</p>
          </div>
          <div className="">
            <span> Joined as a</span>
            <p className="capitalize text-xl  font-medium text-sky-500">
              {user.role}
            </p>
          </div>
        </div>
      </div>
      <hr />
      {user.role === "rider" && (
        <>
          <div className="p-5">
            <div className="flex  gap-16">
              <div>
                <span className=""> Car Name</span>
                <p className="capitalize text-xl  font-medium ">
                  {user.carName}
                </p>
              </div>
              <div>
                <span className=""> Car Model</span>
                <p className="capitalize text-xl  font-medium ">
                  {user.carModel}
                </p>
              </div>
              <div>
                <span className=""> Car Name Palate</span>
                <p className="capitalize text-xl  font-medium ">
                  {user.namePalate}
                </p>
              </div>
            </div>
          </div>
          <hr />
        </>
      )}
      <div className="p-5">
        <div className="grid grid-cols-2 gap-10 w-full h-full">
          <div>
            <span className="text-xl mb-2 inline-block">Nid Card Picture</span>
            <img
              src={`http://localhost:5000/images/${user.nid[0][0].filename}`}
              alt=""
              className="w-full h-full rounded-lg  "
            />
          </div>

          {user.role === "rider" ? (
            <div>
              <span className="text-xl mb-2 inline-block">
                Driving License Picture
              </span>
              <img
                src={`http://localhost:5000/images/${user.drivingLicense[0][0].filename}`}
                alt=""
                className="w-full h-full rounded-lg  "
              />
            </div>
          ) : (
            ""
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
