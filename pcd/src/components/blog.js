import './blog.css';
import React from 'react';
import CountUp from 'react-countup';
import {FaBed} from 'react-icons/fa'  //ambulance
import {FaStethoscope} from 'react-icons/fa'
import {FaHospitalUser} from 'react-icons/fa'
import image1 from '../assets/blog1.jpg'
import image2 from '../assets/blog2.jpg'
import image3 from '../assets/blog3.jpg'
import NumberStats from './SiteNumbers';
import Partner from './Partners';
import Footer from './Footer';
import Navbar from './Navbar';
function Blogs() {
  return (
      
    <div name="blogs" className='blogs' style={{marginTop:'20px'}} >
        <h1>Our Blogs</h1>
        <div className='row1'>
          <div className='servicesbl'>
          <img src={image1}   className="blogimage" />
          <div className='btnfixé'>
            <h2>20</h2>
            <p>june</p>
            <p>2023</p>
          </div>
          <h2> Scary Thing That You Don’t Get Enough Sleep </h2>
          <p> Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          
          </div>
          
          <div className='servicesbl'>
          <img src={image2}   className="blogimage" />
          <div className='btnfixé'>
            <h2>02</h2>
            <p>march</p>
            <p>2023</p>
          </div>
          <h2> Scary Thing That You Don’t Get Enough Sleep </h2>
          <p> Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          
          </div>

          <div className='servicesbl'>
          <img src={image2}   className="blogimage" />
          <div className='btnfixé'>
            <h2>02</h2>
            <p>march</p>
            <p>2023</p>
          </div>
          <h2> Scary Thing That You Don’t Get Enough Sleep </h2>
          <p> Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          
          </div>
         
          
          
        </div>

      </div>
  );
}

  export default Blogs;
