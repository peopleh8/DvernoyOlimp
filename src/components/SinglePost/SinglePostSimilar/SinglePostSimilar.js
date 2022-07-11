import React, { useRef } from 'react'

import './SinglePostSimilar.scss'

import SinglePostSlider from './SinglePostSlider'
import sprite from "../../../icons/sprite.svg";

const SinglePostSimilar = () => {
  const currentSlide = useRef(null)
  const totalSlidesCount = useRef(null)

  return (
    <div className="single-post-similar">
      <div className="container">
        <div className="single-post-similar__top">
          <div className="single-post-similar__title title title--dark">Вам будет интересно</div>
          <div className="single-post-similar__controls slider-controls">
            <div className="single-post-similar__counter slider-counter">
              <span className="single-post-similar__current slider-counter__current" ref={currentSlide}>1</span>
              <span className="single-post-similar__separator slider-counter__separator">/</span>
              <span className="single-post-similar__total slider-counter__total" ref={totalSlidesCount}>5</span>
            </div>
            <div className="single-post-similar__pagination slider-pagination" />
            <div className="single-post-similar__nav slider-nav">
              <div className="single-post-similar__btn single-post-similar__prev slider-nav__btn slider-nav__btn-prev">
                <svg>
                  <use href={`${sprite}#slider-arrow-prev`} />
                </svg>
              </div>
              <div className="single-post-similar__btn single-post-similar__next slider-nav__btn slider-nav__btn-next">
                <svg>
                  <use href={`${sprite}#slider-arrow-next`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <SinglePostSlider currentSlide={currentSlide} totalSlidesCount={totalSlidesCount} />
      </div>
    </div>
  )
}

export default SinglePostSimilar