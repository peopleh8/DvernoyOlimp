import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Menu.scss'

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

import cat1 from '../../images/catalog-1.svg'
import cat2 from '../../images/catalog-2.svg'
import cat3 from '../../images/catalog-3.svg'
import cat4 from '../../images/catalog-4.svg'
import cat5 from '../../images/catalog-5.svg'
import cat6 from '../../images/catalog-6.svg'
import cat7 from '../../images/catalog-7.svg'
import cat8 from '../../images/catalog-8.svg'

const Menu = ({ isTablet, openSubmenu, closeSubmenu, openSubsubmenu, closeSubsubmenu }) => {
  let prefix = useContext(PrefixContext)

  return (
    <nav className="menu">
      <ul className="menu__list menu-list">
        { isTablet && <li className="menu-list__item menu-list__item--has-children">
          <Link className="menu-list__link" activeClassName="active" to={`${prefix}catalog/`}>Каталог товарів</Link>
          <svg
            className="menu-list__icon"
            onClick={openSubmenu}
          >
            <use href={`${sprite}#catalog-arrow`} />
          </svg>
          <div className="menu-list__item-panel">
            <button
              className="menu-list__item-panel-back"
              onClick={closeSubmenu}
            >
              <span className="menu-list__item-panel-icon">
                <svg><use href={`${sprite}#catalog-arrow`} /></svg>
              </span>
              <span className="menu-list__item-panel-text">Назад</span>
            </button>
            <div className="menu-list__item-panel-list">
              <div className="menu-list__item-panel-elem">
                <Link className="menu-list__item-panel-link" activeClassName="active" to="#">
                  <span className="menu-list__item-panel-photo">
                    <img src={cat1} alt=""/>
                  </span>
                  <span className="menu-list__item-panel-desc">Межкомнатные двери</span>
                </Link>
                <svg
                  className="menu-list__item-panel-arrow"
                  onClick={openSubsubmenu}
                >
                  <use href={`${sprite}#catalog-arrow`} />
                </svg>
                <div className="menu-list__item-panel-dropdown">
                  <button
                    className="menu-list__item-panel-back"
                    onClick={closeSubsubmenu}
                  >
                    <span className="menu-list__item-panel-icon">
                      <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                    </span>
                    <span className="menu-list__item-panel-text">Назад</span>
                  </button>
                  <div className="menu-list__item-panel-dropdown-inner">
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Производители</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Материал</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Тип</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-list__item-panel-elem">
                <Link className="menu-list__item-panel-link" activeClassName="active" to="#">
                  <span className="menu-list__item-panel-photo">
                    <img src={cat2} alt=""/>
                  </span>
                  <span className="menu-list__item-panel-desc">Входные двери</span>
                </Link>
                <svg
                  className="menu-list__item-panel-arrow"
                  onClick={openSubsubmenu}
                >
                  <use href={`${sprite}#catalog-arrow`} />
                </svg>
                <div className="menu-list__item-panel-dropdown">
                  <button
                    className="menu-list__item-panel-back"
                    onClick={closeSubsubmenu}
                  >
                    <span className="menu-list__item-panel-icon">
                      <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                    </span>
                    <span className="menu-list__item-panel-text">Назад</span>
                  </button>
                  <div className="menu-list__item-panel-dropdown-inner">
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Производители</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Материал</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-list__item-panel-elem">
                <Link className="menu-list__item-panel-link" activeClassName="active" to="#">
                  <span className="menu-list__item-panel-photo">
                    <img src={cat3} alt=""/>
                  </span>
                  <span className="menu-list__item-panel-desc">Скрытые двери</span>
                </Link>
                <svg
                  className="menu-list__item-panel-arrow"
                  onClick={openSubsubmenu}
                >
                  <use href={`${sprite}#catalog-arrow`} />
                </svg>
                <div className="menu-list__item-panel-dropdown">
                  <button
                    className="menu-list__item-panel-back"
                    onClick={closeSubsubmenu}
                  >
                    <span className="menu-list__item-panel-icon">
                      <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                    </span>
                    <span className="menu-list__item-panel-text">Назад</span>
                  </button>
                  <div className="menu-list__item-panel-dropdown-inner">
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Производители</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-list__item-panel-elem">
                <Link className="menu-list__item-panel-link" activeClassName="active" to="#">
                  <span className="menu-list__item-panel-photo">
                    <img src={cat4} alt=""/>
                  </span>
                  <span className="menu-list__item-panel-desc">Перегородки</span>
                </Link>
                <svg
                  className="menu-list__item-panel-arrow"
                  onClick={openSubsubmenu}
                >
                  <use href={`${sprite}#catalog-arrow`} />
                </svg>
                <div className="menu-list__item-panel-dropdown">
                  <button
                    className="menu-list__item-panel-back"
                    onClick={closeSubsubmenu}
                  >
                    <span className="menu-list__item-panel-icon">
                      <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                    </span>
                    <span className="menu-list__item-panel-text">Назад</span>
                  </button>
                  <div className="menu-list__item-panel-dropdown-inner">
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Производители</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Материал</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Тип</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-list__item-panel-elem">
                <Link className="menu-list__item-panel-link" activeClassName="active" to="#">
                  <span className="menu-list__item-panel-photo">
                    <img src={cat5} alt=""/>
                  </span>
                  <span className="menu-list__item-panel-desc">Фурнитура</span>
                </Link>
                <svg
                  className="menu-list__item-panel-arrow"
                  onClick={openSubsubmenu}
                >
                  <use href={`${sprite}#catalog-arrow`} />
                </svg>
                <div className="menu-list__item-panel-dropdown">
                  <button
                    className="menu-list__item-panel-back"
                    onClick={closeSubsubmenu}
                  >
                    <span className="menu-list__item-panel-icon">
                      <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                    </span>
                    <span className="menu-list__item-panel-text">Назад</span>
                  </button>
                  <div className="menu-list__item-panel-dropdown-inner">
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Производители</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Материал</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-list__item-panel-elem">
                <Link className="menu-list__item-panel-link" activeClassName="active" to="#">
                  <span className="menu-list__item-panel-photo">
                    <img src={cat6} alt=""/>
                  </span>
                  <span className="menu-list__item-panel-desc">Плинтус</span>
                </Link>
                <svg
                  className="menu-list__item-panel-arrow"
                  onClick={openSubsubmenu}
                >
                  <use href={`${sprite}#catalog-arrow`} />
                </svg>
                <div className="menu-list__item-panel-dropdown">
                  <button
                    className="menu-list__item-panel-back"
                    onClick={closeSubsubmenu}
                  >
                    <span className="menu-list__item-panel-icon">
                      <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                    </span>
                    <span className="menu-list__item-panel-text">Назад</span>
                  </button>
                  <div className="menu-list__item-panel-dropdown-inner">
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Производители</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Материал</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Тип</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-list__item-panel-elem">
                <Link className="menu-list__item-panel-link" activeClassName="active" to="#">
                  <span className="menu-list__item-panel-photo">
                    <img src={cat7} alt=""/>
                  </span>
                  <span className="menu-list__item-panel-desc">Мебель</span>
                </Link>
                <svg
                  className="menu-list__item-panel-arrow"
                  onClick={openSubsubmenu}
                >
                  <use href={`${sprite}#catalog-arrow`} />
                </svg>
                <div className="menu-list__item-panel-dropdown">
                  <button
                    className="menu-list__item-panel-back"
                    onClick={closeSubsubmenu}
                  >
                    <span className="menu-list__item-panel-icon">
                      <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                    </span>
                    <span className="menu-list__item-panel-text">Назад</span>
                  </button>
                  <div className="menu-list__item-panel-dropdown-inner">
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Производители</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Материал</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-list__item-panel-elem">
                <Link className="menu-list__item-panel-link" activeClassName="active" to="#">
                  <span className="menu-list__item-panel-photo">
                    <img src={cat8} alt=""/>
                  </span>
                  <span className="menu-list__item-panel-desc">Стеновые панели</span>
                </Link>
                <svg
                  className="menu-list__item-panel-arrow"
                  onClick={openSubsubmenu}
                >
                  <use href={`${sprite}#catalog-arrow`} />
                </svg>
                <div className="menu-list__item-panel-dropdown">
                  <button
                    className="menu-list__item-panel-back"
                    onClick={closeSubsubmenu}
                  >
                    <span className="menu-list__item-panel-icon">
                      <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                    </span>
                    <span className="menu-list__item-panel-text">Назад</span>
                  </button>
                  <div className="menu-list__item-panel-dropdown-inner">
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Производители</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Материал</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                    <div className="menu-list__item-panel-dropdown-elem">
                      <div className="menu-list__item-panel-dropdown-title">Тип</div>
                      <div className="menu-list__item-panel-dropdown-list">
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                        <Link className="menu-list__item-panel-dropdown-link" to="#">Входные двери в Киеве</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li> }
        <li className="menu-list__item menu-list__item--has-children">
          <Link className="menu-list__link" activeClassName="active" to={`${prefix}about/`}>О нас</Link>
          <svg
            className="menu-list__icon"
            onClick={openSubmenu}
          >
            <use href={`${sprite}#catalog-arrow`} />
          </svg>
          <div className="menu-list__item-panel">
            <button
              className="menu-list__item-panel-back"
              onClick={closeSubmenu}
            >
              <span className="menu-list__item-panel-icon">
                <svg><use href={`${sprite}#catalog-arrow`} /></svg>
              </span>
              <span className="menu-list__item-panel-text">Назад</span>
            </button>
            <div className="menu-list__item-panel-list">
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
            </div>
          </div>
        </li>
        <li className="menu-list__item">
          <Link className="menu-list__link" activeClassName="active" to="#">Акции</Link>
        </li>
        <li className="menu-list__item menu-list__item--has-children">
          <span className="menu-list__link">Услуги</span>
          <svg
            className="menu-list__icon"
            onClick={openSubmenu}
          >
            <use href={`${sprite}#catalog-arrow`} />
          </svg>
          <div className="menu-list__item-panel">
            <button
              className="menu-list__item-panel-back"
              onClick={closeSubmenu}
            >
              <span className="menu-list__item-panel-icon">
                <svg><use href={`${sprite}#catalog-arrow`} /></svg>
              </span>
              <span className="menu-list__item-panel-text">Назад</span>
            </button>
            <div className="menu-list__item-panel-list">
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
              <Link className="menu-list__item-panel-link" activeClassName="active" to="#">Входные двери в Киеве</Link>
            </div>
          </div>
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