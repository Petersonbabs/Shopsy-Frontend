import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/children pages/Home'
import Saved from '../pages/children pages/Saved'
import Messages from "../pages/children pages/Messages";
import Account from "../pages/children pages/Account"
import ProductsLanding from '../pages/children pages/ProductsLanding'
import SingleProduct from '../pages/children pages/SingleProduct'
import Sell from "../pages/children pages/Sell";
import Signup from '../pages/children pages/Signup'
import SignIn from '../pages/children pages/SignIn'
import ProtectedRoutes from './ProtectedRoutes'

const isAuthenticated = ProtectedRoutes();


const Router = createBrowserRouter([

  // ladingpage
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 

      
      // signup
      {
        path: "signup",
        element: <Signup />
      },


      // signin
      {
        path: "signin",
        element: <SignIn />
      },


      // saved
      {
        path: "saved",
        element: <Saved />
      },

      // Sell
      {
        path: "sell",
        element: <Sell />,
        
      },

      // messages
      {
        path: "messages",
        element: <Messages />
      },

      // Account

      {
        path: "account",
        element: isAuthenticated() ? <Account /> : <SignIn />
      },

      // products
      {
        path: "products",
        element: <ProductsLanding />,
        children: [
          {
            index: true,
            element: <h1>Defaualt product child</h1>
          },


        ]
      },


      // single product
      {
        path: "product/:id",
        element: <SingleProduct />
      }
    ]
  }

]) 

export default Router