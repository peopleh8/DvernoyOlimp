import React, { useRef, useContext } from 'react'
import { Link } from 'gatsby'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import gsap from 'gsap'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'

import { PrefixContext } from '../../../context/PrefixContext'

import sprite from '../../../icons/sprite.svg'

import cat1 from '../../../images/catalog-1.svg'
import cat2 from '../../../images/catalog-2.svg'
import cat3 from '../../../images/catalog-3.svg'
import cat4 from '../../../images/catalog-4.svg'
import cat5 from '../../../images/catalog-5.svg'
import cat6 from '../../../images/catalog-6.svg'
import cat7 from '../../../images/catalog-7.svg'
import cat8 from '../../../images/catalog-8.svg'

const IntroCatSlider = () => {
  let prefix = useContext(PrefixContext)

  const currentSlide = useRef(null),
        totalSlidesCount = useRef(null)

  return (
    <div className="main-intro__cat-wrapper">
      <Swiper
        className="main-intro__cat main-intro-cat"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={5}
        speed={500}
        loop={true}
        navigation={{
          prevEl: '.main-intro-cat__prev',
          nextEl: '.main-intro-cat__next'
        }}
        pagination={{
          clickable: true,
          el: '.main-intro-cat__pagination.slider-pagination',
          bulletClass: 'main-intro-cat__pagination-item slider-pagination__item',
          bulletActiveClass: 'active',
          renderBullet: (index, className) => {
            return (`
              <div class="${className}"></div>
            `)
          }
        }}
        breakpoints={{
          650: {
            slidesPerView: 5
          },
          481: {
            slidesPerView: 4,
            navigation: {
              nextEl: '.main-intro-cat__next',
              prevEl: '.main-intro-cat__prev',
            },
          },
          0: {
            slidesPerView: 2.7,
            navigation: {
              nextEl: '.main-intro-cat__next-mob',
              prevEl: '.main-intro-cat__next-mob',
            },
          }
        }}
        onAfterInit={swiper => {
          setTimeout(() => {
            totalSlidesCount.current.textContent = (swiper.slides.length / 2) + 1
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
        <SwiperSlide className="main-intro-cat__item">
          <Link className="main-intro-cat__link" to={`${prefix}product-category/`}>
            <span className="main-intro-cat__preview">
              <img src={cat1} alt=""/>
            </span>
            <span className="main-intro-cat__title">Межкомнатные двери</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="main-intro-cat__item">
          <Link className="main-intro-cat__link" to={`${prefix}product-category/`}>
            <span className="main-intro-cat__preview">
              <img src={cat2} alt=""/>
            </span>
            <span className="main-intro-cat__title">Входные двери</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="main-intro-cat__item">
          <Link className="main-intro-cat__link" to={`${prefix}product-category/`}>
            <span className="main-intro-cat__preview">
              <img src={cat3} alt=""/>
            </span>
            <span className="main-intro-cat__title">Скрытые двери</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="main-intro-cat__item">
          <Link className="main-intro-cat__link" to={`${prefix}product-category/`}>
            <span className="main-intro-cat__preview">
              <img src={cat4} alt=""/>
            </span>
            <span className="main-intro-cat__title">Перегородки</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="main-intro-cat__item">
          <Link className="main-intro-cat__link" to={`${prefix}product-category/`}>
            <span className="main-intro-cat__preview">
              <img src={cat5} alt=""/>
            </span>
            <span className="main-intro-cat__title">Фурнитура</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="main-intro-cat__item">
          <Link className="main-intro-cat__link" to={`${prefix}product-category/`}>
            <span className="main-intro-cat__preview">
              <img src={cat6} alt=""/>
            </span>
            <span className="main-intro-cat__title">Плинтус</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="main-intro-cat__item">
          <Link className="main-intro-cat__link" to={`${prefix}product-category/`}>
            <span className="main-intro-cat__preview">
              <img src={cat7} alt=""/>
            </span>
            <span className="main-intro-cat__title">Мебель</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="main-intro-cat__item">
          <Link className="main-intro-cat__link" to={`${prefix}product-category/`}>
            <span className="main-intro-cat__preview">
              <img src={cat8} alt=""/>
            </span>
            <span className="main-intro-cat__title">Стеновые панели</span>
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className="main-intro-cat__btn main-intro-cat__prev">
        <svg><use href={`${sprite}#cat-slider-prev`} /></svg>
      </div>
      <div className="main-intro-cat__btn main-intro-cat__next">
        <svg><use href={`${sprite}#cat-slider-next`} /></svg>
      </div>
      <div className="main-intro-cat__controls slider-controls">
        <div className="main-intro-cat__counter slider-counter">
          <span className="main-intro-cat__current slider-counter__current" ref={currentSlide}>1</span>
          <span className="main-intro-cat__separator slider-counter__separator">/</span>
          <span className="main-intro-cat__total slider-counter__total" ref={totalSlidesCount}>5</span>
        </div>
        <div className="main-intro-cat__pagination slider-pagination" />
        <div className="main-intro-cat__nav slider-nav">
          <div className="main-intro-cat__btn-mob main-intro-cat__prev-mob slider-nav__btn slider-nav__btn-prev">
            <svg>
              <use href={`${sprite}#slider-arrow-prev`} />
            </svg>
          </div>
          <div className="main-intro-cat__btn-mob main-intro-cat__next-mob slider-nav__btn slider-nav__btn-next">
            <svg>
              <use href={`${sprite}#slider-arrow-next`} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroCatSlider