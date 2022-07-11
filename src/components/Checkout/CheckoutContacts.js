import React from 'react'
import InputMask from 'react-input-mask'

import CheckoutList from './CheckoutList'

const CheckoutContacts = ({ isMobileList }) => {
  return (
    <div className="checkout-info__item">
      <div className="checkout-info__header">
        <div className="checkout-info__header-number">1</div>
        <div className="checkout-info__header-title">Контактные данные</div>
      </div>
      <div className="checkout-info__inps">
        <div className="checkout-info__inp-wrapper">
          <label className="checkout-info__label" htmlFor="checkout-first-name">Имя</label>
          <div className="checkout-info__inp-inner">
            <input
              className="checkout-info__inp"
              id="checkout-first-name"
              name="first-name"
              autoComplete="off"
              placeholder="Ваше имя"
              type="text"
            />
          </div>
        </div>
        <div className="checkout-info__inp-wrapper">
          <label className="checkout-info__label" htmlFor="checkout-last-name">Фамилия</label>
          <div className="checkout-info__inp-inner">
            <input
              className="checkout-info__inp"
              id="checkout-last-name"
              name="last-name"
              autoComplete="off"
              placeholder="Ваша фамилия"
              type="text"
            />
          </div>
        </div>
        <div className="checkout-info__inp-wrapper">
          <label className="checkout-info__label" htmlFor="checkout-phone">Мобильный телефон</label>
          <div className="checkout-info__inp-inner">
            <InputMask
              className="checkout-info__inp"
              mask="+38 (099) 999-99-99"
              maskPlaceholder={null}
              id="checkout-phone"
              name="phone"
              autoComplete="off"
              placeholder="+38 ("
              type="tel"
            />
          </div>
        </div>
        <div className="checkout-info__inp-wrapper">
          <label className="checkout-info__label" htmlFor="checkout-email">Email</label>
          <div className="checkout-info__inp-inner">
            <input
              className="checkout-info__inp"
              id="checkout-email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              type="text"
            />
          </div>
        </div>
      </div>
      { isMobileList && <CheckoutList /> }
    </div>
  )
}

export default CheckoutContacts