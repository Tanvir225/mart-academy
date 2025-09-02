import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Layout/Main";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Courses from "../Page/Courses/Courses";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Page/CourseDetails/CourseDetails";
import CourseInside from "../Page/CourseInside/CourseInside";
import AboutUs from "../Page/AboutUs/AboutUs";
import ContactUs from "../Page/ContactUs/ContactUs";
import ProfilePage from "../Page/Profile/ProfilePage";
import VerifyEmail from "../Page/SignUp/VerifyEmail";
import ErrorPage from "../Component/Share/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import DashHome from "../Page/Dashboard/DashHome";
import AdminRoutes from "./AdminRoutes";
import AddCourse from "../Page/Dashboard/AddCourse/AddCourse";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>
      },
      {
        path: "/courses/:id",
        element: <PrivateRoute><CourseInside></CourseInside></PrivateRoute>
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
      },
      {
        path: "/verify-email",
        element: <VerifyEmail></VerifyEmail>
      },

    ],



  },

  // dashboard routes
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <AdminRoutes><DashHome></DashHome></AdminRoutes>

      },
      {
        path: "add-course",
        element: <AdminRoutes><AddCourse></AddCourse></AdminRoutes>

      },
    ]
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