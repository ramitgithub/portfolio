import React, { useContext } from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import ECOM from '../../img/ECOM.jpg' 
import EcomKart from '../../img/EcomKart.jpg' 
import ViewWeather from '../../img/ViewWeather.jpg' 
import FoodRestaurent from '../../img/FoodRestaurent.jpg' 
import 'swiper/css'
import { themeContext } from '../../Context'

function Portfolio() {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
      
      {/* heading */}
      <span style={{color:darkMode? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <a href="https://soft-crostata-957ed3.netlify.app">
            <img src={EcomKart} alt=""/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://resilient-starlight-eedec9.netlify.app">
            <img src={FoodRestaurent} alt=""/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://warm-arithmetic-669e1a.netlify.app">
            <img src={ViewWeather} alt=""/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://singular-longma-45ca5a.netlify.app">
            <img src={ECOM} alt=""/>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
