import { useContext } from "react";
import { AutthContext } from "../Provider/AuthProvider";


const useAuth = () => {
    const authUser = useContext(AutthContext)
    return authUser
};

export default useAuth;