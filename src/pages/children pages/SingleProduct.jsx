import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsList } from '../../../ProductsList'

const SingleProduct = () => {

  const { id } = useParams()
  const { title, price, description, rating, image, category } = ProductsList.find(item => item.id == id)

  const style = {
    width: "90vw",
    maxWidth: "var(--max-width)",
    margin: "1rem auto"
  }


  const imgSecStyle = {
    width: "100%",
    height: "300px",
    background: "#fff",
    padding: "1rem"
  }


  const imgStyle = {
    objectFit: "cover"
  }

  const detailStyle = {
    // background: "#fff"
  }



  return (

    <div className='single-product' style={style
    }>
      <div className="category">
        <p>{category}</p>
      </div>

      <div className="single-page-img" style={imgSecStyle}>
        <img src={image} alt="" width={"100%"} style={imgStyle} />
      </div>

      <div className="product-details" style={detailStyle}>

        <div>
          <div>
            <span>Lagos, Ikeja </span>
            <span>Posted 8 hours ago</span>
          </div>
          <h3>{title}</h3>
        </div>

        <div>
          <p>{description}</p>
        </div>


        <div>
          <div className='user-sec'>
            <div className="round-img user-img">
              <img src="../src/assets/img-2.jpg" alt="" />
            </div>
            <h4>Peter Babs</h4>
          </div>
          <button className='btn green-btn full-btn'>
            <i class="fa-solid fa-phone"></i>
            <span>Show contact</span>
          </button>

          <button className='btn transparent-btn full-btn'>
            <i class="fa-regular fa-message"></i>
            <span>Show contact</span>
          </button>
        </div>


        <div>
          <h2>${price}</h2>
        </div>

      </div>
    </div>

  )
}

export default SingleProduct