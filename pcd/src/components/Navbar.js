import React from 'react';

import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <label className="logo"> Doct<span>Smart</span></label>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>
      <ul >
        <li ><Link to="Home" smooth={true} duration={500} >Home</Link></li>
        <li><Link to="Services" smooth={true} duration={500} >Services</Link></li>
        <li><Link to="review" smooth={true} duration={500}>Review</Link></li>
        <li><Link to="stats" smooth={true} duration={500}>Our Stats</Link></li>
        <li><Link to="partner" smooth={true} duration={500}>Our Partners</Link></li>
        <li><Link to="contactus" smooth={true} duration={500}>Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;