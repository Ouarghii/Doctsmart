import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Partners.css'
import logo from '../assets/PARTNERS/logo.png'
import logo1 from '../assets/PARTNERS/logo1.png'
import logo2 from '../assets/PARTNERS/logo2.png'
import logo3 from '../assets/PARTNERS/logo1.png'
import logo4 from '../assets/PARTNERS/logo4.png'
import logo5 from '../assets/PARTNERS/logo5.png'
import logo6 from '../assets/PARTNERS/logo6.png'
import logo7 from '../assets/PARTNERS/logo7.png'
import logo8 from '../assets/PARTNERS/logo8.png'

const Partner = () => {
  const partners = [
    { name: 'Partner 1', image: logo },
    { name: 'Partner 2', image: logo1 },
    { name: 'Partner 3', image: logo2 },
    { name: 'Partner 4', image: logo3 },
    { name: 'Partner 5', image: logo4 },
    { name: 'Partner 6', image: logo5 },
    { name: 'Partner 7', image: logo6 },
    { name: 'Partner 8', image: logo7 },
    { name: 'Partner 9', image: logo8 },
  ];

  const [selectedPartners, setSelectedPartners] = useState([]);
  const [partnerIndex, setPartnerIndex] = useState(0);

  useEffect(() => {
    // Set the initial partners
    updateSelectedPartners();

    // Set the interval to update the partners every 3 seconds
    const intervalId = setInterval(() => {
      updateSelectedPartners();
    }, 7000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const updateSelectedPartners = () => {
    const randomIndex = Math.floor(Math.random() * partners.length);
    let newPartnerIndex = randomIndex;
    while (newPartnerIndex === partnerIndex) {
      newPartnerIndex = Math.floor(Math.random() * partners.length);
    }
    setPartnerIndex(newPartnerIndex);

    const newPartners = [];
    for (let i = 0; i < 5; i++) {
      newPartners.push(partners[(newPartnerIndex + i) % partners.length]);
    }
    setSelectedPartners(newPartners);
  };

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div name="partner">
    <animated.div style={props} className="partners">
      <h2>Our Partners</h2>
      <div className="partner-container">
        {selectedPartners.map((partner) => (
          <div className="partner-logo" key={partner.name}>
            <img src={partner.image} alt={partner.name} />
          </div>
        ))}
      </div>
    </animated.div>
    </div>
  );
};

export default Partner;
