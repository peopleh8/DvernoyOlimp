import React, { useContext } from 'react'
import { Link } from 'gatsby'

import ProductCategoryLoadBtn from './ProductCategoryLoadBtn'
import ProductCategoryPagination from './ProductCategoryPagination'
import Banner from '../Banner/Banner'

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

import door1 from '../../images/door-1.png'

const ProductCategoryList = () => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="product-category-list-wrapper">
      <div className="product-category-list">
        {
          new Array(15).fill('').map(() => {
            return (
              <div className="product-category-list__item product">
                <div className="product__inner">
                  <Link className="product__link" to={`${prefix}single-product/`} />
                  <div className="product__position">
                    <div className="product__code">
                      Код: <span>920193</span>
                    </div>
                    <div className="product__labels">
                      <div className="product__label product__label--new">Новинка</div>
                      <div className="product__label product__label--sale">Акция</div>
                      <div className="product__label product__label--top">Топ</div>
                    </div>
                    <div className="product__icon"><svg><use href={`${sprite}#product-youtube`} /></svg></div>
                  </div>
                  <button className="product__scales">
                    <svg><use href={`${sprite}#scales`} /></svg>
                  </button>
                  <div className="product__top">
                    <div className="product__preview">
                      <img src={door1} alt="" width={160} height={288} />
                    </div>
                    <div className="product__controls">
                      <div className="product__stock">В наличии</div>
                      <div className="product__rating" data-rating="3">
                        { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>) }
                      </div>
                    </div>
                    <div className="product__title">Art Vision А1 грунтованные. Блок скрытого монтажа</div>
                  </div>
                  <div className="product__bot">
                    <div className="product__price">
                      141 254 грн
                    </div>
                    <Link className="product__btn" to={`${prefix}single-product/`}>
                      <span className="product__btn-icon">
                        <svg><use href={`${sprite}#btn-cart`} /></svg>
                      </span>
                      <span className="product__btn-text">Купить</span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <ProductCategoryLoadBtn />
      <ProductCategoryPagination />
      <Banner className={'product-category-sidebar__banner'} />
    </div>
  )
}

export default ProductCategoryList