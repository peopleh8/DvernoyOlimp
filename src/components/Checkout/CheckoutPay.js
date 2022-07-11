import React from 'react'

import sprite from '../../icons/sprite.svg'

const CheckoutPay = () => {
  return (
    <div className="checkout-info__item">
      <div className="checkout-info__header">
        <div className="checkout-info__header-number">3</div>
        <div className="checkout-info__header-title">Метод оплаты</div>
      </div>
      <div className="checkout-info__pay checkout-info__select">
        <span className="checkout-info__label">Выберите метод оплаты</span>
        <div className="checkout-info__inner">
          <div className="checkout-info__select-item">
            <input className="checkout-info__select-radio" id="checkout-pay-1" type="radio" name="checkout-pay" value="cash" />
            <label className="checkout-info__select-btn" htmlFor="checkout-pay-1">
              <span className="checkout-info__select-icon checkout-info__select-icon--small">
                <svg><use href={`${sprite}#money`} /></svg>
              </span>
              <span className="checkout-info__select-check" />
              <span className="checkout-info__select-text">Наличными</span>
            </label>
          </div>
          <div className="checkout-info__select-item">
            <input className="checkout-info__select-radio" id="checkout-pay-2" type="radio" name="checkout-pay" value="card" />
            <label className="checkout-info__select-btn" htmlFor="checkout-pay-2">
              <span className="checkout-info__select-icon checkout-info__select-icon--big">
                <svg><use href={`${sprite}#paymethods`} /></svg>
              </span>
              <span className="checkout-info__select-check" />
              <span className="checkout-info__select-text">Картой на сайте»</span>
            </label>
          </div>
        </div>
      </div>
      <div className="checkout-info__textarea-wrapper">
        <label className="checkout-info__label" htmlFor="checkout-message">Добавить комментарий</label>
        <div className="checkout-info__textarea-inner">
          <textarea
            className="checkout-info__textarea"
            id="checkout-message"
            name="message"
            autoComplete="off"
            placeholder="Напишите что считаете важным"
          />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPay