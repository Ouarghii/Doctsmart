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

      <div className="slow-reveal-container">
        <Example className="slow-reveal" />
        <Diag className="slow-reveal" />
        <Cards className="slow-reveal" />
        <Fav className="slow-reveal" />
        <Helps className="slow-reveal" />
        <Reviewexp />
        {/* <Contactus /> */}
       {/*<Footer className="slow-reveal" />*/} 
        
      </div>
    </div>
  );
};

export default Home; 