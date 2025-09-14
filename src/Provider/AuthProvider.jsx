import { createContext, useEffect, useState } from "react";
import usePublicAxios from "../Hook/usePublicAxios";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    // You can add authentication related states and methods here
    //state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //axios hook
    const axios = usePublicAxios();

    //create a user
    const createUser = async (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user
    const loginUser = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout user
    const logoutUser = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/logout`);
            await signOut(auth);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };


    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    //useEffect to handle user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("current user", currentUser);

            if (currentUser) {
                const user = { email: currentUser?.email }
                console.log(user);
                await axios.post("/jwt", user).then((res) => {
                    console.log(res.data);
                    setLoading(false);
                });
                // await new Promise(resolve => setTimeout(resolve, 500));

            }

        });

        return () => unsubscribe();

    }, [user, axios]);

    const authInfo = {
        // You can add authentication related methods and states here
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        googleLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};


export default AuthProvider;