import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade } from 'swiper'
import ImageZoom from 'react-image-zooom'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

import sprite from '../../../icons/sprite.svg'

import singleProductImg from '../../../images/single-product.jpg'

const SingleProductSlider = () => {
  return (
    <div className="single-product-intro__slider-wrapper">
      <div className="single-product-intro__slider-pagination" />
      <div className="single-product-intro__slider-inner">
        <div className="single-product-intro__slider-zoom">
          <svg><use href={`${sprite}#zoom`} /></svg>
        </div>
        {/* disavaliable */}
        <div className="single-product-intro__slider-stock avaliable">В наличии</div>
        <Swiper
          className="single-product-intro__slider single-product-intro-slider"
          modules={[Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          speed={500}
          allowTouchMove={false}
          pagination={{
            clickable: true,
            el: '.single-product-intro__slider-pagination',
            bulletClass: 'single-product-intro__slider-pagination-item',
            bulletActiveClass: 'active',
            renderBullet: (index, className) => {
              return (`
              <div class="${className}">
                <div class="single-product-intro__slider-pagination-inner">
                  <img src="${singleProductImg}" alt="" width="58" height="72">
                </div>
              </div>
            `)
            }
          }}
        >
          {
            new Array(3).fill('').map((_, index) => {
              return (
                <SwiperSlide
                  className="single-product-intro-slider__item"
                  key={index}
                  onMouseEnter={e => e.target.closest('.cIKpxU') && e.target.closest('.cIKpxU').click()}
                >
                  <ImageZoom src={singleProductImg} alt="" zoom="200" width={420} height={605} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default SingleProductSlider