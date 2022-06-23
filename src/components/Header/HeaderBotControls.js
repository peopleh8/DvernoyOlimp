import React from 'react'
import { Link } from 'gatsby'

import sprite from '../../icons/sprite.svg'

const HeaderBotControls = () => {
  return (
    <div className="header-bot__controls">
      <div className="header-bot__controls-item">
        <Link className="header-bot__controls-link" activeClassName="active" to="#">
          <svg><use href={`${sprite}#user`} /></svg>
        </Link>
      </div>
      <div className="header-bot__controls-item">
        <Link className="header-bot__controls-link" activeClassName="active" to="#">
          <svg><use href={`${sprite}#scales`} /></svg>
        </Link>
      </div>
      <div className="header-bot__controls-item">
        <Link className="header-bot__controls-link" activeClassName="active" to="#">
          <svg><use href={`${sprite}#cart`} /></svg>
        </Link>
      </div>
    </div>
  )
}

export default HeaderBotControls