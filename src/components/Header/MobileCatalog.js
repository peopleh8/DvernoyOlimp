import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

const MobileCatalog = () => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="mobile-catalog">
      <Link className="mobile-catalog__btn btn" to={`${prefix}catalog/`}>
        <span className="mobile-catalog__btn-icon btn__icon">
          <svg><use href={`${sprite}#catalog-btn`} /></svg>
        </span>
        <span className="mobile-catalog__btn-text btn__text">Каталог товаров</span>
      </Link>
    </div>
  )
}

export default MobileCatalog