import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <div className="home">
            <div className="wallet_container">
                <div className="wallet_txt">
                    Your Address: 0xfb0c603e7d038974c1557a04a900ebad3933743d
                </div>
            </div>
        </div>

        <div className="middle_text">
            <div className="intro">
                Hello Ronnie,
            </div>
        </div>

        <div className="below_intro">
            Your current blockchain credit score is 
            <span className="credit_score"> 730.</span> Great work! <p></p>
            View your: <p></p>
            <div className="user_links">
                <Link to="/Credit_History">Credit History</Link> <p></p><p></p>
                <Link to="/Credit_Activity">Credit Activity</Link> <p></p><p></p>
                <Link to="/profile">Profile</Link>
            </div>
        </div>

    </div>
    );

}

export default Home;