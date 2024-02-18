import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsLanding = () => {
  return (
    <div>
      {/* add search and filter bar */}
      <h3>Search and filter</h3>
      <Outlet />
    </div>
  )
}

export default ProductsLanding