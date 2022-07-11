import React, { useState, useContext } from 'react'
import { navigate } from "gatsby"

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

const MobileSearch = () => {
  let prefix = useContext(PrefixContext)
  let [ search, setSearch ] = useState('')

  const submitForm = e => {
    e.preventDefault()

    navigate(`${prefix}search/`, { state: { searchQuery: search } })
  }

  return (
    <div className="header__search header-search">
      <form
        className="header-search__form"
        onSubmit={submitForm}
      >
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
          <button
            className="header-search__btn"
            type="submit"
          >
            <svg><use href={`${sprite}#search`} /></svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default MobileSearch