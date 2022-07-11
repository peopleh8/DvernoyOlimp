import React from 'react'

const CheckoutCode = () => {
  return (
    <div className="checkout-content__code">
      <label className="checkout-content__code-label" htmlFor="checkout-code">Промокод</label>
      <div className="checkout-content__code-inp-wrapper">
        <input
          className="checkout-content__code-inp"
          id="checkout-code"
          name="code"
          autoComplete="off"
          placeholder="Есть промокод? Укажите его здесь"
          type="text"
        />
      </div>
    </div>
  )
}

export default CheckoutCode