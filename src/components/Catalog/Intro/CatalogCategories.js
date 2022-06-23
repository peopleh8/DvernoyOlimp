import React from 'react'
import { Link } from 'gatsby'

import sprite from '../../../icons/sprite.svg'

import catalogCat from '../../../images/catalog-cat-1.svg'
import subintro1 from '../../../images/main-subintro-1.png'

const CatalogCategories = () => {
  return (
    <div className="catalog-intro__categories catalog-intro-categories">
      <div className="catalog-intro-categories__item">
        <div className="catalog-intro-categories__title">
          <div className="catalog-intro-categories__title-icon">
            <img src={catalogCat} alt=""/>
          </div>
          <div className="catalog-intro-categories__title-text">
            Каталог межкомнатных дверей
          </div>
        </div>
        <div className="catalog-intro-categories__inner">
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Тип</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Раздвижные двери</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Двустворчатые двери</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Раздвижные перегородки</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">С четвертью</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Скрытые двери</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Двери под покраску</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Материал</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Шпон натуральный</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Экошпон</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Пленка ПВХ</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Ламинированный МДФ</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Стекло</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Эмаль по МДФ</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Эмаль по шпону</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Белая эмаль</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Назначение</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">В дом</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">В комнату</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">В детскую</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">В спальню</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">В ванную</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">В туалет</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">На кухню</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Офисные</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Стиль</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Kлассика</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Прованс</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">В детскую</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Модерн</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Хай-тек</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Минимализм</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Лофт</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Цветовые оттенки</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Белые</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Беленый дуб</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Светлые</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Серые</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Коричневые</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Темные</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Венге</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Комбинированные</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Вариант остекления</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Со стеклом</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Глухие</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="catalog-intro-categories__select">
          <div className="catalog-intro-categories__select-item">
            <div className="catalog-intro-categories__select-title">Выберите Ваш город:</div>
            <ul className="catalog-intro-categories__select-list">
              <li className="catalog-intro-categories__select-elem">Одесса</li>
              <li className="catalog-intro-categories__select-elem">Борисполь</li>
            </ul>
          </div>
          <div className="catalog-intro-categories__select-item">
            <div className="catalog-intro-categories__select-title">Дополнительные параметры выбора:</div>
            <ul className="catalog-intro-categories__select-list">
              <li className="catalog-intro-categories__select-elem">На складе</li>
              <li className="catalog-intro-categories__select-elem">Нестандартный размер</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="catalog-intro-categories__item">
        <div className="catalog-intro-categories__title">
          <div className="catalog-intro-categories__title-icon">
            <img src={catalogCat} alt=""/>
          </div>
          <div className="catalog-intro-categories__title-text">
            Каталог входных дверей
          </div>
        </div>
        <div className="catalog-intro-categories__inner">
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Тип</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Квартира</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Улица</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Отделка двери</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Деревянная накладка</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">МДФ-накладка</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Металл/Vinorit</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Стальные (покраска)</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Назначение</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Офисные</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Технические</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Утепленные</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Для дачи</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Сегмент</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Элит</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Премиум</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Бронированные</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Стандарт</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Эконом</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-intro-categories__filter filter-item">
            <div className="catalog-intro-categories__filter-inner filter-item__inner">
              <img src={subintro1} alt="" width={385} height={360} />
              <div className="catalog-intro-categories__filter-info filter-item__info">
                <div className="catalog-intro-categories__filter-title filter-item__title">Стеклопакеты/ковка</div>
                <div className="catalog-intro-categories__filter-links filter-item__links">
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Со стеклопакетом</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                  <Link className="catalog-intro-categories__filter-link filter-item__link" to="#">
                    <span className="catalog-intro-categories__filter-text filter-item__text">Со стеклопакетом и с ковкой</span>
                    <span className="catalog-intro-categories__filter-icon filter-item__icon">
                      <svg><use href={`${sprite}#big-item-arrow`}/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogCategories