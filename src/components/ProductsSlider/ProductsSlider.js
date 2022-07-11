import React, { useRef, useContext } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import  { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './ProductsSlider.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

import door1 from '../../images/door-1.png'

const ProductsSlider = ({ className }) => {
  let prefix = useContext(PrefixContext)

  const currentSlide = useRef(null)
  const totalSlidesCount = useRef(null)

  return (
    <div className={`${className} products-slider`}>
      <div className="container">
        <div className="products-slider__top">
          <div className="products-slider__title title title--dark">Новинки</div>
          <div className="products-slider__controls slider-controls">
            <div className="products-slider__counter slider-counter">
              <span className="products-slider__current slider-counter__current" ref={currentSlide}>1</span>
              <span className="products-slider__separator slider-counter__separator">/</span>
              <span className="products-slider__total slider-counter__total" ref={totalSlidesCount}>5</span>
            </div>
            <div className={`${className}-pagination products-slider__pagination slider-pagination`} />
            <div className="products-slider__nav slider-nav">
              <div className={`${className}__prev products-slider__btn products-slider__prev slider-nav__btn slider-nav__btn-prev`}>
                <svg>
                  <use href={`${sprite}#slider-arrow-prev`} />
                </svg>
              </div>
              <div className={`${className}__next products-slider__btn products-slider__next slider-nav__btn slider-nav__btn-next`}>
                <svg>
                  <use href={`${sprite}#slider-arrow-next`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="products-slider__wrapper">
          <Swiper
            className={`${className} products-slider__list products-slider-list`}
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={4}
            speed={500}
            navigation={{
              prevEl: `.${className}__prev`,
              nextEl: `.${className}__next`,
            }}
            pagination={{
              clickable: true,
              el: `.${className}-pagination`,
              bulletClass: `.${className}__item slider-pagination__item`,
              bulletActiveClass: 'active',
              renderBullet: (index, className) => {
                return (`
                  <div class="${className}"></div>
                `)
              }
            }}
            onAfterInit={swiper => {
              setTimeout(() => {
                totalSlidesCount.current.textContent = (swiper.slides.length - swiper.params.slidesPerView) + 1
              }, 0)
            }}
            onSlideChange={swiper => {
              gsap.to(currentSlide.current, .2, { force3D: true, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
                  gsap.to(currentSlide.current, .1, { force3D: true })

                  currentSlide.current.innerHTML = swiper.realIndex + 1
                }});
              gsap.to(currentSlide.current, .2, { force3D: true, opacity: 1, ease: 'Power2.easeOut', delay: .3 })
            }}
            breakpoints={{
              992: {
                slidesPerView: 4
              },
              649: {
                slidesPerView: 3
              },
              0: {
                slidesPerView: 2
              }
            }}
          >
            {
              new Array(7).fill('').map((_, index) => {
                return (
                  <SwiperSlide className="products-slider-list__item">
                    <div className="product">
                      <div className="product__inner">
                        <Link className="product__link" to={`${prefix}single-product/`} />
                        <div className="product__position">
                          <div className="product__code">
                            Код: <span>920193</span>
                          </div>
                          <div className="product__labels">
                            <div className="product__label product__label--new">Новинка</div>
                            <div className="product__label product__label--sale">Акция</div>
                            <div className="product__label product__label--top">Топ</div>
                          </div>
                          <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                        </div>
                        <button className="product__scales">
                          <svg><use href={`${sprite}#scales`} /></svg>
                        </button>
                        <div className="product__top">
                          <div className="product__preview">
                            <img src={door1} alt="" width={160} height={288} />
                          </div>
                          <div className="product__controls">
                            <div className="product__stock">В наличии</div>
                            <div className="product__rating" data-rating="3">
                              { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                            </div>
                          </div>
                          <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа</div>
                        </div>
                        <div className="product__bot">
                          <div className="product__price">
                            141 254 грн
                          </div>
                          <Link className="product__btn" to={`${prefix}single-product/`}>
                            <span className="product__btn-icon">
                              <svg><use href={`${sprite}#btn-cart`} /></svg>
                            </span>
                            <span className="product__btn-text">Купить</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ProductsSlider