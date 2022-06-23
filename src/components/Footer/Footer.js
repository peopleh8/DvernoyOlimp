import React from 'react'

import './Footer.scss'

import FooterTop from './FooterTop'
import FooterBot from './FooterBot'

const Footer = () => {
  return (
    <div className="footer">
      <FooterTop />
      <FooterBot />
    </div>
  )
}

export default Footer