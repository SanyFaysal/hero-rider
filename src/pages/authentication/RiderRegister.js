import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useUserRegisterMutation } from "../../features/auth/authApi";
// import { setUser } from "../../features/auth/authSlice";

const RiderRegister = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  //   const {
  //     user: { email, fullName, _id },
  //   } = useSelector((state) => state.auth);
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const [employeeRegister, { data, isLoading, isSuccess, isError, error }] =
  //     useUserRegisterMutation();

  const onSubmit = (data) => {
    // const {
    //   fullName,
    //   gender,
    //   companyLocation,
    //   companyCategory,
    //   companyName,
    //   companyWebsite,
    //   contactNumber,
    //   country,
    //   employeeRange,
    //   roleInCompany,
    // } = data;
    // const user = {
    //   fullName,
    //   gender,
    //   //   email: email,
    //   role: "employee",
    //   contactNumber,
    //   country,
    //   company: {
    //     companyName,
    //     companyCategory,
    //     companyLocation,
    //     companyWebsite,
    //     roleInCompany,
    //     employeeRange,
    //   },
    // };
    console.log({ data });
    // employeeRegister({ id: _id, user });
  };

  //   useEffect(() => {
  //     if (isSuccess) {
  //       toast.success("Register success..", { id: "register" });
  //       reset();
  //       dispatch(setUser(data?.data));
  //       navigate("/");
  //     }
  //     if (isError) {
  //       toast.error(error?.data?.error, { id: "register" });
  //     }
  //   }, [isSuccess, isError, error, navigate, reset, data, dispatch]);
  //   console.log({ data, isLoading, isSuccess, isError, error });
  return (
    <div className="">
      <div className="flex justify-center items-center  my-4">
        <div className=" p-2 rounded-2xl">
          <form
            className=" mx-4 shadow-2lg lg:p-8 p-4 bg-white border rounded-2xl  gap-3  justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="w-full text-2xl text-center mb-5 font-semibold ">
              Register as <span className="text-sky-500">Rider</span>
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  //   defaultValue={fullName}
                  id="fullName"
                  {...register("fullName")}
                  className={` w-full bg-blue-50   capitalize focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>

              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  //   value={email}
                  {...register("email")}
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="email">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  //   value={email}
                  {...register("age")}
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>

              <div>
                <h1 className="mb-2">Gender</h1>
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="male"
                      required
                      {...register("gender")}
                      value="male"
                      className="radio radio-sm "
                    />
                    <label className="ml-2 text-lg" for="male">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="female"
                      {...register("gender")}
                      value="female"
                      className="radio radio-sm "
                    />
                    <label className="ml-1 text-lg" for="female">
                      Female
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="other"
                      {...register("gender")}
                      value="other"
                      className="radio radio-sm "
                    />
                    <label className="ml-2 text-lg " for="other">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="email">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="phone"
                  required
                  {...register("phone")}
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" htmlFor="email">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  {...register("address")}
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>

              {/* <hr className="w-full my-2 bg-black" /> */}
              {/* <div className="flex flex-col w-full max-w-xs">
                <label className="mb-1" for="country">
                  Country
                </label>
                <select
                  {...register("country")}
                  id="country"
                  required
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                >
                  {countries
                    .sort((a, b) =>
                      a?.name?.common?.localeCompare(b?.name?.common)
                    )
                    .map(({ name }) => (
                      <option value={name.common}>{name.common}</option>
                    ))}
                </select>
              </div> */}
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="companyName">
                  Profile Picture
                </label>
                <input
                  type="file"
                  required
                  {...register("profilePicture")}
                  id="profilePicture"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="companyName">
                  Driving License Picture
                </label>
                <input
                  type="file"
                  required
                  {...register("drivingLicense")}
                  id="drivingLicense"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="nid">
                  NID Picture
                </label>
                <input
                  type="file"
                  required
                  {...register("nid")}
                  id="nid"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="area">
                  Area
                </label>
                <input
                  type="text"
                  required
                  {...register("area")}
                  id="area"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              {/* <hr className="w-full my-2 bg-black" /> */}

              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="carName">
                  Car Name
                </label>
                <input
                  type="text"
                  required
                  {...register("carName")}
                  id="carName"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="carModel">
                  Car Model
                </label>
                <input
                  type="text"
                  required
                  {...register("carModel")}
                  id="carModel"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="numberPalate">
                  Car Name Palate
                </label>
                <input
                  type="text"
                  required
                  {...register("numberPalate")}
                  id="numberPalate"
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="companyLocation">
                  Vehicle Type
                </label>
                <select
                  {...register("vehicleType")}
                  id="vehicleType"
                  required
                  className={` w-full bg-blue-50    focus:outline-none focus:ring focus:ring-1 focus:ring-blue-500 px-4 py-3 rounded-lg`}
                >
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                </select>
              </div>
              {/* <hr className="w-full my-2 bg-black" /> */}
              <div className="flex flex-col w-full max-w-xs">
                <div className="form-control mt-">
                  <label className="block font-medium mb-2" htmlFor="email">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={!open1 ? "text" : "password"}
                      {...register("password")}
                      className={` w-full bg-blue-50  focus:outline-none  px-4 py-3 rounded-lg`}
                    />
                    <p className=" bg-blue-50 my-auto py-3 px-3   border-none text-blue-500 h-12 mx-auto w-12">
                      {open1 ? (
                        <FiEye
                          className="text-2xl "
                          onClick={() => setOpen1(false)}
                        />
                      ) : (
                        <FiEyeOff
                          onClick={() => setOpen1(true)}
                          className="text-2xl"
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <div className="form-control mt-">
                  <label className="block font-medium mb-2" htmlFor="email">
                    Confirm Password
                  </label>
                  <div className="input-group">
                    <input
                      type={!open ? "text" : "password"}
                      {...register("confirmPassword")}
                      className={` w-full bg-blue-50   focus:outline-none  px-4 py-3 rounded-lg`}
                    />
                    <p className=" bg-blue-50 my-auto py-3 px-3   border-none text-blue-500 h-12 mx-auto w-12">
                      {open ? (
                        <FiEye
                          className="text-2xl "
                          onClick={() => setOpen(false)}
                        />
                      ) : (
                        <FiEyeOff
                          onClick={() => setOpen(true)}
                          className="text-2xl"
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  justify-end  mt-8">
                <input
                  type="submit"
                  value="Register"
                  className="btn inline w-2/4"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RiderRegister;
