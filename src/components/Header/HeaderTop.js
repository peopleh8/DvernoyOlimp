import React from 'react'

import Menu from '../Menu/Menu'
import HeaderTopControls from './HeaderTopControls'
import Switcher from '../Switcher/Switcher'

const HeaderTop = () => {
  return (
    <div className="header__top header-top">
      <div className="container">
        <div className="header-top__inner">
          <Menu />
          <HeaderTopControls />
          <Switcher />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop