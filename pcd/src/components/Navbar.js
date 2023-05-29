import React from 'react';

import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/logodoc.png'

const Navbar = () => {
  return (
    <nav>
      <label className="logo"><img src={logo} alt='' style={{height:'20%',width:'20%',marginTop:'-10px'}}/></label>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>
      <ul >
        <li className='lien'><Link to="Home" smooth={true} duration={500} >Home</Link></li>
        <li  className='lien'><Link to="Services" smooth={true} duration={500} >Services</Link></li>
        <li className='lien'><Link to="review" smooth={true} duration={500}>Review</Link></li>
        <li className='lien'><Link to="stats" smooth={true} duration={500}>Our Stats</Link></li>
        <li className='lien'><Link to="partner" smooth={true} duration={500}>Our Partners</Link></li>
        <li className='lien'><Link to="contactus" smooth={true} duration={500}>Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;