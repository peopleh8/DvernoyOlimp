import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'

import Banner from '../Banner/Banner'
import ProductCategoryFilters from './ProductCategoryFilters'

import sprite from '../../icons/sprite.svg'

const ProductCategorySidebar = ({ isSearchPage, isModalExist, isOpenFilter, setIsOpenFilter }) => {
  const [ minPriceVal, setMinPriceVal ] = useState(0)
  const [ maxPriceVal, setMaxPriceVal ] = useState(3000)

  const [ isFilterOneOpen, setIsFilterOneOpen ] = useState(true)
  const [ isFilterTwoOpen, setIsFilterTwoOpen ] = useState(true)
  const [ isFilterThreeOpen, setIsFilterThreeOpen ] = useState(true)

  return (
    <aside className={`product-category-sidebar ${isOpenFilter ? 'open' : ''}`}>
      <div className="product-category-sidebar__inner">
        { (!isSearchPage && isModalExist) && <div className="product-category-sidebar__header">
          <div
            className="product-category-sidebar__header-title"
            onClick={() => setIsOpenFilter(false)}
          >
            <div className="product-category-sidebar__header-icon">
              <svg><use href={`${sprite}#catalog-arrow`} /></svg>
            </div>
            <div className="product-category-sidebar__header-text">Фильтры</div>
          </div>
          <button className="product-category-sidebar__header-btn">Сбросить все фильтры</button>
        </div> }
        { !isSearchPage && <div className="product-category-sidebar__overflow">
          { isModalExist && <ProductCategoryFilters /> }
          <div className="product-category-sidebar__item">
            <div
              className={`product-category-sidebar__head ${isFilterOneOpen ? 'open' : ''}`}
              onClick={() => setIsFilterOneOpen(prev => !prev)}
            >
              <div className="product-category-sidebar__head-text">Категория</div>
              <div className="product-category-sidebar__head-icon">
                <svg><use href={`${sprite}#big-item-arrow`} /></svg>
              </div>
            </div>
            <div className="product-category-sidebar__body">
              <Collapse isOpened={isFilterOneOpen}>
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
            <div
              className={`product-category-sidebar__head ${isFilterTwoOpen ? 'open' : ''}`}
              onClick={() => setIsFilterTwoOpen(prev => !prev)}
            >
              <div className="product-category-sidebar__head-text">Тип замка</div>
              <div className="product-category-sidebar__head-icon">
                <svg><use href={`${sprite}#big-item-arrow`} /></svg>
              </div>
            </div>
            <div className="product-category-sidebar__body">
              <Collapse isOpened={isFilterTwoOpen}>
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
          <div
            className={`product-category-sidebar__head ${isFilterThreeOpen ? 'open' : ''}`}
            onClick={() => setIsFilterThreeOpen(prev => !prev)}
          >
            <div className="product-category-sidebar__head-text">Цена</div>
            <div className="product-category-sidebar__head-icon">
              <svg><use href={`${sprite}#big-item-arrow`} /></svg>
            </div>
          </div>
          <div className="product-category-sidebar__body">
            <Collapse isOpened={isFilterThreeOpen}>
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
                    <input
                      className="product-category-sidebar__body-inp"
                      type="text"
                      autoComplete="off"
                      name="minprice"
                      value={minPriceVal}
                      onChange={e => setMinPriceVal(parseInt(e.currentTarget.value))}
                    />
                  </div>
                  <div className="product-category-sidebar__body-inp-wrapper">
                    <input
                      className="product-category-sidebar__body-inp"
                      type="text"
                      autoComplete="off"
                      name="maxprice"
                      value={maxPriceVal}
                      onChange={e => setMaxPriceVal(parseInt(e.currentTarget.value))}
                    />
                  </div>
                </div>
                <div className="product-category-sidebar__body-item product-category-sidebar__body-item--slider">
                  <Nouislider
                    range={{ min: 0, max: 3000 }}
                    start={[minPriceVal, maxPriceVal]}
                    connect
                    onChange={value => {
                      setMinPriceVal(Math.round(parseInt(value[0])))
                      setMaxPriceVal(Math.round(parseInt(value[1])))
                    }}
                  />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        </div> }
        { !isSearchPage && <div className="product-category-sidebar__btns">
          <div className="product-category-sidebar__btn-wrapper">
            <button className="product-category-sidebar__btn product-category-sidebar__btn--show">Показать все фильтры</button>
          </div>
          <div className="product-category-sidebar__btn-wrapper">
            <button className="product-category-sidebar__btn product-category-sidebar__btn--cancel">Сбросить фильтры</button>
          </div>
        </div> }
        <Banner className={'product-category-sidebar__banner'} />
      </div>
    </aside>
  )
}

export default ProductCategorySidebar