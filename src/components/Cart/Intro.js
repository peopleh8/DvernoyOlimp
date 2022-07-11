import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Intro.scss'

import QuickModal from '../Modal/QuickModal'

import { PrefixContext } from '../../context/PrefixContext'

import productImg from '../../images/single-product.jpg'

const CartIntro = () => {
  let prefix = useContext(PrefixContext)

  return (
    <section className="cart intro">
      <div className="container">
        <h1 className="cart__title title title--dark">Моя корзина</h1>
        <div className="cart__table">
          <div className="cart__header cart-header">
            <div className="cart-header__item">Товары</div>
            <div className="cart-header__item">Цена</div>
            <div className="cart-header__item">Количество</div>
            <div className="cart-header__item">Сумма</div>
          </div>
          <div className="cart__list cart-list">
            {
              new Array(2).fill('').map((_, index) => {
                return (
                  <div className="cart-list__item" key={index}>
                    <div className="cart-list__item-inner">
                      <div className="cart-list__item-preview">
                        <div className="cart-list__item-preview-inner">
                          <img src={productImg} alt="" width={48} height={55} />
                        </div>
                      </div>
                      <div className="cart-list__item-info">
                        <div className="cart-list__item-title">Входные двери B 3.11 Венге/Белый супермат М2, Mottura. БЕРИСЛАВ</div>
                        <div className="cart-list__item-chars">
                          <div className="cart-list__item-chars-elem">Размер двери: 610х2000 мм</div>
                          <div className="cart-list__item-chars-elem">Коробка: 80 мм (1 к-т)</div>
                          <div className="cart-list__item-chars-elem">Наличник: на одну сторону 70 мм</div>
                          <div className="cart-list__item-chars-elem">Добор: 100 мм</div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-list__item-inner">
                      <div className="cart-list__item-current-price">14 780 грн</div>
                    </div>
                    <div className="cart-list__item-inner">
                      <div className="cart-list__item-counter">
                        <button className="cart-list__item-counter-btn cart-list__item-counter-btn--minus" />
                        <input className="cart-list__item-counter-inp" type="text" name="counter" autoComplete="off" value={0} />
                        <button className="cart-list__item-counter-btn cart-list__item-counter-btn--plus" />
                      </div>
                    </div>
                    <div className="cart-list__item-inner">
                      <div className="cart-list__item-total-price">14 780 грн</div>
                    </div>
                    <div className="cart-list__item-close" />
                  </div>
                )
              })
            }
          </div>
          <div className="cart__footer cart-footer">
            <Link className="cart-footer__btn cart-footer__btn--back" to={prefix}>Назад к покупкакам</Link>
            <div className="cart-footer__total-price">
              <span>Итог:</span>
              14 780 грн
            </div>
            <div className="cart-footer__btns">
              <button
                className="cart-footer__btn cart-footer__btn--fast"
                type="button"
                data-fancybox="quick"
                data-src="#quick-modal"
              >
                Быстрый заказ
              </button>
              <Link className="cart-footer__btn cart-footer__btn--checkout" to={`${prefix}checkout/`}>Перейти к оформлению</Link>
            </div>
          </div>
        </div>
      </div>
      <QuickModal />
    </section>
  )
}

export default CartIntro