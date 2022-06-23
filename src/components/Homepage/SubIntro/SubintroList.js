import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../../context/PrefixContext'

import sprite from '../../../icons/sprite.svg'

import subintro1 from '../../../images/main-subintro-1.png'
import subintro2 from '../../../images/main-subintro-2.png'
import subintro3 from '../../../images/main-subintro-3.png'

const SubintroList = () => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="main-subintro__inner">
      <div className="main-subintro__item filter-item">
        <div className="main-subintro__item-inner filter-item__inner">
          <img src={subintro1} alt="" width={385} height={360} />
          <div className="main-subintro__item-info filter-item__info">
            <div className="main-subintro__item-title filter-item__title">Межкомнатные двери</div>
            <div className="main-subintro__item-links filter-item__links">
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Скрытые</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Раздвижные</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Под заказ</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
            </div>
            <div className="main-subintro__item-btn-wrapper filter-item__btn-wrapper">
              <Link className="main-subintro__item-btn btn filter-item__btn" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-btn btn__text filter-item__btn-text">Узнать больше</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-subintro__item filter-item">
        <div className="main-subintro__item-inner filter-item__inner">
          <img src={subintro2} alt="" width={385} height={360} />
          <div className="main-subintro__item-info filter-item__info">
            <div className="main-subintro__item-title filter-item__title">Межкомнатные двери</div>
            <div className="main-subintro__item-links filter-item__links">
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Скрытые</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Раздвижные</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Под заказ</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
            </div>
            <div className="main-subintro__item-btn-wrapper filter-item__btn-wrapper">
              <Link className="main-subintro__item-btn btn filter-item__btn" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-btn btn__text filter-item__btn-text">Узнать больше</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-subintro__item filter-item">
        <div className="main-subintro__item-inner filter-item__inner">
          <img src={subintro3} alt="" width={385} height={360} />
          <div className="main-subintro__item-info filter-item__info">
            <div className="main-subintro__item-title filter-item__title">Межкомнатные двери</div>
            <div className="main-subintro__item-links filter-item__links">
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Скрытые</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Раздвижные</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
              <Link className="main-subintro__item-link filter-item__link" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-text filter-item__text">Под заказ</span>
                <span className="main-subintro__item-icon filter-item__icon">
                  <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                </span>
              </Link>
            </div>
            <div className="main-subintro__item-btn-wrapper filter-item__btn-wrapper">
              <Link className="main-subintro__item-btn btn filter-item__btn" to={`${prefix}product-category/`}>
                <span className="main-subintro__item-btn btn__text filter-item__btn-text">Узнать больше</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubintroList