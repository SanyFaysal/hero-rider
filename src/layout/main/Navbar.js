import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const li = (
    <>
      <Link to="/jobs">
        <li className="mx-3 ">Jobs</li>
      </Link>
      <Link to="/blogs">
        <li className="mx-3 ">Blogs</li>
      </Link>
      <Link to="/contact">
        <li className="mx-3 ">Contact</li>
      </Link>
    </>
  );
  return (
    <div
      className={`navbar lg:px-16 px-6 h-[10vh] sticky top-0  font-semibold  z-40 
   bg-black text-white border-b duration-400 ease-in-out`}
    >
      {li}
    </div>
  );
}
