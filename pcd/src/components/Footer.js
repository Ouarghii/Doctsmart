import {BsPinMapFill} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='leFooter'>
    <footer className="footer-distributed">

        <div className="footer-left">
            <h3>Doct<span>Smart</span></h3>

            <p className="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Contact</a>
                |
                <a href="#">Blog</a>
            </p>

            <p className="footer-company-name">Copyright © 2023 <strong>DoctSmart</strong> All rights reserved</p>
        </div>

        <div className="footer-center">
            <div>
                <BsPinMapFill className="map"></BsPinMapFill>
                <p><span>Mannouba</span>
                    Tunisia</p>
            </div>

            <div className='phonediv'>
                <BsFillTelephoneFill className="phone"></BsFillTelephoneFill>
                <p>+216 73 777 777</p>
            </div>
            <div className='envelopediv'>
                <BsFillEnvelopeFill className="envelope"></BsFillEnvelopeFill>
                <p><a href="mailto:mohamed.mezzi@ensi-uma.tn">Doctsmart@aftoula.tn</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About Our Project</span>
                <strong>DoctSmart </strong> is a medical webapplication that help doctors and make it easier to the patient in 
                hospitals  
            </p>
            <div className="footer-icons">
                <a href="#"><FaFacebookF></FaFacebookF> </a>
                <a href="#"><FaInstagram></FaInstagram></a>
                <a href="#"><FaLinkedinIn></FaLinkedinIn></a>
                <a href="#"><FaTwitter></FaTwitter></a>
                <a href="#"><FaYoutube></FaYoutube></a>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer