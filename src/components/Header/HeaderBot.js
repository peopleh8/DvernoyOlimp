import React from 'react'

import Logo from '../Logo/Logo'
import HeaderCatalog from './HeaderCatalog'
import HeaderSearch from './HeaderSearch'
import HeaderSchedule from './HeaderSchedule'
import HeaderBotControls from './HeaderBotControls'
import Burger from '../Burger/Burger'

const HeaderBot = ({
   isMobile,
   openCatalog,
   setIsOpenCatalog,
   isOpenSchedule,
   setIsOpenSchedule,
   isOpenSearch,
   setIsOpenSearch,
   isOpenMenu,
   setIsOpenMenu
}) => {
  return (
    <div className="header__bot header-bot">
      <div className="container">
        <div className="header-bot__inner">
          <Burger isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          <Logo className={'logo-header'} />
          <HeaderCatalog
            openCatalog={openCatalog}
            setIsOpenCatalog={setIsOpenCatalog}
          />
          { !isMobile && <HeaderSearch
            isOpenSearch={isOpenSearch}
            setIsOpenSearch={setIsOpenSearch}
          /> }
          <HeaderSchedule
            isOpenSchedule={isOpenSchedule}
            setIsOpenSchedule={setIsOpenSchedule}
          />
          <HeaderBotControls />
        </div>
      </div>
    </div>
  )
}

export default HeaderBot