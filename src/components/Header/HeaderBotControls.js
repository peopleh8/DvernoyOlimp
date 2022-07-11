import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

const HeaderBotControls = () => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="header-bot__controls">
      <div className="header-bot__controls-item">
        <Link className="header-bot__controls-link disabled" activeClassName="active" to="#">
          <svg><use href={`${sprite}#user`} /></svg>
        </Link>
      </div>
      <div className="header-bot__controls-item">
        <Link className="header-bot__controls-link disabled" activeClassName="active" to="#">
          <svg><use href={`${sprite}#scales`} /></svg>
        </Link>
      </div>
      <div className="header-bot__controls-item">
        <Link className="header-bot__controls-link" activeClassName="active" to={`${prefix}cart/`}>
          <svg><use href={`${sprite}#cart`} /></svg>
        </Link>
        <span className="header-bot__controls-text">10</span>
      </div>
    </div>
  )
}

export default HeaderBotControls