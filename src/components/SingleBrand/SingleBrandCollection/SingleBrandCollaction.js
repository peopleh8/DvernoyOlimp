import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

import './SingleBrandCollection.scss'

import { PrefixContext } from '../../../context/PrefixContext'

import sprite from '../../../icons/sprite.svg'

const SingleBrandCollection = () => {
  let prefix = useContext(PrefixContext)

  return (
    <section className="single-brand-collection">
      <div className="container">
        <div className="single-brand-collection__title">Колекции</div>
        <div className="single-brand-collection__slider-wrapper">
          <Swiper
            className="single-brand-collection__slider single-brand-collection-slider"
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={8}
            speed={500}
            loop={true}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            navigation={{
              prevEl: '.single-brand-collection-slider__prev',
              nextEl: '.single-brand-collection-slider__next'
            }}
            breakpoints={{
              1367: {
                slidesPerView: 8
              },
              992: {
                slidesPerView: 7
              },
              746: {
                slidesPerView: 5
              },
              481: {
                slidesPerView: 4
              },
              0: {
                slidesPerView: 2.7
              }
            }}
          >
            <SwiperSlide className="single-brand-collection-slider__item">
              <Link className="single-brand-collection-slider__item-link active" to={`${prefix}single-brand/`}><span>Оптима</span></Link>
            </SwiperSlide>
            <SwiperSlide className="single-brand-collection-slider__item">
              <Link className="single-brand-collection-slider__item-link" to={`${prefix}single-brand/`}><span>Millenium</span></Link>
            </SwiperSlide>
            <SwiperSlide className="single-brand-collection-slider__item">
              <Link className="single-brand-collection-slider__item-link" to={`${prefix}single-brand/`}><span>Plato</span></Link>
            </SwiperSlide>
            <SwiperSlide className="single-brand-collection-slider__item">
              <Link className="single-brand-collection-slider__item-link" to={`${prefix}single-brand/`}><span>iDoors скрытые</span></Link>
            </SwiperSlide>
            <SwiperSlide className="single-brand-collection-slider__item">
              <Link className="single-brand-collection-slider__item-link" to={`${prefix}single-brand/`}><span>Cosmopolitan</span></Link>
            </SwiperSlide>
            <SwiperSlide className="single-brand-collection-slider__item">
              <Link className="single-brand-collection-slider__item-link" to={`${prefix}single-brand/`}><span>Art Deco</span></Link>
            </SwiperSlide>
            <SwiperSlide className="single-brand-collection-slider__item">
              <Link className="single-brand-collection-slider__item-link" to={`${prefix}single-brand/`}><span>Art Deco</span></Link>
            </SwiperSlide>
            <SwiperSlide className="single-brand-collection-slider__item">
              <Link className="single-brand-collection-slider__item-link" to={`${prefix}single-brand/`}><span>Modern</span></Link>
            </SwiperSlide>
          </Swiper>
          <div className="single-brand-collection-slider__btn single-brand-collection-slider__prev">
            <svg><use href={`${sprite}#cat-slider-prev`} /></svg>
          </div>
          <div className="single-brand-collection-slider__btn single-brand-collection-slider__next">
            <svg><use href={`${sprite}#cat-slider-next`} /></svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleBrandCollection