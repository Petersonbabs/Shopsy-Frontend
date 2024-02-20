import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const Nav = () => {
  const { token, user, logout } = useAuthContext();
  const style = {
    position: "sticky",
    top: "0"
  }
  return (
    <nav style={style}>

      <Link to={"/"}><h1>Logo</h1></Link>

      <div className="nav-right">

        {token ? (<div><Link to={"/account"}>
          {/* <span><i className="fa-solid fa-user"></i></span> */}
          <span><p>{`${user?.firstname} ${user?.lastname}`}</p></span>
          <button className='btn' onClick={logout}>Logout</button>
        </Link>
          </div>) : (<div>
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