import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
import axios from 'axios';

export const ProductContext = createContext();
export const useProductContext = () => {
  return useContext(ProductContext);
}

const ProductProvider = ({ children }) => {
  const [allproducts, setAllProducts] = useState([])

  const productsEndpoint = `${import.meta.env.VITE_apiUrl}/products`;

  // get products
  const getProducts = async () => {
    try {
      const res = await axios(productsEndpoint)
      const { products } = res.data;
      setAllProducts(products);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <ProductContext.Provider value={allproducts}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}

export default ProductProvider