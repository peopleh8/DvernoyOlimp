import React from 'react'

import mastercard from '../../images/mastercard.svg'
import visa from '../../images/visa.svg'

const FooterPayIcons = () => {
  return (
    <div className="footer-pay">
      <div className="footer-pay__item">
        <img src={mastercard} alt=""/>
      </div>
      <div className="footer-pay__item">
        <img src={visa} alt=""/>
      </div>
    </div>
  )
}

export default FooterPayIcons