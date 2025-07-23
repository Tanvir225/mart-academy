import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Layout/Main";
import Login from "../Page/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

    ],



  },

  {
    //login
    path: "/login",
    element: <Login></Login>,
  }


]);

export default router;