import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../layout/dashboard/AdminDashboard";
import Main from "../layout/main/Main";
import DrivingLearnerRegister from "../pages/authentication/DrivingLearnerRegister";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import RiderRegister from "../pages/authentication/RiderRegister";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "signup/rider",
        element: (
          // <PrivateRoute>
          <RiderRegister />
        ),
        // </PrivateRoute>
      },
      {
        path: "signup/learner",
        element: (
          // <PrivateRoute>
          <DrivingLearnerRegister />
        ),
        // </PrivateRoute>
      },
    ],
  },

  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
]);

export default routes;
