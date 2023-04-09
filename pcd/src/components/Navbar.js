import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
   return (
     <nav className='navbar' style={{width:'100%',position:'fixed'}}>
      <h1 className='logo' style={{marginLeft:'30px',cursor:'pointer',backgroundColor:'transparent'}}><span style={{color:'blue'}}>DOC</span>SMART</h1>
      <ul className='nav-links' style={{listStyle:'none',marginRight:'20px'}}>
          <Link to='/'>
             <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>Home</li>
          </Link>
          <Link to='/about'>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>About</li>
          </Link>
          <Link to='/services'>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>Services</li>          </Link>
          <Link to='/blogs'>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>Blog</li>
          </Link>
          <Link to='contactus'>
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}>Contact</li>
          </Link>
          
          <li style={{listStyle:'none',marginRight:'50px',cursor:'pointer'}}><Link to='/loginr' className='btn btn-outline-success'>Sign Up</Link></li>
      </ul>
     </nav>
   )

}

export default Navbar;