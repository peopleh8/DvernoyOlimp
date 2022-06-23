import React, { useRef } from 'react'

import  { Pagination, Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import gsap from 'gsap'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'

import introSliderImg from '../../../images/intro-slider.png'

import sprite from '../../../icons/sprite.svg'

const IntroSlider = () => {
  const totalSlidesCount = useRef(null)
  const currentSlide = useRef(null)

  return (
    <div className="main-intro__slider-wrapper">
      <Swiper
        className="main-intro__slider"
        modules={[Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={500}
        navigation={{
          prevEl: '.main-intro__slider-prev',
          nextEl: '.main-intro__slider-next',
        }}
        pagination={{
          clickable: true,
          el: '.main-intro__slider-pagination.slider-pagination',
          bulletClass: 'main-intro__slider-pagination-item slider-pagination__item',
          bulletActiveClass: 'active',
          renderBullet: (index, className) => {
            return (`
              <div class="${className}"></div>
            `)
          }
        }}
        onAfterInit={swiper => {
          setTimeout(() => {
            totalSlidesCount.current.textContent = swiper.slides.length
          }, 0)
        }}
        onSlideChange={swiper => {
          gsap.to(currentSlide.current, .2, { force3D: true, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
              gsap.to(currentSlide.current, .1, { force3D: true })

              currentSlide.current.innerHTML = swiper.realIndex + 1
            }});
          gsap.to(currentSlide.current, .2, { force3D: true, opacity: 1, ease: 'Power2.easeOut', delay: .3 })
        }}
      >
        <SwiperSlide className="main-intro__slider-item">
          <img src={introSliderImg} alt="" width={1005} height={380} />
          <div className="main-intro__slider-info">
            <h1 className="main-intro__slider-title">Каталог дверей</h1>
            <p className="main-intro__slider-desc">Загляните в любой салон Дверного Олимпа: каждый из них - это современный супермаркет дверей, в котором вы получите информативную консультацию</p>
            <button className="main-intro__slider-btn btn" type="button">
              <span className="main-intro__slider-btn-text btn__text">Узнать больше</span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-intro__slider-item">
          <img src={introSliderImg} alt="" width={1005} height={380} />
          <div className="main-intro__slider-info">
            <h1 className="main-intro__slider-title">Каталог дверей1</h1>
            <p className="main-intro__slider-desc">Загляните в любой салон Дверного Олимпа: каждый из них - это современный супермаркет дверей, в котором вы получите информативную консультацию</p>
            <button className="main-intro__slider-btn btn" type="button">
              <span className="main-intro__slider-btn-text btn__text">Узнать больше</span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-intro__slider-item">
          <img src={introSliderImg} alt="" width={1005} height={380} />
          <div className="main-intro__slider-info">
            <h1 className="main-intro__slider-title">Каталог дверей2</h1>
            <p className="main-intro__slider-desc">Загляните в любой салон Дверного Олимпа: каждый из них - это современный супермаркет дверей, в котором вы получите информативную консультацию</p>
            <button className="main-intro__slider-btn btn" type="button">
              <span className="main-intro__slider-btn-text btn__text">Узнать больше</span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-intro__slider-item">
          <img src={introSliderImg} alt="" width={1005} height={380} />
          <div className="main-intro__slider-info">
            <h1 className="main-intro__slider-title">Каталог дверей3</h1>
            <p className="main-intro__slider-desc">Загляните в любой салон Дверного Олимпа: каждый из них - это современный супермаркет дверей, в котором вы получите информативную консультацию</p>
            <button className="main-intro__slider-btn btn" type="button">
              <span className="main-intro__slider-btn-text btn__text">Узнать больше</span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-intro__slider-item">
          <img src={introSliderImg} alt="" width={1005} height={380} />
          <div className="main-intro__slider-info">
            <h1 className="main-intro__slider-title">Каталог дверей3</h1>
            <p className="main-intro__slider-desc">Загляните в любой салон Дверного Олимпа: каждый из них - это современный супермаркет дверей, в котором вы получите информативную консультацию</p>
            <button className="main-intro__slider-btn btn" type="button">
              <span className="main-intro__slider-btn-text btn__text">Узнать больше</span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="main-intro__slider-controls">
        <div className="main-intro__slider-counter slider-counter">
          <span className="main-intro__slider-current slider-counter__current" ref={currentSlide}>1</span>
          <span className="main-intro__slider-separator slider-counter__separator">/</span>
          <span className="main-intro__slider-total slider-counter__total" ref={totalSlidesCount}>4</span>
        </div>
        <div className="main-intro__slider-pagination slider-pagination" />
        <div className="main-intro__slider-nav slider-nav">
          <div className="main-intro__slider-btn main-intro__slider-prev slider-nav__btn slider-nav__btn-prev">
            <svg><use href={`${sprite}#slider-arrow-prev`} /></svg>
          </div>
          <div className="main-intro__slider-btn main-intro__slider-next slider-nav__btn slider-nav__btn-next">
            <svg><use href={`${sprite}#slider-arrow-next`} /></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSlider