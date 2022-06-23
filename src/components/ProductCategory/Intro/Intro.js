import React from 'react'
import { Link } from 'gatsby'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

import './Intro.scss'

import sprite from '../../../icons/sprite.svg'

import productCat1 from '../../../images/product-cat-1.svg'
import productCat2 from '../../../images/product-cat-2.svg'
import productCat3 from '../../../images/product-cat-3.svg'
import productCat4 from '../../../images/product-cat-4.svg'
import productCat5 from '../../../images/product-cat-5.svg'
import productCat6 from '../../../images/product-cat-6.svg'
import productCat7 from '../../../images/product-cat-5.svg'

const ProductCategoryIntro = () => {
  return (
    <section className="product-category-intro">
      <div className="container">
        <h1 className="product-category-intro__title title title--dark">Входные двери</h1>
        <div className="product-category-intro__slider-wrapper">
          <Swiper
            className="product-category-intro__slider product-category-intro-slider"
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={7}
            speed={500}
            loop={true}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            navigation={{
              prevEl: '.product-category-intro-slider__prev',
              nextEl: '.product-category-intro-slider__next'
            }}
          >
            <SwiperSlide className="product-category-intro-slider__item">
              <Link className="product-category-intro-slider__link" to="#" />
              <div className="product-category-intro-slider__icon">
                <img src={productCat1} alt=""/>
              </div>
              <div className="product-category-intro-slider__title">В наличии</div>
            </SwiperSlide>
            <SwiperSlide className="product-category-intro-slider__item">
              <Link className="product-category-intro-slider__link" to="#" />
              <div className="product-category-intro-slider__icon">
                <img src={productCat2} alt=""/>
              </div>
              <div className="product-category-intro-slider__title">На улицу</div>
            </SwiperSlide>
            <SwiperSlide className="product-category-intro-slider__item">
              <Link className="product-category-intro-slider__link" to="#" />
              <div className="product-category-intro-slider__icon">
                <img src={productCat3} alt=""/>
              </div>
              <div className="product-category-intro-slider__title">В квартиру</div>
            </SwiperSlide>
            <SwiperSlide className="product-category-intro-slider__item">
              <Link className="product-category-intro-slider__link" to="#" />
              <div className="product-category-intro-slider__icon">
                <img src={productCat4} alt=""/>
              </div>
              <div className="product-category-intro-slider__title">Нестандартный размер</div>
            </SwiperSlide>
            <SwiperSlide className="product-category-intro-slider__item">
              <Link className="product-category-intro-slider__link" to="#" />
              <div className="product-category-intro-slider__icon">
                <img src={productCat5} alt=""/>
              </div>
              <div className="product-category-intro-slider__title">С терморазрывом</div>
            </SwiperSlide>
            <SwiperSlide className="product-category-intro-slider__item">
              <Link className="product-category-intro-slider__link" to="#" />
              <div className="product-category-intro-slider__icon">
                <img src={productCat6} alt=""/>
              </div>
              <div className="product-category-intro-slider__title">Полуторные</div>
            </SwiperSlide>
            <SwiperSlide className="product-category-intro-slider__item">
              <Link className="product-category-intro-slider__link" to="#" />
              <div className="product-category-intro-slider__icon">
                <img src={productCat7} alt=""/>
              </div>
              <div className="product-category-intro-slider__title">Темные снаружи/светлые внутри</div>
            </SwiperSlide>
          </Swiper>
          <div className="product-category-intro-slider__btn product-category-intro-slider__prev">
            <svg><use href={`${sprite}#cat-slider-prev`} /></svg>
          </div>
          <div className="product-category-intro-slider__btn product-category-intro-slider__next">
            <svg><use href={`${sprite}#cat-slider-next`} /></svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategoryIntro