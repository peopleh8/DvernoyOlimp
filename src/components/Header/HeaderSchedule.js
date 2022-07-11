import React from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderSchedule = ({ isOpenSchedule, setIsOpenSchedule }) => {
  return (
    <div className="header__schedule header-schedule">
      <div className="header-schedule__title">(бесплатно с любого номера)</div>
      <a className="header-schedule__phone" href="tel:380800339827">0 800 339 827</a>
      <div className="header-schedule__list">
        <div
          className={`header-schedule__list-title ${isOpenSchedule ? 'open' : ''}`}
          onClick={() => setIsOpenSchedule(prev => !prev)}
        >
          <div className="header-schedule__list-icon"><svg><use href={`${sprite}#clock`} /></svg></div>
          <div className="header-schedule__list-text">График работы</div>
        </div>
        <div className={`header-schedule__panel ${isOpenSchedule ? 'open' : ''}`}>
          <button
            className="header-schedule__panel-close"
            onClick={() => setIsOpenSchedule(false)}
          />
          <div className="header-schedule__panel-inner">
            <div className="header-schedule__panel-item">
              <div className="header-schedule__panel-title">пн-пт</div>
              <div className="header-schedule__panel-val">09:00-21:00</div>
            </div>
            <div className="header-schedule__panel-item">
              <div className="header-schedule__panel-title">сб-вс</div>
              <div className="header-schedule__panel-val">09:00-21:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSchedule