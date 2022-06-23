import React, { useRef } from 'react'

import  { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Reviews.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import sprite from '../../icons/sprite.svg'
import gsap from "gsap";

const Reviews = () => {
  const currentSlide = useRef(null)
  const totalSlidesCount = useRef(null)

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews__top">
          <div className="reviews__title title title--dark">Отзывы клиентов</div>
          <div className="reviews-slider__controls slider-controls">
            <div className="reviews-slider__counter slider-counter">
              <span className="reviews-slider__current slider-counter__current" ref={currentSlide}>1</span>
              <span className="reviews-slider__separator slider-counter__separator">/</span>
              <span className="reviews-slider__total slider-counter__total" ref={totalSlidesCount}>5</span>
            </div>
            <div className="reviews-slider__pagination slider-pagination" />
            <div className="reviews-slider__nav slider-nav">
              <div className="reviews-slider__btn reviews-slider__prev slider-nav__btn slider-nav__btn-prev">
                <svg>
                  <use href={`${sprite}#slider-arrow-prev`} />
                </svg>
              </div>
              <div className="reviews-slider__btn reviews-slider__next slider-nav__btn slider-nav__btn-next">
                <svg>
                  <use href={`${sprite}#slider-arrow-next`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="reviews__slider reviews-slider"
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          speed={500}
          navigation={{
            prevEl: '.reviews-slider__prev',
            nextEl: '.reviews-slider__next',
          }}
          pagination={{
            clickable: true,
            el: '.reviews-slider__pagination.slider-pagination',
            bulletClass: 'reviews-slider__pagination-item slider-pagination__item',
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
          <SwiperSlide className="reviews-slider__item">
            <div className="reviews-slider__item-inner">
              <div className="reviews-slider__item-quote">
                <svg><use href={`${sprite}#quote`} /></svg>
              </div>
              <div className="reviews-slider__item-content">
                <p className="reviews-slider__item-desc">Покупали входные , и межкомнатные двери в «Дверной Олимп» в городе Бровары ! Быстро и качественно установили ! Были некоторые нюансы , но спасибо огромное продавцу Татьяне , все уладила и все остались довольные</p>
                <div className="reviews-slider__item-info">
                  <div className="reviews-slider__item-name">Ольга</div>
                  <div className="reviews-slider__item-rating" data-rating="4">
                    { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
                  </div>
                </div>
                <div className="reviews-slider__item-date">25.11.2021</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviews-slider__item">
            <div className="reviews-slider__item-inner">
              <div className="reviews-slider__item-quote">
                <svg><use href={`${sprite}#quote`} /></svg>
              </div>
              <div className="reviews-slider__item-content">
                <p className="reviews-slider__item-desc">Покупали входные , и межкомнатные двери в «Дверной Олимп» в городе Бровары ! Быстро и качественно установили ! Были некоторые нюансы , но спасибо огромное продавцу Татьяне , все уладила и все остались довольные</p>
                <div className="reviews-slider__item-info">
                  <div className="reviews-slider__item-name">Ольга</div>
                  <div className="reviews-slider__item-rating" data-rating="4">
                    { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
                  </div>
                </div>
                <div className="reviews-slider__item-date">25.11.2021</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviews-slider__item">
            <div className="reviews-slider__item-inner">
              <div className="reviews-slider__item-quote">
                <svg><use href={`${sprite}#quote`} /></svg>
              </div>
              <div className="reviews-slider__item-content">
                <p className="reviews-slider__item-desc">Покупали входные , и межкомнатные двери в «Дверной Олимп» в городе Бровары ! Быстро и качественно установили ! Были некоторые нюансы , но спасибо огромное продавцу Татьяне , все уладила и все остались довольные</p>
                <div className="reviews-slider__item-info">
                  <div className="reviews-slider__item-name">Ольга</div>
                  <div className="reviews-slider__item-rating" data-rating="4">
                    { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
                  </div>
                </div>
                <div className="reviews-slider__item-date">25.11.2021</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviews-slider__item">
            <div className="reviews-slider__item-inner">
              <div className="reviews-slider__item-quote">
                <svg><use href={`${sprite}#quote`} /></svg>
              </div>
              <div className="reviews-slider__item-content">
                <p className="reviews-slider__item-desc">Покупали входные , и межкомнатные двери в «Дверной Олимп» в городе Бровары ! Быстро и качественно установили ! Были некоторые нюансы , но спасибо огромное продавцу Татьяне , все уладила и все остались довольные</p>
                <div className="reviews-slider__item-info">
                  <div className="reviews-slider__item-name">Ольга</div>
                  <div className="reviews-slider__item-rating" data-rating="4">
                    { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
                  </div>
                </div>
                <div className="reviews-slider__item-date">25.11.2021</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews