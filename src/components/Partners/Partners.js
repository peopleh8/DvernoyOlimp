import React from 'react'

import { Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Partners.scss'
import 'swiper/scss'
import 'swiper/scss/autoplay'

import partner1 from '../../images/partner-1.png'
import partner2 from '../../images/partner-2.png'
import partner3 from '../../images/partner-3.png'

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners__title-wrapper">
        <div className="container">
          <div className="partners__title title title--dark">Наши партнеры</div>
        </div>
      </div>
      <Swiper
        className="partners__slider partners-slider partners-slider--normal"
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        slidesPerView={'auto'}
        allowTouchMove={false}
        disableOnInteraction={true}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1,
        }}
      >
        <SwiperSlide className="partners-slider__item">
          <img src={partner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner2} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner3} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner2} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner3} alt=""/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="partners__slider partners-slider partners-slider--reverse"
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        slidesPerView={'auto'}
        allowTouchMove={false}
        disableOnInteraction={true}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1,
          reverseDirection: true
        }}
      >
        <SwiperSlide className="partners-slider__item">
          <img src={partner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner2} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner3} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner1} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner2} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="partners-slider__item">
          <img src={partner3} alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Partners