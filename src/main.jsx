import React from 'react'
import ReactDOM from 'react-dom/client'


// import { RouterProvider, Routes } from 'react-router-dom'
// import Router from './routes/Router'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={Router}>

    </RouterProvider> */}
    <App />
  </React.StrictMode>,
)
