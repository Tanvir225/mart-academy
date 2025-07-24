import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Loading from "../Component/Share/Loading";


const PrivateRoute = ({children}) => {
    //user and loading state from AuthProvider
    const { user, loading } = useAuth();
    // console.log(loading);

    //location
    const location = useLocation();
    console.log(location);

    //if loading, return null
    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        return children;
    }

    //if user is not logged in, redirect to login page
    return <Navigate to="/login"  state={{ from: location }}  replace />;
};

export default PrivateRoute;