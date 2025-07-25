import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Layout/Main";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Courses from "../Page/Courses/Courses";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Page/CourseDetails/CourseDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/courses",
        element: <PrivateRoute><Courses></Courses></PrivateRoute>,
      },

      {
        path:"/course/:id",
        element:<CourseDetails></CourseDetails>
      }

    ],



  },

  {
    //login
    path: "/login",
    element: <Login></Login>,
  },
  {
    //sign up
    path: "/sign-up",
    element: <SignUp></SignUp>,
  },



]);

export default router;