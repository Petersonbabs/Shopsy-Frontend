import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();
import { useNavigate } from 'react-router-dom';


export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const navigation = useNavigate()
    const [token, setToken] = useState(null);
    const [user, setUser] = useState({});
    const apiUrl = import.meta.env.VITE_apiUrl;
    const loginEndPoint = `${import.meta.env.VITE_apiUrl}/auth/login`

    useEffect(() => {
        const tempToken = localStorage.getItem("token")
        setToken(tempToken);
        
        const tempUser = JSON.parse(localStorage.getItem("user"));
        setUser(tempUser);
    }, [])

    // register user
    const registerUser = async (formDetails) => {
        console.log(formDetails);
        try {
        
            const res = await fetch(`${apiUrl}/auth/signup`, {
                method: "POST",
                body: JSON.stringify(formDetails),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            localStorage.setItem("token", data.token);
            setToken(data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            setUser(data.user)
            console.log(data)
            navigation("/account")
        } catch (error) {
            console.log("Error", error)
        }
    }

        // sign in function
        const handleSignIn = async (formData) => {
            console.log(formData);
    
            console.log("loging in...");
            try {
                const res = await axios.post(loginEndPoint, formData);
                console.log(res)
    
                localStorage.setItem("token", res.data.token);
                setToken(res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigation("/account")
    
            } catch (error) {
                console.log(error);
            }
        }

        // logout
        const logout = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setToken(null)
            setUser({})
            navigation("/")
        }

        const values= {
            token,
            user,
            registerUser,
            handleSignIn,
            logout
        }

        return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthProvider

