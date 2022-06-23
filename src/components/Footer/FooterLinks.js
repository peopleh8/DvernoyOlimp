import React, { useContext } from 'react'
import { Link } from 'gatsby'

import sprite from '../../icons/sprite.svg'

import { PrefixContext } from '../../context/PrefixContext'

const FooterLinks = () => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="footer__links footer-links">
      <div className="footer-links__item">
        <div className="footer-links__title footer-title">О КОМПАНИИ</div>
        <ul className="footer-links__list">
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={prefix}>Главная</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}about/`}>О нас</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}blog/`}>Блог</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to="#">Условия возврата</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to="#">Отзывы</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}contacts/`}>Контакты</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
        </ul>
      </div>
      <div className="footer-links__item">
        <div className="footer-links__title  footer-title">ОБЩИЕ ВОПРОСЫ</div>
        <ul className="footer-links__list">
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to="#">Замер дверей</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to="#">Установка</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to="#">Гарантии</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to="#">Доставка и оплата</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to="#">Производители</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to="#">Политика конфиденциальности</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
        </ul>
      </div>
      <div className="footer-links__item">
        <div className="footer-links__title footer-title">КАТАЛОГ ДВЕРЕЙ</div>
        <ul className="footer-links__list">
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}catalog/`}>Двери в Киеве</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}catalog/`}>Входные двери в Киеве</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}catalog/`}>Бронированные двери в Киеве</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}catalog/`}>Двери в Одессе</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}catalog/`}>Входные двери в Одессе</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
          <li className="footer-links__list-item">
            <Link className="footer-links__list-link" activeClassName="active" to={`${prefix}catalog/`}>Бронированные двери в Одессе</Link>
            <svg className="footer-links__list-icon"><use href={`${sprite}#big-item-arrow`} /></svg>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterLinks