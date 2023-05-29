import {BsPinMapFill} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import dct from '../assets/footerimg.png' 
import logo from '../assets/logodoc2.png'
import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
function Footer() {
  return (
        <footer class="footer-section">
            <div class="container">
                <div class="footer-cta pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="cta-text">
                                    <h4>Find us</h4>
                                    <span>Mannouba Tunisie</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-phone"></i>
                                <div class="cta-text">
                                    <h4>Call us</h4>
                                    <span>+ 216 58 039 513</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="far fa-envelope-open"></i>
                                <div class="cta-text">
                                    <h4>Mail us</h4>
                                    <span>Doctsmarttn@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                            <label className="logo"><img src={logo} alt='' style={{height:'120px',width:'200px',marginTop:'-25px',marginBottom:'10px'}}/></label>

                                <div class="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                    elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Footer Navbar</h3>
                                </div>
                                <ul style={{color:'white'}}>
                                <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
                  <li><Link to="Services" smooth={true} duration={500}>Services</Link></li>
                  <li><Link to="review" smooth={true} duration={500}>Review</Link></li>
                  <li><Link to="stats" smooth={true} duration={500}>Statistics</Link></li>
                  <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
                  <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Follow Us</h3>
                                </div>
                                <div class="footer-social-icon">
                                    <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                    <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                    <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                               <img  src={dct} className='imagedoct'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>Copyright &copy; 2023, All Right Reserved to DoctSmart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer ;