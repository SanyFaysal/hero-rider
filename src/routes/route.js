import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Login from "../pages/authentication/Login";
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
    ],
  },
]);

export default routes;
