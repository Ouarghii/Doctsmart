import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
   return (
     <nav className='navbar' style={{width:'100%',position:'fixed'}}>
      <h1 className='logo' style={{marginLeft:'30px',cursor:'pointer',backgroundColor:'transparent'}}><span style={{color:'blue'}}>DOC</span>SMART</h1>
      <ul className='nav-links' style={{listStyle:'none',marginRight:'20px'}}>
        
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>Home</li>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>About</li>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>Services</li>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>Blog</li>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>Contact</li>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}><Link to='/loginr' className='btn btn-outline-success'>Sign Up</Link></li>
      </ul>
     </nav>
   )

}

export default Navbar;