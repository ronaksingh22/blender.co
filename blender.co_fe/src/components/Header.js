import React from "react";
import "./Header.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";

function Header() {  
  return (
    <div className="header">

        <h1 className="header_txt">
            Blender.Co 
        </h1>

      
        <img
          className="header__logo"
          src="https://i.ibb.co/7ntfxQP/blender-Logo.png"
          alt="Logo"
        />

        <div className="header__nav">
        
            <Link to="/"> 
                <div className="header__option">
                    <span>Home</span>
                </div>   
            </Link>
        
            <Link to="/learn"> 
                <div className="header__option">
                    <span>Learn</span>
                </div>
            </Link>

            <Link to="/credit_lookup_tool"> 
                <div className="header__option">
                    <span>Credit Lookup Tool</span>
                </div>
            </Link>

            <Link to="/profile"> 
                <div className="header__option">
                    <span className='profile_button'>
                        <AccountBoxIcon />
                    </span>
                </div>
            </Link>

        </div>
    </div>
  );
}

export default Header;