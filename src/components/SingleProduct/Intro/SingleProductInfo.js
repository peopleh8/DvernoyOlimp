import React from 'react'

import sprite from '../../../icons/sprite.svg'

const SingleProductInfo = () => {
  return (
    <div className="single-product-intro__info single-product-intro-info">
      <div className="single-product-intro-info__item">
        <div className="single-product-intro-info__header">
          <div className="single-product-intro-info__icon">
            <svg><use href={`${sprite}#car`} /></svg>
          </div>
          <div className="single-product-intro-info__title">Доставка</div>
        </div>
        <ul className="single-product-intro-info__list">
          <li className="single-product-intro-info__list-item">Самовывоз со склада по согласованию по Киеву до подъезда - 490грн за Киев + 12 грн/км</li>
          <li className="single-product-intro-info__list-item">по Украине пересылка Новой Почтой, Delivery - <a href="#" target="_blank" rel="noreferrer">бесплатно *</a></li>
        </ul>
      </div>
      <div className="single-product-intro-info__item">
        <div className="single-product-intro-info__header">
          <div className="single-product-intro-info__icon">
            <svg><use href={`${sprite}#tools`} /></svg>
          </div>
          <div className="single-product-intro-info__title">Монтаж</div>
        </div>
        <ul className="single-product-intro-info__list">
          <li className="single-product-intro-info__list-item">от 1050 грн <a href="#" target="_blank" rel="noreferrer">подробнее</a></li>
        </ul>
      </div>
      <div className="single-product-intro-info__item">
        <div className="single-product-intro-info__header">
          <div className="single-product-intro-info__icon">
            <svg><use href={`${sprite}#guard`} /></svg>
          </div>
          <div className="single-product-intro-info__title">Гарантия</div>
        </div>
        <ul className="single-product-intro-info__list">
          <li className="single-product-intro-info__list-item">от производителя - <a target="_blank" rel="noreferrer"href="#">детали тут</a></li>
        </ul>
      </div>
      <div className="single-product-intro-info__item">
        <div className="single-product-intro-info__header">
          <div className="single-product-intro-info__icon">
            <svg><use href={`${sprite}#portmone`} /></svg>
          </div>
          <div className="single-product-intro-info__title">Оплата</div>
        </div>
        <ul className="single-product-intro-info__list">
          <li className="single-product-intro-info__list-item">Наличными</li>
          <li className="single-product-intro-info__list-item">Visa, MasterCard</li>
          <li className="single-product-intro-info__list-item">Безналичный расчет НДС</li>
          <li className="single-product-intro-info__list-item">Кредит, рассрочка</li>
          <li className="single-product-intro-info__list-item">Онлайн на сайте</li>
        </ul>
      </div>
      <div className="single-product-intro-info__item">
        <div className="single-product-intro-info__header">
          <div className="single-product-intro-info__icon">
            <svg><use href={`${sprite}#ruler`} /></svg>
          </div>
          <div className="single-product-intro-info__title">Замер</div>
        </div>
        <ul className="single-product-intro-info__list">
          <li className="single-product-intro-info__list-item">Самостоятельно <a target="_blank" rel="noreferrer" href="#">по инструкции</a></li>
          <li className="single-product-intro-info__list-item">Выезд мастера: 200-300 грн.</li>
        </ul>
      </div>
    </div>
  )
}

export default SingleProductInfo