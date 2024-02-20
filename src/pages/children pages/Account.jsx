import React from 'react'

const Account = () => {


  const style = {
    marginTop: "4rem",
    padding: "1rem"
  }

  const userPicStyle = {
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0"


  }

  const imgStyle = {
    width: "70px",
    height: "70px",
    border: "2px solid var(--green)",
    borderRadius: "50%",
    padding: "0"
  }

  return (
    <div className='account-page' style={style}>
      <div className="account-page-wrapper">

        <div style={userPicStyle}>
          <div className="round-img user-img" style={imgStyle}>
            <img src="../src/assets/img-2.jpg" alt="" />
          </div>

        </div>

        <div>
          <div>
            <h3>Make money</h3>
          </div>

          <div>
            <i className="fa-solid fa-wallet"></i>
            <div>
              <h3>N5,000</h3>
              <span>MY BALANCE</span>
            </div>
          </div>
        </div>



        <div>
          <div>
            <i className="fa-solid fa-users"></i>
            <h3>Followers</h3>
          </div>

          <div>
            <i className="fa-solid fa-bullhorn"></i>
            <h3>My adverts</h3>
          </div>


          <div>
            <i className="fa-regular fa-comment"></i>
            <h3>Feedback</h3>
          </div>

        </div>

        {/* user's adverts */}
        <div className="user-adverts">

        </div>
        {/* end of user's adverts */}

      </div>
    </div>
  )
}

export default Account