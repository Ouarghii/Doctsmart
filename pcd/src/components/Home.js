import React, { useEffect } from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import Example from './PictureGallery';
import Diag from './Diag';
import Fav from './Fav';
import Helps from './Helps';
import Footer from './Footer';
import Header from './auth/Header';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import './home.css';
import Reviewexp from './Review';
import Contactus from './contactus';
import NumberStats from './SiteNumbers';
import Partner from './Partners';
import Blogs from './blog';
import FirstHome from './firsthome';
import Logincard from './logincard';
import ServicePage from './Services';
import Habata from './habata';
import PredDis from './Symptom';
import Service from './home/Service';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const components = document.querySelectorAll('.slow-reveal');
      components.forEach((component) => {
        if (component.getBoundingClientRect().top < window.innerHeight) {
          component.classList.add('loaded');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar className="transparent-nav" />
      <FirstHome id='Home' />
      {/* <ServicePage id='Services'/> */}
      <Service id='Services'/>
      <NumberStats id='stats'/>   
      <Blogs id='blogs'/>  
      <Reviewexp id="review"/>
      <Partner id="partner" className="partn"/> 
      <Habata id="team"/>
      <Footer/> 
      {/* <PredDis/> */}
    </div>

  );
};

export default Home; 