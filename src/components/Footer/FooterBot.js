import React from 'react'

import Copyright from '../Copyright/Copyright'
import FooterPayIcons from './FooterPayIcons'
import CompanyLogo from '../CompanyLogo/CompanyLogo'

const FooterBot = () => {
  return (
    <div className="footer__bot footer-bot">
      <div className="container">
        <div className="footer-bot__inner">
          <Copyright />
          <FooterPayIcons />
          <CompanyLogo />
        </div>
      </div>
    </div>
  )
}

export default FooterBot