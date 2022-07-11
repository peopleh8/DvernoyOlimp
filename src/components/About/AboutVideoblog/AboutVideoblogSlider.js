import React, { useRef } from 'react'
import  { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import gsap from 'gsap'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import sprite from '../../../icons/sprite.svg'

import video1 from '../../../images/video-1.jpg'

const AboutVideoblogSlider = () => {
  const currentSlide = useRef(null)
  const totalSlidesCount = useRef(null)

  return (
    <div className="about-videoblog__slider-wrapper">
      <Swiper
        className="about-videoblog__slider"
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        speed={500}
        navigation={{
          prevEl: `.about-videoblog__prev`,
          nextEl: `.about-videoblog__next`,
        }}
        pagination={{
          clickable: true,
          el: '.about-videoblog__pagination',
          bulletClass: '.about-videoblog__pagination-item slider-pagination__item',
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
        <SwiperSlide className="video about-videoblog__item">
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
        </SwiperSlide>
        <SwiperSlide className="video about-videoblog__item">
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
        </SwiperSlide>
        <SwiperSlide className="video about-videoblog__item">
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
        </SwiperSlide>
        <SwiperSlide className="video about-videoblog__item">
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
        </SwiperSlide>
      </Swiper>
      <div className="about-videoblog__controls slider-controls">
        <div className="about-videoblog__counter slider-counter">
          <span className="about-videoblog__current slider-counter__current" ref={currentSlide}>1</span>
          <span className="about-videoblog__separator slider-counter__separator">/</span>
          <span className="about-videoblog__total slider-counter__total" ref={totalSlidesCount}>5</span>
        </div>
        <div className="about-videoblog__pagination slider-pagination" />
        <div className="about-videoblog__nav slider-nav">
          <div className="about-videoblog__btn about-videoblog__prev slider-nav__btn slider-nav__btn-prev">
            <svg>
              <use href={`${sprite}#slider-arrow-prev`} />
            </svg>
          </div>
          <div className="about-videoblog__btn about-videoblog__next slider-nav__btn slider-nav__btn-next">
            <svg>
              <use href={`${sprite}#slider-arrow-next`} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutVideoblogSlider