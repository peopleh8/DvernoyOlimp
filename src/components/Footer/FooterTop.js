import React from 'react'

import FooterLinks from './FooterLinks'
import FooterContacts from './FooterContacts'

const FooterTop = () => {
  return (
    <div className="footer__top footer-top">
      <div className="container">
        <div className="footer-top__inner">
          <FooterLinks />
          <FooterContacts />
        </div>
      </div>
    </div>
  )
}

export default FooterTop