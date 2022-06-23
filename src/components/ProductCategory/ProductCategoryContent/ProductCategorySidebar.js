import React from 'react'
import { Collapse } from 'react-collapse'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'

import sprite from '../../../icons/sprite.svg'

const ProductCategorySidebar = () => {
  return (
    <aside className="product-category-sidebar">
      <div className="product-category-sidebar__inner">
        <div className="product-category-sidebar__overflow">
          <div className="product-category-sidebar__item">
            <div className="product-category-sidebar__head">
              <div className="product-category-sidebar__head-text">Категория</div>
              <div className="product-category-sidebar__head-icon">
                <svg><use href={`${sprite}#big-item-arrow`} /></svg>
              </div>
            </div>
            <div className="product-category-sidebar__body">
              <Collapse isOpened={true}>
                <div className="product-category-sidebar__body-inner">
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="category-1"/>
                    <label className="product-category-sidebar__body-label" htmlFor="category-1">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="category-2"/>
                    <label className="product-category-sidebar__body-label" htmlFor="category-2">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="category-3"/>
                    <label className="product-category-sidebar__body-label" htmlFor="category-3">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="category-4"/>
                    <label className="product-category-sidebar__body-label" htmlFor="category-4">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="category-5"/>
                    <label className="product-category-sidebar__body-label" htmlFor="category-5">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="product-category-sidebar__item">
            <div className="product-category-sidebar__head">
              <div className="product-category-sidebar__head-text">Тип замка</div>
              <div className="product-category-sidebar__head-icon">
                <svg><use href={`${sprite}#big-item-arrow`} /></svg>
              </div>
            </div>
            <div className="product-category-sidebar__body">
              <Collapse isOpened={true}>
                <div className="product-category-sidebar__body-inner">
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="type-1"/>
                    <label className="product-category-sidebar__body-label" htmlFor="type-1">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="type-2"/>
                    <label className="product-category-sidebar__body-label" htmlFor="type-2">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="type-3"/>
                    <label className="product-category-sidebar__body-label" htmlFor="type-3">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="type-4"/>
                    <label className="product-category-sidebar__body-label" htmlFor="type-4">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                  <div className="product-category-sidebar__body-item">
                    <input className="product-category-sidebar__body-check" type="checkbox" id="type-5"/>
                    <label className="product-category-sidebar__body-label" htmlFor="type-5">
                      <span className="product-category-sidebar__body-icon">
                        <svg><use href={`${sprite}#check`} /></svg>
                      </span>
                      <span className="product-category-sidebar__body-text">Мебельные замки SYMO</span>
                    </label>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="product-category-sidebar__item">
          <div className="product-category-sidebar__head">
            <div className="product-category-sidebar__head-text">Цена</div>
            <div className="product-category-sidebar__head-icon">
              <svg><use href={`${sprite}#big-item-arrow`} /></svg>
            </div>
          </div>
          <div className="product-category-sidebar__body">
            <Collapse isOpened={true}>
              <div className="product-category-sidebar__body-inner">
                <div className="product-category-sidebar__body-item">
                  <input className="product-category-sidebar__body-check" type="checkbox" id="price-1"/>
                  <label className="product-category-sidebar__body-label" htmlFor="price-1">
                    <span className="product-category-sidebar__body-icon">
                      <svg><use href={`${sprite}#check`} /></svg>
                    </span>
                    <span className="product-category-sidebar__body-text">до 2500 грн</span>
                  </label>
                </div>
                <div className="product-category-sidebar__body-item">
                  <input className="product-category-sidebar__body-check" type="checkbox" id="price-2"/>
                  <label className="product-category-sidebar__body-label" htmlFor="price-2">
                    <span className="product-category-sidebar__body-icon">
                      <svg><use href={`${sprite}#check`} /></svg>
                    </span>
                    <span className="product-category-sidebar__body-text">от 2501 до 5000 грн</span>
                  </label>
                </div>
                <div className="product-category-sidebar__body-item">
                  <input className="product-category-sidebar__body-check" type="checkbox" id="price-3"/>
                  <label className="product-category-sidebar__body-label" htmlFor="price-3">
                    <span className="product-category-sidebar__body-icon">
                      <svg><use href={`${sprite}#check`} /></svg>
                    </span>
                    <span className="product-category-sidebar__body-text">от 5001 грн</span>
                  </label>
                </div>
                <div className="product-category-sidebar__body-item product-category-sidebar__body-item--price">
                  <div className="product-category-sidebar__body-inp-wrapper">
                    <input className="product-category-sidebar__body-inp" type="text" autoComplete="off" name="minprice"/>
                  </div>
                  <div className="product-category-sidebar__body-inp-wrapper">
                    <input className="product-category-sidebar__body-inp" type="text" autoComplete="off" name="maxprice"/>
                  </div>
                </div>
                <div className="product-category-sidebar__body-item product-category-sidebar__body-item--slider">
                  <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        </div>
        <div className="product-category-sidebar__btns">
          <div className="product-category-sidebar__btn-wrapper">
            <button className="product-category-sidebar__btn product-category-sidebar__btn--show">Показать все фильтры</button>
          </div>
          <div className="product-category-sidebar__btn-wrapper">
            <button className="product-category-sidebar__btn product-category-sidebar__btn--cancel">Сбросить фильтры</button>
          </div>
        </div>
        <div className="product-category-sidebar__banner">
          <div className="product-category-sidebar__banner-icon">
            <svg><use href={`${sprite}#banner-user`} /></svg>
          </div>
          <div className="product-category-sidebar__banner-title">Нужна консультация?</div>
          <p className="product-category-sidebar__banner-desc">Перезвоните или напишите нам, мы с радостью поможем</p>
          <a className="product-category-sidebar__banner-phone" href="tel:380800339827">0 800 339 827</a>
        </div>
      </div>
    </aside>
  )
}

export default ProductCategorySidebar