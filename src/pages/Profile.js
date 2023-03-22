import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const data = useSelector((state) => state.auth);
  const user = data.user;

  if (!user.profilePicture) {
    return <p>loading ...</p>;
  }
  return (
    <div>
      <img
        src={`http://localhost:5000/images/${user.nid[0][0].filename}`}
        alt=""
        className="w-80 h-80 bg-green-500"
      />
    </div>
  );
};

export default Profile;
