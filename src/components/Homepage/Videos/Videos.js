import React, { useRef } from 'react'

import gsap from 'gsap'

import  { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Videos.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import sprite from '../../../icons/sprite.svg'

import video1 from '../../../images/video-1.jpg'
import video2 from '../../../images/video-2.jpg'

const MainVideos = () => {
  const currentSlide = useRef(null)
  const totalSlidesCount = useRef(null)

  return (
    <div className="main-videos">
      <div className="container">
        <div className="main-videos__top">
          <div className="main-videos__title title title--dark">Последние видео</div>
          <div className="main-videos-slider__controls slider-controls">
            <div className="main-videos-slider__counter slider-counter">
              <span className="main-videos-slider__current slider-counter__current" ref={currentSlide}>1</span>
              <span className="main-videos-slider__separator slider-counter__separator">/</span>
              <span className="main-videos-slider__total slider-counter__total" ref={totalSlidesCount}>5</span>
            </div>
            <div className="main-videos-slider__pagination slider-pagination" />
            <div className="main-videos-slider__nav slider-nav">
              <div className="main-videos-slider__btn main-videos-slider__prev slider-nav__btn slider-nav__btn-prev">
                <svg>
                  <use href={`${sprite}#slider-arrow-prev`} />
                </svg>
              </div>
              <div className="main-videos-slider__btn main-videos-slider__next slider-nav__btn slider-nav__btn-next">
                <svg>
                  <use href={`${sprite}#slider-arrow-next`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="main-videos__slider main-videos-slider"
          modules={[Pagination, Navigation]}
          spaceBetween={60}
          slidesPerView={2}
          speed={500}
          navigation={{
            prevEl: '.main-videos-slider__prev',
            nextEl: '.main-videos-slider__next',
          }}
          pagination={{
            clickable: true,
            el: '.main-videos-slider__pagination',
            bulletClass: 'main-videos-slider__pagination-item slider-pagination__item',
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
            1366: {
              spaceBetween: 60
            },
            992: {
              spaceBetween: 10
            },
            481: {
              spaceBetween: 30,
              slidesPerView: 2
            },
            0: {
              spaceBetween: 10,
              slidesPerView: 1
            }
          }}
        >
          <SwiperSlide className="main-videos-slider__item">
            <div className="video">
              <div className="video__preview">
                <img src={video1} alt="" width={610} height={345} />
                <button className="video__btn">
                  <svg><use href={`${sprite}#video-youtube`} /></svg>
                </button>
              </div>
              <div className="video__info">
                <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
                <div className="video__duration">1:52</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="main-videos-slider__item">
            <div className="video">
              <div className="video__preview">
                <img src={video2} alt="" width={610} height={345} />
                <button className="video__btn">
                  <svg><use href={`${sprite}#video-youtube`} /></svg>
                </button>
              </div>
              <div className="video__info">
                <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
                <div className="video__duration">1:52</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="main-videos-slider__item">
            <div className="video">
              <div className="video__preview">
                <img src={video1} alt="" width={610} height={345} />
                <button className="video__btn">
                  <svg><use href={`${sprite}#video-youtube`} /></svg>
                </button>
              </div>
              <div className="video__info">
                <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
                <div className="video__duration">1:52</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="main-videos-slider__item">
            <div className="video">
              <div className="video__preview">
                <img src={video2} alt="" width={610} height={345} />
                <button className="video__btn">
                  <svg><use href={`${sprite}#video-youtube`} /></svg>
                </button>
              </div>
              <div className="video__info">
                <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
                <div className="video__duration">1:52</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="main-videos-slider__item">
            <div className="video">
              <div className="video__preview">
                <img src={video1} alt="" width={610} height={345} />
                <button className="video__btn">
                  <svg><use href={`${sprite}#video-youtube`} /></svg>
                </button>
              </div>
              <div className="video__info">
                <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
                <div className="video__duration">1:52</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default MainVideos