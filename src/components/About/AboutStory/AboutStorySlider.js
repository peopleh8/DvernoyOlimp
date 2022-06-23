import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Controller, Autoplay, EffectFade } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'

import sprite from '../../../icons/sprite.svg'

import aboutStory from '../../../images/about-story.jpg'

const AboutStorySlider = () => {
  let [ controlledSlider, setControlledSlider ] = useState(null)

  return (
    <div className="about-story__sliders">
      <div className="about-story__slider-content-wrapper">
        <Swiper
          className="about-story__slider-content about-story-slider-content"
          modules={[Navigation, Controller, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          controller={{ control: controlledSlider }}
          allowTouchMove={false}
          effect="fade"
          speed={500}
          navigation={{
            prevEl: '.about-story__slider-content-prev',
            nextEl: '.about-story__slider-content-next'
          }}
        >
          <SwiperSlide className="about-story-slider-content__item">
            <div className="about-story-slider-content__item-title">1992</div>
            <p className="about-story-slider-content__item-desc">Открыли свое первое производство в городе Киев</p>
          </SwiperSlide>
          <SwiperSlide className="about-story-slider-content__item">
            <div className="about-story-slider-content__item-title">1993</div>
            <p className="about-story-slider-content__item-desc">Открыли свое первое производство в городе Киев</p>
          </SwiperSlide>
          <SwiperSlide className="about-story-slider-content__item">
            <div className="about-story-slider-content__item-title">1994</div>
            <p className="about-story-slider-content__item-desc">Открыли свое первое производство в городе Киев</p>
          </SwiperSlide>
          <SwiperSlide className="about-story-slider-content__item">
            <div className="about-story-slider-content__item-title">1995</div>
            <p className="about-story-slider-content__item-desc">Открыли свое первое производство в городе Киев</p>
          </SwiperSlide>
        </Swiper>
        <div className="about-story__slider-content-nav">
          <div className="about-story__slider-content-btn about-story__slider-content-prev">
            <svg><use href={`${sprite}#slider-arrow-prev`} /></svg>
          </div>
          <div className="about-story__slider-content-btn about-story__slider-content-next">
            <svg><use href={`${sprite}#slider-arrow-next`} /></svg>
          </div>
        </div>
      </div>
      <div className="about-story__slider-photo-wrapper">
        <Swiper
          className="about-story__slider-photo about-story-slider-photo"
          modules={[Navigation, Controller, Autoplay, EffectFade]}
          spaceBetween={15}
          slidesPerView={1}
          onSwiper={setControlledSlider}
          allowTouchMove={false}
          speed={500}
        >
          <SwiperSlide className="about-story-slider-photo__item">
            <img src={aboutStory} alt="" width={945} height={470} />
          </SwiperSlide>
          <SwiperSlide className="about-story-slider-photo__item">
            <img src={aboutStory} alt="" width={945} height={470} />
          </SwiperSlide>
          <SwiperSlide className="about-story-slider-photo__item">
            <img src={aboutStory} alt="" width={945} height={470} />
          </SwiperSlide>
          <SwiperSlide className="about-story-slider-photo__item">
            <img src={aboutStory} alt="" width={945} height={470} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AboutStorySlider