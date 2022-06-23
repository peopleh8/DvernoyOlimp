import React from 'react'

import Logo from '../Logo/Logo'
import HeaderCatalog from './HeaderCatalog'
import HeaderSearch from './HeaderSearch'
import HeaderSchedule from './HeaderSchedule'
import HeaderBotControls from './HeaderBotControls'

const HeaderBot = () => {
  return (
    <div className="header__bot header-bot">
      <div className="container">
        <div className="header-bot__inner">
          <Logo className={'logo-header'} />
          <HeaderCatalog />
          <HeaderSearch />
          <HeaderSchedule />
          <HeaderBotControls />
        </div>
      </div>
    </div>
  )
}

export default HeaderBot