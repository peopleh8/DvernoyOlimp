import React from 'react'

import Menu from '../Menu/Menu'
import HeaderTopControls from './HeaderTopControls'
import Switcher from '../Switcher/Switcher'
import MobileTop from './MobileTop'
import MobileCatalog from './MobileCatalog'
import MobileBot from './MobileBot'
import MobileSearch from './MobileSearch'

const HeaderTop = ({
  isTablet,
  isMobile,
  isOpenMenu,
  setIsOpenMenu,
  openSubmenu,
  closeSubmenu,
  openSubsubmenu,
  closeSubsubmenu
}) => {
  return (
    <div className={`header__top header-top ${isOpenMenu ? 'open' : ''}`}>
      <div className="container">
        <MobileTop isMobile={isMobile} setIsOpenMenu={setIsOpenMenu} />
        <div className="header-top__inner">
          { !isMobile && <MobileCatalog /> }
          { isMobile && <MobileSearch /> }
          <Menu
            isTablet={isTablet}
            openSubmenu={openSubmenu}
            closeSubmenu={closeSubmenu}
            openSubsubmenu={openSubsubmenu}
            closeSubsubmenu={closeSubsubmenu}
          />
          <HeaderTopControls />
          { !isMobile && <Switcher /> }
          <MobileBot isMobile={isMobile} />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop