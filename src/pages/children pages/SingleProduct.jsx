import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/ProductContext'


const SingleProduct = () => {
  const ProductsList = useProductContext();
  
  const { id } = useParams()
  const product = ProductsList.find(item => item._id == id)
  console.log(product);

  if (!product) {
    return <p>Loading</p>
  }
  
  

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
      {/* <div className="category">
        <p>{category}</p>
      </div> */}

      <div className="single-page-img" style={imgSecStyle}>
        <img src="https://cdn.pixabay.com/photo/2024/01/31/11/07/monkey-8543906_1280.jpg" alt="" width={"100%"} style={imgStyle} />
      </div>

      <div className="product-details" style={detailStyle}>

        <div>
          <div>
            <span>Lagos, Ikeja </span>
            <span>Posted 8 hours ago</span>
          </div>
          <h3>{product.title}</h3>
        </div>

        <div>
          <p>{}</p>
        </div>


        <div>
          <div className='user-sec'>
            
            
            <h4>{product.owner ? product.owner.email : "Peter Babs"}</h4>
          </div>
          <button className='btn green-btn full-btn'>
            <i className="fa-solid fa-phone"></i>
            <span>Show contact</span>
          </button>

          <button className='btn transparent-btn full-btn'>
            <i className="fa-regular fa-message"></i>
            <span>Start 
              Chat
            </span>
          </button>
        </div>


        <div>
          <h2>${product.price}</h2>
        </div>

      </div>
    </div>

  )
}

export default SingleProduct