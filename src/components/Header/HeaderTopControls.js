import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

const HeaderTopControls = () => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="header-top__controls">
      <Link
        className="header-top__controls-item"
        to={`${prefix}ruler/`}
      >
        <span className="header-top__controls-icon"><svg><use href={`${sprite}#ruler`} /></svg></span>
        <span className="header-top__controls-text">Заказать замер</span>
      </Link>
      <button
        className="header-top__controls-item"
        type="button"
        data-fancybox="callback"
        data-src="#callback-modal"
      >
        <span className="header-top__controls-icon"><svg><use href={`${sprite}#phone`} /></svg></span>
        <span className="header-top__controls-text">Обратный звонок</span>
      </button>
    </div>
  )
}

export default HeaderTopControls