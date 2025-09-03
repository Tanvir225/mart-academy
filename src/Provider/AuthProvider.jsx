import { createContext, useEffect, useState } from "react";
import usePublicAxios from "../Hook/usePublicAxios";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const axios = usePublicAxios();

    // Create user
    const createUser = async (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user
    const loginUser = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout user
    const logoutUser = async () => {
        try {
            // Remove JWT from localStorage
            localStorage.removeItem("accessToken");
            await signOut(auth);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    // Google login
    const googleLogin = () => signInWithPopup(auth, googleProvider);

    // Handle Firebase auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const userData = { email: currentUser.email };
                try {
                    const res = await axios.post("/jwt", userData);
                    // Store JWT in localStorage
                    localStorage.setItem("accessToken", res.data.token);
                } catch (err) {
                    console.error("JWT fetch failed:", err);
                }
            } else {
                // User logged out
                localStorage.removeItem("accessToken");
            }
        });

        return () => unsubscribe();
    }, [axios]);

    const authInfo = {
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
