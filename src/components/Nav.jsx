import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const Nav = () => {
  const { token, user, logout } = useAuthContext();
  const style = {
    position: "sticky",
    top: "0"
  }

  const divStyle = {
    display: "flex",
    alignItem: "center",
    gap: "10px",
    paddingTop: "8px"
  }

  const navright = {
    display: "flex",
    alignItem: "center",
    gap: "20px"
  }

  return (
    <nav style={style}>

      <Link to={"/"}><h1>Logo</h1></Link>

      <div style={navright}>

        {token ? (<div style={divStyle}><Link to={"/account"}>
          {/* <span><i className="fa-solid fa-user"></i></span> */}
          <span><p>{`${user?.firstname} ${user?.lastname}`}</p></span>
          <button className='btn' onClick={logout}>Logout</button>
        </Link>
          </div>) : (<div style={divStyle}>
            <p><Link to={"/signup"}>Signup</Link></p>
            <p><Link to={"/signin"}>Login</Link></p>
          </div>)}
          <Link to={"/sell"}>
            <button className='btn sell-btn'>SELL</button>
          </Link>
      </div>

    </nav>
  )
}

export default Nav