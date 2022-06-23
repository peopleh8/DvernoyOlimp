import React from 'react'

import './Header.scss'

import HeaderTop from './HeaderTop'
import HeaderBot from './HeaderBot'

const Header = () => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBot />
    </header>
  )
}

export default Header