import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../layout/dashboard/AdminDashboard";
import Main from "../layout/main/Main";
import DrivingLearnerRegister from "../pages/authentication/DrivingLearnerRegister";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import RiderRegister from "../pages/authentication/RiderRegister";
import Completion from "../pages/Completion";

import Home from "../pages/Home/Home";
import Packages from "../pages/Packages";
import Payment from "../pages/Payment";
import Profile from "../pages/Profile";
import AdminPrivateRoute from "../utils/AdminPrivateRoute";
import LearnerPrivateRoute from "../utils/LearnerPrivateRoute";
import PrivateRoute from "../utils/PrivateRoute";

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
        path: "packages",
        element: (
          <LearnerPrivateRoute>
            <Packages />
          </LearnerPrivateRoute>
        ),
      },

      {
        path: "packages/:name",
        element: (
          <LearnerPrivateRoute>
            <Payment />
          </LearnerPrivateRoute>
        ),
      },
      {
        path: "completion",
        element: (
          <LearnerPrivateRoute>
            <Completion />
          </LearnerPrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "signup/rider",
        element: <RiderRegister />,
      },
      {
        path: "signup/learner",
        element: <DrivingLearnerRegister />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <AdminPrivateRoute>
        <AdminDashboard />
      </AdminPrivateRoute>
    ),
  },
]);

export default routes;
