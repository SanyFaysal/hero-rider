import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const li = (
    <>
      <Link to="/">
        <li className="mx-3 ">Jobs</li>
      </Link>
      <Link to="/">
        <li className="mx-3 ">Blogs</li>
      </Link>
      <Link to="/">
        <li className="mx-3 ">Contact</li>
      </Link>
    </>
  );
  return (
    <div
      className={`navbar lg:px-16 px-6 h-[10vh] sticky top-0 bg-gray-800 text-white font-semibold  z-40 bg-gray border-b duration-400 ease-in-out`}
    >
      <div className="navbar-start">
        <Link to="/" className="">
          Hero Rider
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        {/* {user?.email && !user?.role && (
          <>
            <Link to="/register" className="mr-4">
              Register
            </Link>
            <button onClick={handleLogOut}>Logout</button>
          </>
        )} */}

        {/* {user?.email && user?.role && (
          <>
            <Link to="/dashboard" className="mr-4">
              Dashboard
            </Link>
            <button onClick={handleLogOut}>Logout</button>
            <div className="ml-4"></div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                <span className="capitalize  bg-blue-100 text-blue-500 text-xl rounded-full px-2 py-[1px] ">
                  {user?.fullName.slice(0, 1)}
                </span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu px-3 py-5 shadow bg-base-100 rounded-box "
              >
                <li className="capitalize text-center">{user?.fullName}</li>
                <li className="font-thin text-center  bg-gray-500 rounded-xl text-white px-2 my-2">
                  {user?.email}
                </li>
                <li className="capitalize text-center">{user?.role}</li>
              </ul>
            </div>
          </>
        )} */}
        {/* {!user?.email && (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
          </>
        )} */}
        <div className="dropdown  dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* <BsList /> */}
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {li}
          </ul>
        </div>
      </div>
    </div>
  );
}
