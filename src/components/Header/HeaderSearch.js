import React, { useState } from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderSearch = () => {
  let [ search, setSearch ] = useState('')

  return (
    <div className="header__search header-search">
      <form className="header-search__form">
        <div className="header-search__inp-wrapper">
          <input
            className="header-search__inp"
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Поиск..."
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
          />
        </div>
        <div className="header-search__btn-wrapper">
          <button className="header-search__btn" type="submit"><svg><use href={`${sprite}#search`} /></svg></button>
        </div>
      </form>
    </div>
  )
}

export default HeaderSearch