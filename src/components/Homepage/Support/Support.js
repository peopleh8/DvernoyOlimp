import React from 'react'

import './Support.scss'

import MainSupportContent from './SupportContent'
import MainSupportPhoto from './SupportPhoto'

const MainSupport = () => {
  return (
    <div className="main-support">
      <div className="main-support__inner">
        <MainSupportContent />
        <MainSupportPhoto />
      </div>
    </div>
  )
}

export default MainSupport