import React, { useState, useContext } from 'react'
import { Link, navigate } from "gatsby"

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

import productImg from '../../images/single-product.jpg'

const HeaderSearch = ({ isOpenSearch, setIsOpenSearch }) => {
  let prefix = useContext(PrefixContext)
  let [ search, setSearch ] = useState('')

  const submitForm = e => {
    e.preventDefault()

    setIsOpenSearch(false)
    navigate(`${prefix}search/`, { state: { searchQuery: search } })
  }

  return (
    <div className="header__search header-search">
      <form
        className={`header-search__form ${isOpenSearch ? 'open' : ''}`}
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
            className={`header-search__btn ${isOpenSearch ? 'active' : ''}`}
            type="button"
            onClick={() => setIsOpenSearch(prev => !prev)}
          >
            <svg><use href={`${sprite}#search`} /></svg>
          </button>
        </div>
        <div className={`header-search__result ${isOpenSearch ? 'open' : ''}`}>
          <div className="header-search__result-list">
            {
              new Array(3).fill('').map((_, index) => {
                return (
                  <div className="header-search__result-item" key={index}>
                    <Link className="header-search__result-link" to="#" />
                    <div className="header-search__result-preview">
                      <img src={productImg} alt="" width={48} height={55} />
                    </div>
                    <div className="header-search__result-title">Входные двери B 3.11 Венге/Белый супермат М2, Mottura. БЕРИСЛАВ</div>
                  </div>
                )
              })
            }
          </div>
          <div className="header-search__result-btn-wrapper">
            <button className="header-search__result-btn" type="submit">Показать все результаты</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default HeaderSearch