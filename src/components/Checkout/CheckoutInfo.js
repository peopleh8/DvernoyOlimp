import React from 'react'

import CheckoutContacts from './CheckoutContacts'
import CheckoutDelivery from './CheckoutDelivery'
import CheckoutPay from './CheckoutPay'

const CheckoutInfo = ({ isMobileList }) => {
  return (
    <div className="checkout__info checkout-info">
      <CheckoutContacts isMobileList={isMobileList} />
      <CheckoutDelivery />
      <CheckoutPay />
    </div>
  )
}

export default CheckoutInfo