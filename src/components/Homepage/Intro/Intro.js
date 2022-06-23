import React from 'react'
import { Link } from 'gatsby'

import './Intro.scss'

import IntroSlider from './IntroSlider'

import cat1 from '../../../images/catalog-1.svg'
import cat2 from '../../../images/catalog-2.svg'
import cat3 from '../../../images/catalog-3.svg'
import cat4 from '../../../images/catalog-4.svg'
import cat5 from '../../../images/catalog-5.svg'
import cat6 from '../../../images/catalog-6.svg'
import cat7 from '../../../images/catalog-7.svg'
import cat8 from '../../../images/catalog-8.svg'

import sprite from '../../../icons/sprite.svg'

const MainIntro = () => {
  return (
    <section className="main-intro">
      <div className="main-intro__wrapper">
        <div className="container">
          <div className="main-intro__inner">
            <div className="main-intro__catalog-wrapper">
              <div className="main-intro__catalog">
                <div className="main-intro__catalog-list">
                  <div className="main-intro__catalog-list-item">
                    <Link className="main-intro__catalog-item-link" activeClassName="active" to="#">
                      <span className="main-intro__catalog-item-icon">
                        <img src={cat1} alt=""/>
                      </span>
                      <span className="main-intro__catalog-item-text">Межкомнатные двери</span>
                      <span className="main-intro__catalog-item-arrow">
                        <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                      </span>
                    </Link>
                    <div className="main-intro__catalog-dropdown">
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Производители</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Материал</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Тип</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цвет</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цена</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-intro__catalog-list">
                  <div className="main-intro__catalog-list-item">
                    <Link className="main-intro__catalog-item-link" activeClassName="active" to="#">
                      <span className="main-intro__catalog-item-icon">
                        <img src={cat2} alt=""/>
                      </span>
                      <span className="main-intro__catalog-item-text">Входные двери</span>
                      <span className="main-intro__catalog-item-arrow">
                        <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                      </span>
                    </Link>
                    <div className="main-intro__catalog-dropdown">
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Производители</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Материал</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Тип</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цвет</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цена</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-intro__catalog-list">
                  <div className="main-intro__catalog-list-item">
                    <Link className="main-intro__catalog-item-link" activeClassName="active" to="#">
                      <span className="main-intro__catalog-item-icon">
                        <img src={cat3} alt=""/>
                      </span>
                      <span className="main-intro__catalog-item-text">Скрытые двери</span>
                      <span className="main-intro__catalog-item-arrow">
                        <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                      </span>
                    </Link>
                    <div className="main-intro__catalog-dropdown">
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Производители</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Материал</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Тип</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цвет</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цена</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-intro__catalog-list">
                  <div className="main-intro__catalog-list-item">
                    <Link className="main-intro__catalog-item-link" activeClassName="active" to="#">
                      <span className="main-intro__catalog-item-icon">
                        <img src={cat4} alt=""/>
                      </span>
                      <span className="main-intro__catalog-item-text">Перегородки</span>
                      <span className="main-intro__catalog-item-arrow">
                        <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                      </span>
                    </Link>
                    <div className="main-intro__catalog-dropdown">
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Производители</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Материал</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Тип</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цвет</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цена</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-intro__catalog-list">
                  <div className="main-intro__catalog-list-item">
                    <Link className="main-intro__catalog-item-link" activeClassName="active" to="#">
                      <span className="main-intro__catalog-item-icon">
                        <img src={cat5} alt=""/>
                      </span>
                      <span className="main-intro__catalog-item-text">Фурнитура</span>
                      <span className="main-intro__catalog-item-arrow">
                        <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                      </span>
                    </Link>
                    <div className="main-intro__catalog-dropdown">
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Производители</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Материал</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Тип</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цвет</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цена</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-intro__catalog-list">
                  <div className="main-intro__catalog-list-item">
                    <Link className="main-intro__catalog-item-link" activeClassName="active" to="#">
                      <span className="main-intro__catalog-item-icon">
                        <img src={cat6} alt=""/>
                      </span>
                      <span className="main-intro__catalog-item-text">Плинтус</span>
                      <span className="main-intro__catalog-item-arrow">
                        <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                      </span>
                    </Link>
                    <div className="main-intro__catalog-dropdown">
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Производители</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Материал</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Тип</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цвет</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цена</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-intro__catalog-list">
                  <div className="main-intro__catalog-list-item">
                    <Link className="main-intro__catalog-item-link" activeClassName="active" to="#">
                      <span className="main-intro__catalog-item-icon">
                        <img src={cat7} alt=""/>
                      </span>
                      <span className="main-intro__catalog-item-text">Мебель</span>
                      <span className="main-intro__catalog-item-arrow">
                        <svg><use href={`${sprite}#catalog-arrow`} /></svg>
                      </span>
                    </Link>
                    <div className="main-intro__catalog-dropdown">
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Производители</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Материал</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Тип</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цвет</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                      <div className="main-intro__catalog-dropdown-item">
                        <div className="main-intro__catalog-dropdown-title">Цена</div>
                        <div className="main-intro__catalog-dropdown-list">
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                          <div className="main-intro__catalog-dropdown-list-item">
                            <Link className="main-intro__catalog-dropdown-list-link" to="#">Входные двери в Киеве</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-intro__catalog-list">
                  <div className="main-intro__catalog-list-item">
                    <Link className="main-intro__catalog-item-link" activeClassName="active" to="#">
                      <span className="main-intro__catalog-item-icon">
                        <img src={cat8} alt=""/>
                      </span>
                      <span className="main-intro__catalog-item-text">Стеновые панели</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <IntroSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainIntro