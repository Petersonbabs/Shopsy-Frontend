import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { FirstPage, SecondPage } from './AdForms';

let nextPage = 0
const adHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#fff",
  padding: "1rem",
  width: "100%"
}

const AdHeader = () => {

  return (
    <div >
      <div style={adHeaderStyle} className='sellPageHeader'>
        
        <p onClick={() => {
        }} style={{ visibility: nextPage > 0 ? 'visible' : "hidden" }}>
          <i className="fa-solid fa-chevron-left "></i>
          Back
        </p>

        <h3>Post add</h3>
        <p>Clear</p>
      </div>
    </div>
  )
}




const pages = [
  <FirstPage />,
  <SecondPage />,
]



const Sell = () => {

  const [page, setPage] = useState(nextPage)

  const hangleNextBtn = () => {
    const lastPage = page == pages.length - 1
    if (lastPage) {
      alert()
    } else {
      nextPage++
      setPage((currPage) => currPage + 1)
    }

  }

  const sellPageStyle = {
    width: "90vw",
    maxWidth: "600px",
    margin: "3rem auto",
    padding: "1rem 0"
  }

  return (
    <div style={sellPageStyle} >
      <AdHeader />
      
      <div className="sell-body">
        {pages[page]}
      </div>

      <div className='sell-footer'>
        <button onClick={hangleNextBtn} className='green-btn  full-btn btn '>
          {page == pages.length - 1 ? "Post ad" : "Next"}
        </button>

      </div>

    </div>
  )
}



export default Sell