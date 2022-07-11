import React from 'react'

import './Support.scss'

import MainSupportContent from './SupportContent'
import MainSupportPhoto from './SupportPhoto'
import SupportMobile from './SupportMobile'

const MainSupport = () => {
  return (
    <div className="main-support">
      <div className="main-support__inner">
        <SupportMobile />
        <MainSupportContent />
        <MainSupportPhoto />
      </div>
    </div>
  )
}

export default MainSupport