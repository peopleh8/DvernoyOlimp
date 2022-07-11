import React from 'react'

import sprite from '../../../icons/sprite.svg'

const BrandsIntroBtnLoad = () => {
  return (
    <div className="brands__btn-wrapper load-btn-wrapper">
      <button className="brands__btn load-btn">
      <span className="brands__btn-icon load-btn__icon">
        <svg><use href={`${sprite}#load-arrow`} /></svg>
      </span>
        <span className="brands__btn-text load-btn__text">Загрузить еще</span>
      </button>
    </div>
  )
}

export default BrandsIntroBtnLoad