import React from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderCatalog = () => {
  return (
    <div className="header__catalog header-catalog">
      <button className="header-catalog__btn btn" type="button">
        <span className="header-catalog__btn-icon btn__icon">
          <svg><use href={`${sprite}#catalog-btn`} /></svg>
        </span>
        <span className="header-catalog__btn-text btn__text">Каталог товаров</span>
      </button>
    </div>
  )
}

export default HeaderCatalog