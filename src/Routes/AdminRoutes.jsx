import { useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useAuth from "../Hook/useAuth";
import Loading from "../Component/Share/Loading";


const AdminRoutes = ({ children }) => {
    //user from hooks
    const { user, loading } = useAuth();
    //admin from useAdmin hooks
    const [isAdmin, isPending] = useAdmin()

    //location
    const location = useLocation();
    if (loading || isPending) {
        return (
            <Loading></Loading>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;


};

export default AdminRoutes;