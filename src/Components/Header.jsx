import React from "react";
import { Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";


const Header = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div className="d-flex header justify-content-between align-items-center"> 
        <button className={navbarOpen ? 'menu-btn expanded' : 'menu-btn'} 
              onClick={() => setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen)}>
                <div className="menu-icon-container">
                    <span className="icon-line"></span>
                    <span className="icon-line"></span>
                    <span className="icon-line"></span>
                </div>
            </button>
            <div className="logo">
               <img src="./icons/logoash.png"></img>
            </div>
            <div className="contact-btn">
              <HashLink to="#contact">
                <Button variant="primary">Get Discount</Button>
              </HashLink>
            </div>
    </div>
  );
};

export default Header;