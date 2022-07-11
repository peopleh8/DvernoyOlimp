import React, { useRef, useContext } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import  { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Posts.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import { PrefixContext } from '../../../context/PrefixContext'

import sprite from '../../../icons/sprite.svg'

import post1 from '../../../images/post-1.jpg'
import post2 from '../../../images/post-2.jpg'
import post3 from '../../../images/post-3.jpg'

const MainPosts = () => {
  let prefix = useContext(PrefixContext)
  
  const currentSlide = useRef(null)
  const totalSlidesCount = useRef(null)

  return (
    <div className="main-posts">
      <div className="container">
        <div className="main-posts__top">
          <div className="main-posts__title title title--dark">Блог</div>
          <div className="main-posts-slider__controls slider-controls">
            <div className="main-posts-slider__counter slider-counter">
              <span className="main-posts-slider__current slider-counter__current" ref={currentSlide}>1</span>
              <span className="main-posts-slider__separator slider-counter__separator">/</span>
              <span className="main-posts-slider__total slider-counter__total" ref={totalSlidesCount}>5</span>
            </div>
            <div className="main-posts-slider__pagination slider-pagination" />
            <div className="main-posts-slider__nav slider-nav">
              <div className="main-posts-slider__btn main-posts-slider__prev slider-nav__btn slider-nav__btn-prev">
                <svg>
                  <use href={`${sprite}#slider-arrow-prev`} />
                </svg>
              </div>
              <div className="main-posts-slider__btn main-posts-slider__next slider-nav__btn slider-nav__btn-next">
                <svg>
                  <use href={`${sprite}#slider-arrow-next`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className="main-posts__slider main-posts-slider"
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          speed={500}
          navigation={{
            prevEl: '.main-posts-slider__prev',
            nextEl: '.main-posts-slider__next',
          }}
          pagination={{
            clickable: true,
            el: '.main-posts-slider__pagination',
            bulletClass: 'main-posts-slider__pagination-item slider-pagination__item',
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
              spaceBetween: 30,
            },
            992: {
              spaceBetween: 20,
            },
            650: {
              spaceBetween: 30,
              slidesPerView: 3
            },
            481: {
              spaceBetween: 10,
              slidesPerView: 2
            },
            0: {
              spaceBetween: 10,
              slidesPerView: 1
            }
          }}
        >
          <SwiperSlide className="main-posts-slider__item">
            <div className="post">
              <div className="post__inner">
                <Link className="post__link" to={`${prefix}single-post/`} />
                <div className="post__preview">
                  <img src={post1} alt="" width={410} height={295} />
                </div>
                <div className="post__date">01.12.2021</div>
                <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="post">
              <div className="post__inner">
                <Link className="post__link" to={`${prefix}single-post/`} />
                <div className="post__preview">
                  <img src={post2} alt="" width={410} height={295} />
                </div>
                <div className="post__date">01.12.2021</div>
                <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="post">
              <div className="post__inner">
                <Link className="post__link" to={`${prefix}single-post/`} />
                <div className="post__preview">
                  <img src={post3} alt="" width={410} height={295} />
                </div>
                <div className="post__date">01.12.2021</div>
                <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="post">
              <div className="post__inner">
                <Link className="post__link" to={`${prefix}single-post/`} />
                <div className="post__preview">
                  <img src={post1} alt="" width={410} height={295} />
                </div>
                <div className="post__date">01.12.2021</div>
                <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="post">
              <div className="post__inner">
                <Link className="post__link" to={`${prefix}single-post/`} />
                <div className="post__preview">
                  <img src={post2} alt="" width={410} height={295} />
                </div>
                <div className="post__date">01.12.2021</div>
                <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="post">
              <div className="post__inner">
                <Link className="post__link" to={`${prefix}single-post/`} />
                <div className="post__preview">
                  <img src={post3} alt="" width={410} height={295} />
                </div>
                <div className="post__date">01.12.2021</div>
                <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default MainPosts