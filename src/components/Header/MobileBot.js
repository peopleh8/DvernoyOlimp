import React from 'react'

import Switcher from '../Switcher/Switcher'

import sprite from '../../icons/sprite.svg'

const MobileBot = ({ isMobile }) => {
  return (
    <div className="mobile-bot">
      <div className="mobile-bot__info">
        <div className="mobile-bot__title">(бесплатно с любого номера)</div>
        <a className="mobile-bot__phone" href="tel:380800339827">0 800 339 827</a>
        <div className="mobile-bot__schedule">
          <div className="mobile-bot__schedule-icon">
            <svg><use href={`${sprite}#clock`} /></svg>
          </div>
          <div className="mobile-bot__schedule-text">
            <div className="mobile-bot__schedule-item">
              пн-пт <span>09:00-21:00</span>
            </div>
            <div className="mobile-bot__schedule-item">
              сб-вс <span>09:00-21:00</span>
            </div>
          </div>
        </div>
      </div>
      { isMobile && <Switcher /> }
    </div>
  )
}

export default MobileBot