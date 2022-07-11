import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import productImg from '../../images/single-product.jpg'

const CheckoutList = () => {
  const [ isOpen, setIsOpen ] = useState(true)

  return (
    <div className={`checkout-content__list ${isOpen ? 'open' : ''}`}>
      <div
        className="checkout-content__list-header"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="checkout-content__list-header-title">Ваш выбор</div>
        <div className="checkout-content__list-header-icon" />
      </div>
      <Collapse isOpened={isOpen}>
        <div className="checkout-content__list-inner">
          {
            new Array(2).fill('').map((_, index) => {
              return (
                <div className="checkout-content__list-item" key={index}>
                  <div className="checkout-content__list-top">
                    <div className="checkout-content__list-info">
                      <div className="checkout-content__list-preview">
                        <div className="checkout-content__list-preview-inner">
                          <img src={productImg} alt="" width={48} height={55} />
                        </div>
                      </div>
                      <div className="checkout-content__list-title">Входные двери B 3.11 Венге/Белый супермат М2, Mottura. БЕРИСЛАВ</div>
                    </div>
                    <div className="checkout-content__list-count">х1</div>
                    <div className="checkout-content__list-price">114 303 грн</div>
                  </div>
                  <div className="checkout-content__list-chars">
                    <div className="checkout-content__list-chars-item">
                      <div className="checkout-content__list-chars-title">Размер двери: </div>
                      <div className="checkout-content__list-chars-value">610х2000 мм</div>
                    </div>
                    <div className="checkout-content__list-chars-item">
                      <div className="checkout-content__list-chars-title">Коробка: </div>
                      <div className="checkout-content__list-chars-value">80 мм (1 к-т)</div>
                    </div>
                    <div className="checkout-content__list-chars-item">
                      <div className="checkout-content__list-chars-title">Добор: </div>
                      <div className="checkout-content__list-chars-value">100 мм z</div>
                    </div>
                    <div className="checkout-content__list-chars-item">
                      <div className="checkout-content__list-chars-title">Наличник: </div>
                      <div className="checkout-content__list-chars-value">на одну сторону 70 мм</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Collapse>
    </div>
  )
}

export default CheckoutList