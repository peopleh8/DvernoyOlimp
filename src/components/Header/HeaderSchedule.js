import React from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderSchedule = () => {
  return (
    <div className="header__schedule header-schedule">
      <div className="header-schedule__title">(бесплатно с любого номера)</div>
      <a className="header-schedule__phone" href="tel:380800339827">0 800 339 827</a>
      <div className="header-schedule__list">
        <div className="header-schedule__list-title">
          <div className="header-schedule__list-icon"><svg><use href={`${sprite}#clock`} /></svg></div>
          <div className="header-schedule__list-text">График работы</div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSchedule