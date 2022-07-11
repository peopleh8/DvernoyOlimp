import React, { useRef, useContext } from 'react'
import { Link } from 'gatsby'

import  { Pagination, Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import gsap from 'gsap'

import './Bestsellers.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'

import { PrefixContext } from '../../../context/PrefixContext'

import sprite from '../../../icons/sprite.svg'

import door1 from '../../../images/door-1.png'
import door2 from '../../../images/door-2.png'
import door3 from '../../../images/door-3.png'
import door4 from '../../../images/door-4.png'

const Bestsellers = () => {
  let prefix = useContext(PrefixContext)

  const totalSlidesCount = useRef(null)
  const currentSlide = useRef(null)

  const tabPaginationButtons = ['Скрытые двери', 'Перегородки', 'Белые двери', 'Входные двери', 'Межкомнатные двери ', 'Крашенные двери']

  return (
    <div className="bestsellers">
      <div className="container">
        <div className="bestsellers__top">
          <div className="bestsellers__title title title--dark">Наши хиты продаж</div>
          <div className="bestsellers__slider-controls slider-controls">
            <div className="bestsellers__slider-counter slider-counter">
              <span className="bestsellers__slider-current slider-counter__current" ref={currentSlide}>1</span>
              <span className="bestsellers__slider-separator slider-counter__separator">/</span>
              <span className="bestsellers__slider-total slider-counter__total" ref={totalSlidesCount}>5</span>
            </div>
            <div className="bestsellers-slider-main__pagination slider-pagination" />
            <div className="bestsellers-slider-main__nav slider-nav">
              <div className="bestsellers-slider-main__btn bestsellers-slider-main__prev slider-nav__btn slider-nav__btn-prev">
                <svg>
                  <use href={`${sprite}#slider-arrow-prev`} />
                </svg>
              </div>
              <div className="bestsellers-slider-main__btn bestsellers-slider-main__next slider-nav__btn slider-nav__btn-next">
                <svg>
                  <use href={`${sprite}#slider-arrow-next`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="bestsellers__slider-main bestsellers-slider-main"
          modules={[Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          speed={500}
          allowTouchMove={false}
          autoHeight={true}
          navigation={{
            prevEl: '.bestsellers-slider-main__prev',
            nextEl: '.bestsellers-slider-main__next',
          }}
          pagination={{
            clickable: true,
            el: '.bestsellers-slider-main__pagination.slider-pagination',
            bulletClass: 'bestsellers-slider-main__pagination-item slider-pagination__item',
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
          <SwiperSlide className="bestsellers-slider-main__item">
            <div className="bestsellers-slider-tab__pagination bestsellers-slider-tab__pagination-1" />
            <Swiper
              className="bestsellers__slider-tab bestsellers-slider-tab"
              modules={[Pagination, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              speed={500}
              allowTouchMove={false}
              autoHeight={true}
              pagination={{
                clickable: true,
                el: '.bestsellers-slider-tab__pagination-1',
                bulletClass: 'bestsellers-slider-tab__pagination-item',
                bulletActiveClass: 'active',
                renderBullet: (index, className) => {
                  return (`
                    <div class="${className}">${tabPaginationButtons[index]}</div>
                  `)
                }
              }}
            >
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className="bestsellers-slider-main__item">
            <div className="bestsellers-slider-tab__pagination bestsellers-slider-tab__pagination-2" />
            <Swiper
              className="bestsellers__slider-tab bestsellers-slider-tab"
              modules={[Pagination, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              speed={500}
              allowTouchMove={false}
              autoHeight={true}
              pagination={{
                clickable: true,
                el: '.bestsellers-slider-tab__pagination-2',
                bulletClass: 'bestsellers-slider-tab__pagination-item',
                bulletActiveClass: 'active',
                renderBullet: (index, className) => {
                  return (`
                    <div class="${className}">${tabPaginationButtons[index]}</div>
                  `)
                }
              }}
            >
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className="bestsellers-slider-main__item">
            <div className="bestsellers-slider-tab__pagination bestsellers-slider-tab__pagination-3" />
            <Swiper
              className="bestsellers__slider-tab bestsellers-slider-tab"
              modules={[Pagination, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              speed={500}
              allowTouchMove={false}
              autoHeight={true}
              pagination={{
                clickable: true,
                el: '.bestsellers-slider-tab__pagination-3',
                bulletClass: 'bestsellers-slider-tab__pagination-item',
                bulletActiveClass: 'active',
                renderBullet: (index, className) => {
                  return (`
                    <div class="${className}">${tabPaginationButtons[index]}</div>
                  `)
                }
              }}
            >
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className="bestsellers-slider-main__item">
            <div className="bestsellers-slider-tab__pagination bestsellers-slider-tab__pagination-4" />
            <Swiper
              className="bestsellers__slider-tab bestsellers-slider-tab"
              modules={[Pagination, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              speed={500}
              allowTouchMove={false}
              autoHeight={true}
              pagination={{
                clickable: true,
                el: '.bestsellers-slider-tab__pagination-4',
                bulletClass: 'bestsellers-slider-tab__pagination-item',
                bulletActiveClass: 'active',
                renderBullet: (index, className) => {
                  return (`
                    <div class="${className}">${tabPaginationButtons[index]}</div>
                  `)
                }
              }}
            >
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door2} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
              <SwiperSlide className="bestsellers-slider-tab__item">
                <div className="bestsellers-slider-tab__item-inner">
                  <div className="bestsellers-product product">
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
                          <img src={door2} alt="" width={160} height={288} />
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                        <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door4} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="1">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные.</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__code">
                          Код: <span>920193</span>
                        </div>
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
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
                          <div className="product__rating" data-rating="5">
                            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                          </div>
                        </div>
                        <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа Art Vision А1 грунтованные. Блок скрытого монтажа</div>
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
                  <div className="bestsellers-product product">
                    <div className="product__inner">
                      <Link className="product__link" to={`${prefix}single-product/`} />
                      <div className="product__position">
                        <div className="product__labels">
                          <div className="product__label product__label--new">Новинка</div>
                        </div>
                      </div>
                      <button className="product__scales">
                        <svg><use href={`${sprite}#scales`} /></svg>
                      </button>
                      <div className="product__top">
                        <div className="product__preview">
                          <img src={door3} alt="" width={160} height={288} />
                        </div>
                        <div className="product__controls">
                          <div className="product__stock">В наличии</div>
                          <div className="product__rating" data-rating="2">
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
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Bestsellers