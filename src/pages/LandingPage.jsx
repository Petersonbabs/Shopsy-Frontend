import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Footer from "../components/Footer"
import AuthProvider from '../context/authContext';

const LandingPage = () => {
  const [token, setToken] = useState("")
  useEffect(() => {
    const tempToken = localStorage.getItem("token");
    if (token && token !== null && token !== undefined) {
      setToken(tempToken)
    }
  }, [])
  return (
    <div>
      <AuthProvider>
        <Nav />
        <Outlet />
        <Footer />
        <BottomNav />
      </AuthProvider>
    </div>
  )
}

export default LandingPage;