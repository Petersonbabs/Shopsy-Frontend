import React from 'react'
import { Link } from 'react-router-dom'


export const ProductCard = ({ image, title, price, link }) => {

    const style = {
        // width: "190px",
        background: "#fff",
        boxShadow: "0 0 2px #00000086",
        padding: "1rem",
        borderRadius: "5px",
        minHeight: "220px",
        maxHeight: "220px"
    }

    const imgStyle = {
        height: "100px",
        marginBottom: "1rem"
    }

    const img = {
        objectFit: "cover"
    }

    const titleStyle = {
        marginBottom: ".3rem"
    }

    return (

        <Link to={link}>
            <div style={style}>
                <div className="product-img" style={imgStyle}>
                    <img src={image} alt='Product image' width={"100%"} style={img} height={"100%"} />
                </div>

                <h5 style={titleStyle}>{title}</h5>
                <span>${price}</span>
            </div>
        </Link>

    )
}
