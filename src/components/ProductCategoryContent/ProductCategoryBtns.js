import React from 'react'

import sprite from '../../icons/sprite.svg'

const ProductCategoryBtns = ({ isSearchPage, setIsOpenFilter }) => {
  return (
    <div className="product-category-btns">
      {
        !isSearchPage &&
          <div
            className="product-category-btns__item"
            onClick={() => setIsOpenFilter(true)}
          >
            <div className="product-category-btns__item-icon">
              <svg><use href={`${sprite}#filter`} /></svg>
            </div>
            <div className="product-category-btns__item-text">Фильтр</div>
          </div>
      }
      <div
        className={`product-category-btns__item ${isSearchPage ? 'full-width' : ''}`}
        data-fancybox="sort"
        data-src="#sort-modal"
      >
        <div className="product-category-btns__item-icon">
          <svg><use href={`${sprite}#sort`} /></svg>
        </div>
        <div className="product-category-btns__item-text">Сортировка</div>
      </div>
    </div>
  )
}

export default ProductCategoryBtns