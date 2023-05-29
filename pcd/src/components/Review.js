import './Review.css';
import person1 from '../assets/3aftoula1.jpg';
import person2 from '../assets/3aftoula2.jpg';
import person3 from '../assets/3aftoula3.jpg';
import { FaQuoteLeft } from "react-icons/fa";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Layout from './Layout';


export default function Reviewexp() {
  return (
   <div name="review">

        <section className='reviewsection'>
    <div className='color'>
        <h1> Reviews </h1>
    </div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="review">
            <div className='content'>
                <SwiperSlide className='slide'>
                        <img src={person2}  className='circleimage' ></img>
                        <p> 
                            I cannot thank you enough for your understanding 
                            and support through some difficult times
                            . I would highly recommend your company to anyone.
                            Your company has made our life easier.
                        </p>
                        <FaQuoteLeft  className='quotesicon'/>
                        <div className='details'>
                            <span className='name'> Foulen Ben Foulen </span>
                            <span className='Age'> 67 Y.o</span>
                        </div>
                </SwiperSlide>
                <SwiperSlide className=' slide'>
                        <img src={person1}  className='circleimage' ></img>
                        <p> The team of professional caretakers have helped us to improve many aspects
                             of our life, social life included.
                              The personal assistant works hard and knows what they are doing.
                        </p>
                        <FaQuoteLeft  className='quotesicon'/>
                        <div className='details'>
                            <span className='name'> Foulen Ben Foulen </span>
                            <span className='Age'> 69 Y.o</span>
                        </div>
                </SwiperSlide>
                <SwiperSlide className=' slide'>
                        <img src={person3}  className='circleimage' ></img>
                        <p> 
                        I was visiting a number of assisted living facilities last month,
                         and was really impressed by the knowledge of this one.
                          They have nurses on staff in addition to normal caregivers.
                        </p>
                        <FaQuoteLeft  className='quotesicon'/>
                        <div className='details'>
                            <span className='name'> Foulen Ben Foulen </span>
                            <span className='Age'> 102 Y.o</span>
                        </div>
                </SwiperSlide>
                <SwiperSlide className=' slide'>
                        <img src={person3}  className='circleimage' ></img>
                        <p> 
                        I was visiting a number of assisted living facilities last month,
                         and was really impressed by the knowledge of this one.
                          They have nurses on staff in addition to normal caregivers.
                        </p>
                        <FaQuoteLeft  className='quotesicon'/>
                        <div className='details'>
                            <span className='name'> Foulen Ben Foulen </span>
                            <span className='Age'> 22 Y.o</span>
                        </div>
                </SwiperSlide>
            </div>
       </Swiper>
       
    </section>
    </div>
    
    
  );
}