import React, { useEffect } from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'
import InputMask from 'react-input-mask'

import './Modal.scss'

import { isBrowser } from '../../utils/isBrowser'
import { getScrollbarWidth } from '../../utils/getScrollbarWidth'

import sprite from '../../icons/sprite.svg'

import productImg from '../../images/single-product.jpg'

const QuickModal = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='quick']", {
      showClass: 'fancybox-fadeIn',
      hideClass: 'fancybox-fadeOut',
      dragToClose: false,
      parentEl: isBrowser() && document.querySelector('#___gatsby'),
      on: {
        init: () => {
          if (isBrowser()) document.querySelector('.header').style.paddingRight = getScrollbarWidth()
        },
        destroy: () => {
          if (isBrowser()) document.querySelector('.header').style.paddingRight = '0'
        }
      }
    })

    return () => {
      Fancybox.destroy()
    }
  }, [])

  return (
    <div className="modal modal-quick" id="quick-modal" style={{ display: 'none' }}>
      <div className="modal__title">Быстрый заказ</div>
      <div className="modal__choice modal-choice">
        <div className="modal-choice__title">Ваш выбор:</div>
        <div className="modal-choice__info">
          <div className="modal-choice__preview">
            <div className="modal-choice__preview-inner">
              <img src={productImg} width={48} height={55} alt="" />
            </div>
          </div>
          <div className="modal-choice__name">Входные двери B 3.11 Венге/Белый супермат М2, Mottura. БЕРИСЛАВ</div>
        </div>
        <div className="modal-choice__controls">
          <div className="modal-choice__subtitle">Общая стоимость:</div>
          <div className="modal-choice__inner">
            <div className="modal-choice__counter">
              <button className="modal-choice__btn modal-choice__btn--minus" type="button" />
              <input className="modal-choice__inp" type="text" autoComplete="off" value={1} />
              <button className="modal-choice__btn modal-choice__btn--plus" type="button" />
            </div>
            <div className="modal-choice__price">4 303 грн / шт.</div>
          </div>
        </div>
      </div>
      <form className="modal__form">
        <div className="modal__inp-wrapper">
          <label className="modal__label" htmlFor="modal-quick-name">Имя</label>
          <div className="modal__inp-inner">
            <input
              className="modal__inp"
              id="modal-quick-name"
              type="text"
              name="modal-callback-name"
              autoComplete="off"
              placeholder="Ваше имя"
            />
          </div>
        </div>
        <div className="modal__inp-wrapper">
          <label className="modal__label" htmlFor="modal-quick-phone">Телефон</label>
          <div className="modal__inp-inner">
            <InputMask
              mask="+38 (099) 999-99-99"
              maskPlaceholder={null}
              className="modal__inp"
              id="modal-quick-phone"
              type="tel"
              name="modal-callback-phone"
              autoComplete="off"
              placeholder="+380 ("
            />
          </div>
        </div>
        <div className="modal__btns">
          <div className="modal__btn-wrapper">
            <button className="modal__btn btn">
              <span className="modal__btn-icon btn__icon">
                <svg><use href={`${sprite}#cart`} /></svg>
              </span>
              <span className="modal__btn-text btn__text">Купить</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default QuickModal