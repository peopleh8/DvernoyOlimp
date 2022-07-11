import React from 'react'

import sprite from '../../icons/sprite.svg'

const CheckoutDelivery = () => {
  return (
    <div className="checkout-info__item">
      <div className="checkout-info__header">
        <div className="checkout-info__header-number">2</div>
        <div className="checkout-info__header-title">Доставка</div>
      </div>
      <div className="checkout-info__delivery checkout-info__select">
        <span className="checkout-info__label">Выберите способ доставки:</span>
        <div className="checkout-info__inner">
          <div className="checkout-info__select-item">
            <input className="checkout-info__select-radio" id="checkout-delivery-1" type="radio" name="checkout-delivery" value="store" />
            <label className="checkout-info__select-btn" htmlFor="checkout-delivery-1">
              <span className="checkout-info__select-icon">
                <svg><use href={`${sprite}#user`} /></svg>
              </span>
              <span className="checkout-info__select-check" />
              <span className="checkout-info__select-text">Самовывоз из магазина</span>
            </label>
          </div>
          <div className="checkout-info__select-item">
            <input className="checkout-info__select-radio" id="checkout-delivery-2" type="radio" name="checkout-delivery" value="branch" />
            <label className="checkout-info__select-btn" htmlFor="checkout-delivery-2">
              <span className="checkout-info__select-icon">
                <svg><use href={`${sprite}#newpost`} /></svg>
              </span>
              <span className="checkout-info__select-check" />
              <span className="checkout-info__select-desc">
                <span className="checkout-info__select-text">В отделение «Новая Почта»</span>
                <span className="checkout-info__select-subtext">Доставка от +350 грн»</span>
              </span>
            </label>
          </div>
          <div className="checkout-info__select-item">
            <input className="checkout-info__select-radio" id="checkout-delivery-3" type="radio" name="checkout-delivery" value="courier" />
            <label className="checkout-info__select-btn" htmlFor="checkout-delivery-3">
              <span className="checkout-info__select-icon">
                <svg><use href={`${sprite}#newpost`} /></svg>
              </span>
              <span className="checkout-info__select-check" />
              <span className="checkout-info__select-desc">
                <span className="checkout-info__select-text">Курьером по адресу</span>
                <span className="checkout-info__select-subtext">Доставка от +450 грн</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutDelivery