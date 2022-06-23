import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Menu.scss'

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

const Menu = () => {
  let prefix = useContext(PrefixContext)

  return (
    <nav className="menu">
      <ul className="menu__list menu-list">
        <li className="menu-list__item menu-list__item--has-children">
          <Link className="menu-list__link" activeClassName="active"  to={`${prefix}about/`}>О нас</Link>
          <svg className="menu-list__icon"><use href={`${sprite}#item-arrow`} /></svg>
        </li>
        <li className="menu-list__item">
          <Link className="menu-list__link" activeClassName="active" to="#">Акции</Link>
        </li>
        <li className="menu-list__item menu-list__item--has-children">
          <Link className="menu-list__link" activeClassName="active" to="#">Услуги</Link>
          <svg className="menu-list__icon"><use href={`${sprite}#item-arrow`} /></svg>
        </li>
        <li className="menu-list__item">
          <Link className="menu-list__link" activeClassName="active" to="#">Магазины</Link>
        </li>
        <li className="menu-list__item">
          <Link className="menu-list__link" activeClassName="active" to={`${prefix}contacts/`}>Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu