import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      <BottomNav />
    </div>
  )
}

export default LandingPage;