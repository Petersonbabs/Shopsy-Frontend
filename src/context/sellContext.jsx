import React, { Children, useState } from 'react'
import { createContext, useContext } from 'react'
import Sell from '../pages/children pages/Sell'

export const sellContext = createContext()
export const usesellContext = () => {
    return useContext(sellContext)
}

let nextPage = 0

const sellProvider = ({ children }) => {

    const [page, setPage] = useState(nextPage)
    const [productData, setProductData] = useState({
        category: "",
        location: "",
        image: "",
        title: "",
        quantity: null,
        description: "",
        price: null,
        negotiable: false,
        number: null
    })

    const hangleNextBtn = () => {
        const lastPage = page == pages.length - 1
        if (lastPage) {
            alert()
        } else {
            nextPage++
            setPage((currPage) => currPage + 1)
        }

    }

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setProductData(data => ({
            ...data,
            [name]: value
        }));
    }

    const value = {
        hangleNextBtn, 
        handleInputs, 
        productData, 
        page
    }

    return (
        <sellContext.Provider value={value}>{children}</sellContext.Provider>
    )
}

export default sellProvider