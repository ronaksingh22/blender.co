import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {  
  return (
    <div className="footer">
        <div className="footer_links">
            <Link to="/support">Support</Link>
        </div>

        <div className="footer_links">
            <Link to="/products">Products</Link>
        </div>

        <div className="footer_links">
            <Link to="/updates">Updates</Link>
        </div>

        <div className="footer_links">
            <Link to="/legal">Legal</Link>
        </div>

        <div className="footer_links">
            <Link to="/about">About</Link>
        </div>

        <div className="footer_links">
            <Link to="/meet_the_team">Meet the Team</Link>
        </div>


    </div>
  );
}

export default Footer;