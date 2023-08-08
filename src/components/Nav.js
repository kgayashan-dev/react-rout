import React from "react";
// import { BrowserRouter } from "react-router-dom"; 
import { Link } from "react-router-dom";



function Nav() {

    const navStyle = {
        color: 'white'
    }// JSX



  return (
    <nav>
        <h3>Logo</h3>
      <ul className="nav-links " style={navStyle}>
        <li >
          <Link to="/" style={navStyle}>Home</Link>
        </li>
        <li >
          <Link to="/about" style={navStyle}>About</Link>
        </li>
        <li >
          <Link  to="/shop" style={navStyle}>Shop</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
