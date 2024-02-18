import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {

    const style= {
        width: "100%",
        background: "#fff",
        position: "fixed",
        bottom: "0",
    }

    const conStyle = {
        display: "grid",
        width: "100%",
        maxWidth: "var(max-width)",
        alignItems: "center",
    }

    return (
        <div className='bottom-nav' style={style}>
            <div className="bottom-nav-con" style={conStyle}>
                {/* Home */}
                <Link to={"/"}>
                    <div className="home">
                        <i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </div>
                </Link>


                {/* Save */}
                <Link to={"saved"}>
                    <div className="saved">
                        <i className="fa-regular fa-bookmark"></i>
                        <p>Saved</p>
                    </div>
                </Link>

                {/* Sell */}
                <Link to={"sell"}>
                    <div className="sell">
                        <i className="fa-regular fa-square-plus"></i>
                        <p>Sell</p>
                    </div>
                </Link>

                {/* Messages */}
                <Link to={"messages"}>
                    <div className="messages">
                        <i className="fa-regular fa-message"></i>
                        <p>Messages</p>
                    </div>
                </Link>

                {/* Account */}
                <Link to={"account"}>
                    <div className="account">
                        <i className="fa-solid fa-user"></i>
                        <p>Account</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BottomNav