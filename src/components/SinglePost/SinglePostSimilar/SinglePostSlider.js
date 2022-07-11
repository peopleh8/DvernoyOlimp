import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import gsap from 'gsap'


import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import { PrefixContext } from '../../../context/PrefixContext'

import post1 from '../../../images/post-1.jpg'


const SinglePostSlider = ({ currentSlide, totalSlidesCount }) => {
  let prefix = useContext(PrefixContext)

  return (
    <Swiper
      className="single-post-similar__slider single-post-similar-slider"
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      speed={500}
      navigation={{
        prevEl: `.single-post-similar__prev`,
        nextEl: `.single-post-similar__next`,
      }}
      pagination={{
        clickable: true,
        el: '.single-post-similar__pagination',
        bulletClass: '.single-post-similar__pagination-item slider-pagination__item',
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
      breakpoints={{
        1366: {
          spaceBetween: 30
        },
        991: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        649: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        481: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }}
    >
      <SwiperSlide className="single-post-similar-slider__item">
        <div className="post">
          <div className="post__inner">
            <Link className="post__link" to={`${prefix}single-post/`} />
            <div className="post__preview">
              <img src={post1} alt="" width={410} height={295} />
            </div>
            <div className="post__info">
              <div className="post__date">01.12.2021</div>
              <div className="post__cat">Название категории</div>
            </div>
            <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="single-post-similar-slider__item">
        <div className="post">
          <div className="post__inner">
            <Link className="post__link" to={`${prefix}single-post/`} />
            <div className="post__preview">
              <img src={post1} alt="" width={410} height={295} />
            </div>
            <div className="post__info">
              <div className="post__date">01.12.2021</div>
              <div className="post__cat">Название категории</div>
            </div>
            <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="single-post-similar-slider__item">
        <div className="post">
          <div className="post__inner">
            <Link className="post__link" to={`${prefix}single-post/`} />
            <div className="post__preview">
              <img src={post1} alt="" width={410} height={295} />
            </div>
            <div className="post__info">
              <div className="post__date">01.12.2021</div>
              <div className="post__cat">Название категории</div>
            </div>
            <div className="post__title">А в DARUMI в листопад - АКЦІЯ! </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SinglePostSlider