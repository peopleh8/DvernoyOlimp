import React from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderCatalog = ({ openCatalog, setIsOpenCatalog }) => {
  return (
    <div className="header__catalog header-catalog">
      <button
        className={`header-catalog__btn btn ${openCatalog ? 'active' : ''}`}
        type="button"
        onClick={() => setIsOpenCatalog(prev => !prev)}
      >
        <span className="header-catalog__btn-icon btn__icon">
          <svg><use href={`${sprite}#catalog-btn`} /></svg>
        </span>
        <span className="header-catalog__btn-text btn__text">Каталог товаров</span>
      </button>
    </div>
  )
}

export default HeaderCatalog