import React from 'react'

import CheckoutList from './CheckoutList'
import CheckoutCode from './CheckoutCode'
import CheckoutTotal from './CheckoutTotal'

const CheckoutContent = ({ isMobileList }) => {
  return (
    <div className="checkout__content checkout-content">
      <div className="checkout-content__inner">
        { !isMobileList && <CheckoutList /> }
        <CheckoutCode />
        <CheckoutTotal />
      </div>
    </div>
  )
}

export default CheckoutContent