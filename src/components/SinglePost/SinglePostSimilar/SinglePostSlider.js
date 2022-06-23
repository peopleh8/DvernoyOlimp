import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'

import { PrefixContext } from '../../../context/PrefixContext'

import post1 from '../../../images/post-1.jpg'


const SinglePostSlider = () => {
  let prefix = useContext(PrefixContext)

  return (
    <Swiper
      className="single-post-similar__slider single-post-similar-slider"
      spaceBetween={30}
      slidesPerView={3}
      speed={500}
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