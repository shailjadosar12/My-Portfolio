import React from "react";
import logo from "../logo.png";
//******************************** React Routers ************************************************/
import { Link } from "react-router-dom";
//******************************** React FontAwsome ************************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className = "container">
          <a className="navbar-brand" href="#">
          <img className = "logo" src={logo} alt = "logo..."/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon = {faBars} style = {{color:"#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                services
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" href="#">
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                portfolio
              </Link>
            </li>
           
            
            <li className="nav-item">
              <Link className="nav-link" href="#">
                contacts
              </Link>
            </li>
          </ul>
          </div>
        
        </div>
      </nav>
   
  );
};

export default Navbar;
