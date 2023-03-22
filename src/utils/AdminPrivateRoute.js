import React from "react";

import { Navigate } from "react-router-dom";
import { useGetMeQuery } from "../features/auth/authApi";

const AdminPrivateRoute = ({ children }) => {
  const token = localStorage?.getItem("accessToken");
  const { data, isLoading, isSuccess } = useGetMeQuery(token);
  const user = data?.data;
  console.log(user);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (token && isLoading) {
    return <p>Loading...</p>;
  }

  if (
    token &&
    user?.email &&
    user.role === "admin" &&
    !isLoading &&
    isSuccess
  ) {
    return children;
  }
};

export default AdminPrivateRoute;
