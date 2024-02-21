import React, {useState, useEffect} from 'react'
import { useAuthContext } from '../context/authContext'
import {Outlet, useNavigate} from "react-router-dom"
const ProtectedRoutes = () => {
    const {token} = useAuthContext();
    const navigation = useNavigate();

    const isAuthenticated = () => {
        if(!token){
            return false
        }
        return true
    }

    useEffect(() => {
        if(!isAuthenticated()){
            navigation("/signin")
        }
    }, [])

  
  
    return <Outlet />
}

export default ProtectedRoutes