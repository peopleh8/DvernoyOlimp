import React from 'react'

import support1 from '../../../images/main-support-1.jpg'
import support2 from '../../../images/main-support-2.jpg'

const MainSupportPhoto = () => {
  return (
    <div className="main-support__photo main-support-photo">
      <div className="main-support-photo__img main-support-photo__img--big">
        <img src={support1} alt=""/>
      </div>
      <div className="main-support-photo__img main-support-photo__img--small">
        <img src={support2} alt=""/>
      </div>
    </div>
  )
}

export default MainSupportPhoto