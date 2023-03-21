import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Signup from "../pages/authentication/Signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default routes;
