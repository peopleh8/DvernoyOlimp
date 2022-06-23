import React from 'react'

import sprite from '../../../icons/sprite.svg'

const BlogIntroBtn = () => {
  return (
    <div className="blog-intro__btn-wrapper load-btn-wrapper">
      <button className="blog-intro__btn load-btn">
        <span className="blog-intro__btn-icon load-btn__icon">
          <svg><use href={`${sprite}#load-arrow`} /></svg>
        </span>
        <span className="blog-intro__btn-text load-btn__text">Загрузить еще</span>
      </button>
    </div>
  )
}

export default BlogIntroBtn