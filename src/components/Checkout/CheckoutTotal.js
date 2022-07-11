import React from 'react'

import sprite from '../../icons/sprite.svg'

const CheckoutTotal = () => {
  return (
    <div className="checkout-content__total">
      <div className="checkout-content__total-section">
        <div className="checkout-content__total-item">
          <div className="checkout-content__total-title">Вместе:</div>
          <div className="checkout-content__total-value">2 товар на сумму</div>
        </div>
        <div className="checkout-content__total-item">
          <div className="checkout-content__total-title">Цена доставки:</div>
          <div className="checkout-content__total-value">Бесплатно</div>
        </div>
        <div className="checkout-content__total-item">
          <div className="checkout-content__total-title">Итого:</div>
          <div className="checkout-content__total-value">4 303 грн</div>
        </div>
      </div>
      <div className="checkout-content__total-privacy">
        <input className="checkout-content__total-privacy-check" id="checkout-privacy" type="checkbox" name="privacy" />
        <label className="checkout-content__total-privacy-btn" htmlFor="checkout-privacy">
          <span className="checkout-content__total-privacy-icon">
            <svg><use href={`${sprite}#check`} /></svg>
          </span>
          <span className="checkout-content__total-privacy-text">
            Подтверждая заказ, я согласен с <a href="#" target="_blank" rel="noreferrer">пользовательским соглашением</a>
          </span>
        </label>
      </div>
      <div className="checkout-content__total-btn-wrapper">
        <button className="checkout-content__total-btn btn" type="submit">
          <span className="checkout-content__total-btn-text btn__text">Оформить заказ</span>
        </button>
      </div>
    </div>
  )
}

export default CheckoutTotal