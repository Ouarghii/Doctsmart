import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
   
      <div className="footer-links">
      <h1 className='logo1' style={{marginLeft:'30px',cursor:'pointer',backgroundColor:'transparent',marginLeft:'-70px'}}><span style={{color:'blue'}}>Medi</span>care</h1>
        <a href="/" style={{fontSize:'30px',marginLeft:'100px',marginRight:'50px'}}>Home</a>
        <a href="/about" style={{fontSize:'30px',marginLeft:'100px',marginRight:'50px'}}>About Us</a>
        <a href="/services" style={{fontSize:'30px',marginLeft:'100px',marginRight:'50px'}}>Services</a>
        <a href="/contact" style={{fontSize:'30px',marginLeft:'100px',marginRight:'50px'}}>Contact Us</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com/medicare"><i  className="fab fa-facebook">Facebook</i></a>
        <a href="https://twitter.com/medicare"><i className="fab fa-twitter">Twitter</i></a>
        <a href="https://instagram.com/medicare"><i className="fab fa-instagram">Instagram</i></a>
      </div>
      <div className="footer-contact">
        <p>123 Main Street</p>
        <p>New York, NY 10001</p>
        <p>Phone: (555) 555-5555</p>
        <p>Email: info@medicare.com</p>
      </div>
    </div>
  );
}

export default Footer;