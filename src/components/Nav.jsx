import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const style = {
    position: "sticky",
    top: "0"
  }
  return (
    <nav style={style}>

      <Link to={"/"}><h1>Logo</h1></Link>

      <div className="nav-right">

        <Link to={"/account"}>
          <span><i className="fa-solid fa-user"></i></span>
        </Link>
        <Link to={"/sell"}>
          <button className='btn sell-btn'>SELL</button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav