import React from 'react'
import sprite from "../../../icons/sprite.svg";

const ProductCategoryLoadBtn = () => {
  return (
    <div className="product-category-btn-wrapper load-btn-wrapper">
      <button className="product-category__btn load-btn">
        <span className="product-category__btn-icon load-btn__icon">
          <svg><use href={`${sprite}#load-arrow`} /></svg>
        </span>
        <span className="product-category__btn-text load-btn__text">Загрузить еще</span>
      </button>
    </div>
  )
}

export default ProductCategoryLoadBtn