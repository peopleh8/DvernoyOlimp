import React from 'react'

import Logo from '../Logo/Logo'
import HeaderBotControls from './HeaderBotControls'

const MobileTop = ({ isMobile, setIsOpenMenu }) => {
  return (
    <div className="mobile-top">
      { !isMobile && <Logo className={'logo-mobile'} /> }
      <button
        className="mobile-close"
        onClick={() => setIsOpenMenu(false)}
      >
        <span /><span />
      </button>
      { isMobile && <HeaderBotControls /> }
    </div>
  )
}

export default MobileTop