import React from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderTopControls = () => {
  return (
    <div className="header-top__controls">
      <button className="header-top__controls-item" type="button">
        <span className="header-top__controls-icon"><svg><use href={`${sprite}#ruler`} /></svg></span>
        <span className="header-top__controls-text">Заказать замер</span>
      </button>
      <button className="header-top__controls-item" type="button">
        <span className="header-top__controls-icon"><svg><use href={`${sprite}#phone`} /></svg></span>
        <span className="header-top__controls-text">Обратный звонок</span>
      </button>
    </div>
  )
}

export default HeaderTopControls