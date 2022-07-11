import React from 'react'
import InputMask from 'react-input-mask'

import sprite from '../../../icons/sprite.svg'

const SingleProductContent = () => {
  return (
    <div className="single-product-intro__content single-product-intro-content">
      <div className="single-product-intro-content__top">
        <div className="single-product-intro-content__rating rating" data-rating="4">
          { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>)}
        </div>
        <div className="single-product-intro-content__number">
          Код товара: <span>24029</span>
        </div>
      </div>
      <div className="single-product-intro-content__inps">
        <div className="single-product-intro-content__inp">
          <div className="single-product-intro-content__text">Размер двери:</div>
          <div className="single-product-intro-content__dropdown dropdown">
            <div className="single-product-intro-content__current dropdown__current">
              <div className="single-product-intro-content__text dropdown__text">Не выбрано</div>
              <div className="single-product-intro-content__icon dropdown__icon">
                <svg><use href={`${sprite}#big-item-arrow`} /></svg>
              </div>
            </div>
            <div className="single-product-intro-content__list dropdown__list">
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 1</div>
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 2</div>
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 3</div>
            </div>
          </div>
        </div>
        <div className="single-product-intro-content__inp">
          <div className="single-product-intro-content__text">Коробка:</div>
          <div className="single-product-intro-content__dropdown dropdown">
            <div className="single-product-intro-content__current dropdown__current">
              <div className="single-product-intro-content__text dropdown__text">Не выбрано</div>
              <div className="single-product-intro-content__icon dropdown__icon">
                <svg><use href={`${sprite}#big-item-arrow`} /></svg>
              </div>
            </div>
            <div className="single-product-intro-content__list dropdown__list">
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 1</div>
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 2</div>
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 3</div>
            </div>
          </div>
        </div>
        <div className="single-product-intro-content__inp">
          <div className="single-product-intro-content__text">Наличник:</div>
          <div className="single-product-intro-content__dropdown dropdown">
            <div className="single-product-intro-content__current dropdown__current">
              <div className="single-product-intro-content__text dropdown__text">Не выбрано</div>
              <div className="single-product-intro-content__icon dropdown__icon">
                <svg><use href={`${sprite}#big-item-arrow`} /></svg>
              </div>
            </div>
            <div className="single-product-intro-content__list dropdown__list">
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 1</div>
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 2</div>
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 3</div>
            </div>
          </div>
        </div>
        <div className="single-product-intro-content__inp">
          <div className="single-product-intro-content__text">Добор:</div>
          <div className="single-product-intro-content__dropdown dropdown">
            <div className="single-product-intro-content__current dropdown__current">
              <div className="single-product-intro-content__text dropdown__text">Не выбрано</div>
              <div className="single-product-intro-content__icon dropdown__icon">
                <svg><use href={`${sprite}#big-item-arrow`} /></svg>
              </div>
            </div>
            <div className="single-product-intro-content__list dropdown__list">
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 1</div>
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 2</div>
              <div className="single-product-intro-content__item dropdown__item">Не выбрано 3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-intro-content__controls">
        <div className="single-product-intro-content__controls-item">
          <div className="single-product-intro-content__counter">
            <button className="single-product-intro-content__counter-btn single-product-intro-content__counter-btn--minus" />
            <input className="single-product-intro-content__counter-inp" type="text" autoComplete="off" name="count" value={0} />
            <button className="single-product-intro-content__counter-btn single-product-intro-content__counter-btn--plus" />
          </div>
        </div>
        <div className="single-product-intro-content__controls-item">
          <div className="single-product-intro-content__btn-wrapper">
            <button className="single-product-intro-content__btn single-product-intro-content__btn--buy btn">
              <span className="single-product-intro-content__btn-icon btn__icon">
                <svg><use href={`${sprite}#cart`} /></svg>
              </span>
              <span className="single-product-intro-content__btn-text btn__text">Купить</span>
            </button>
          </div>
        </div>
      </div>
      <div className="single-product-intro-content__price">
        <div className="single-product-intro-content__price-text">Общая стоимость:</div>
        <div className="single-product-intro-content__price-count">
          <span>4 303</span> грн / шт.
        </div>
      </div>
      <div className="single-product-intro-content__btns">
        <div className="single-product-intro-content__btns-item">
          <button className="single-product-intro-content__btn single-product-intro-content__btn--ruler btn">
            <span className="single-product-intro-content__btn-icon btn__icon">
              <svg><use href={`${sprite}#ruler`} /></svg>
            </span>
            <span className="single-product-intro-content__btn-text btn__text">Вызвать замерщика</span>
          </button>
        </div>
        <div className="single-product-intro-content__btns-item">
          <button className="single-product-intro-content__btn single-product-intro-content__btn--scales btn">
            <span className="single-product-intro-content__btn-icon btn__icon">
              <svg><use href={`${sprite}#scales`} /></svg>
            </span>
            <span className="single-product-intro-content__btn-text btn__text">К сравнению</span>
          </button>
        </div>
      </div>
      <div className="single-product-intro-content__bot">
        <div className="single-product-intro-content__bot-item">
          <InputMask
            className="single-product-intro-content__phone"
            mask="+38 (099) 999-99-99"
            maskPlaceholder={null}
            name="phone"
            autoComplete="off"
            type="tel"
            placeholder="+38 (___) ___-__-__"
          />
        </div>
        <div className="single-product-intro-content__bot-item">
          <button className="single-product-intro-content__btn single-product-intro-content__btn--cursor btn">
            <span className="single-product-intro-content__btn-icon btn__icon">
              <svg><use href={`${sprite}#cursor`} /></svg>
            </span>
            <span className="single-product-intro-content__btn-text btn__text">Купить в 1 клик</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProductContent