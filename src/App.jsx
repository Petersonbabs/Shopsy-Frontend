import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import Signup from './pages/children pages/Signup'
import SignIn from './pages/children pages/SignIn'
import Saved from './pages/children pages/Saved'
import Sell from './pages/children pages/Sell'
import Account from './pages/children pages/Account'
import AuthProvider from "./context/authContext"
import ProductProvider from './context/ProductContext';
import Home from './pages/children pages/Home'
import ProtectedRoutes from './routes/ProtectedRoutes'
import SingleProduct from './pages/children pages/SingleProduct'
import sellProvider from './context/sellContext'

const App = () => {

  const [token, setToken] = useState("")
  useEffect(() => {
    const tempToken = localStorage.getItem("token");
    if (token && token !== null && token !== undefined) {
      setToken(tempToken)
    }
  }, [])

  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Nav />
          <sellProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/product/:id' element={<SingleProduct />} />
              <Route element={<ProtectedRoutes />}>
                <Route path='/saved' element={<Saved />} />
                <Route path='/sell' element={<Sell />} />
                <Route path='/account' element={<Account />} />
              </Route>
            </Routes>
          </sellProvider>
          <Footer />
          <BottomNav />
        </ProductProvider>
      </AuthProvider>

    </Router>
  )
}

export default App