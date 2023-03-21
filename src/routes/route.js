import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import DrivingLearnerRegister from "../pages/authentication/DrivingLearnerRegister";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import RiderRegister from "../pages/authentication/RiderRegister";
import Signup from "../pages/authentication/Signup";
import Home from "../pages/Home/Home";

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
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "register/rider",
        element: (
          // <PrivateRoute>
          <RiderRegister />
        ),
        // </PrivateRoute>
      },
      {
        path: "register/learner",
        element: (
          // <PrivateRoute>
          <DrivingLearnerRegister />
        ),
        // </PrivateRoute>
      },
    ],
  },
]);

export default routes;
