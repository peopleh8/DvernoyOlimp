import React  from 'react'
import { Link } from 'gatsby'

import './Switcher.scss'

import { isBrowser } from '../../utils/isBrowser'

const Switcher = () => {
  let pageName =
    isBrowser()
      ? window.location.pathname.includes('/uk/')
        ? window.location.pathname.slice(4)
        : window.location.pathname.slice(1)
      : null

  return (
    <div className="switcher">
      <Link className="switcher__item" activeClassName="active" to={`/${pageName}`}>Ru</Link>
      <Link className="switcher__item" activeClassName="active" to={`/uk/${pageName}`}>Ua</Link>
    </div>
  )
}

export default Switcher