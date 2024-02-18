import React from 'react'
import { ProductsList } from '../../../ProductsList'
import { ProductCard } from '../../components/ProductCard'


const Home = () => {

  const heroStyle = {
    background: "var(--green)",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const heroCon = {
    display: "grid",
    width: "90%",
    justifyItems: "center",
    gap: "2rem",
    color: "#fff"
  }
  
  return (
    <div className="home">

      {/* HERO */}
      <section style={heroStyle}>
        <div className="hero-content" style={heroCon}>
          <p>Find anything in <span>All Nigeria</span></p>
          <div>
            <input type="text" placeholder='I am looking for...' />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </section>

      <div className='products-list'>
        {
          ProductsList.map((el, i) => {
            return (
              <div className='product' key={i}>
                <ProductCard image={el.image} title={el.title} price={el.price} link={`product/${el.id}`}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home