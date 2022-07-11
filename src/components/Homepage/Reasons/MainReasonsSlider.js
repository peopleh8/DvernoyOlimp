import React, { useRef } from 'react'
import  { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import gsap from 'gsap'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import sprite from '../../../icons/sprite.svg'

const MainReasonsSlider = () => {
  const currentSlide = useRef(null)
  const totalSlidesCount = useRef(null)

  return (
    <div className="main-reasons__slider-wrapper">
      <Swiper
        className="main-reasons__slider"
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        speed={500}
        autoHeight={true}
        navigation={{
          prevEl: `.main-reasons__prev`,
          nextEl: `.main-reasons__next`,
        }}
        pagination={{
          clickable: true,
          el: '.main-reasons__pagination',
          bulletClass: '.main-reasons__pagination-item slider-pagination__item',
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
        <SwiperSlide className="main-reasons__item">
          <div className="main-reasons__item-inner">
            <p className="main-reasons__item-desc">Более 10 лет успешной работы</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-reasons__item">
          <div className="main-reasons__item-inner">
            <p className="main-reasons__item-desc">Продукция от 52 лучших производителей</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-reasons__item">
          <div className="main-reasons__item-inner">
            <p className="main-reasons__item-desc">Изготовление дверей по индивидуальным размерам</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-reasons__item">
          <div className="main-reasons__item-inner">
            <p className="main-reasons__item-desc">Гарантия до 3-х лет</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-reasons__item">
          <div className="main-reasons__item-inner">
            <p className="main-reasons__item-desc">Любая форма оплаты</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-reasons__item">
          <div className="main-reasons__item-inner">
            <p className="main-reasons__item-desc">Более 450 000 счастливых клиентов</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="main-reasons__controls slider-controls">
        <div className="main-reasons__counter slider-counter">
          <span className="main-reasons__current slider-counter__current" ref={currentSlide}>1</span>
          <span className="main-reasons__separator slider-counter__separator">/</span>
          <span className="main-reasons__total slider-counter__total" ref={totalSlidesCount}>5</span>
        </div>
        <div className="main-reasons__pagination slider-pagination" />
        <div className="products-slider__nav slider-nav">
          <div className="main-reasons__btn main-reasons__prev slider-nav__btn slider-nav__btn-prev">
            <svg>
              <use href={`${sprite}#slider-arrow-prev`} />
            </svg>
          </div>
          <div className="main-reasons__btn main-reasons__next slider-nav__btn slider-nav__btn-next">
            <svg>
              <use href={`${sprite}#slider-arrow-next`} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainReasonsSlider