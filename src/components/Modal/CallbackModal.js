import React, { useEffect } from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'
import InputMask from 'react-input-mask'

import './Modal.scss'

import { isBrowser } from '../../utils/isBrowser'
import { getScrollbarWidth } from '../../utils/getScrollbarWidth'

const CallbackModal = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='callback']", {
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
    <div className="modal modal-callback" id="callback-modal" style={{ display: 'none' }}>
      <div className="modal__title">Обратный звонок</div>
      <p className="modal__desc">Заполните заявку и мы свяжемся с вами в ближайшее время</p>
      <form className="modal__form">
        <div className="modal__inp-wrapper">
          <label className="modal__label" htmlFor="modal-callback-name">Имя</label>
          <div className="modal__inp-inner">
            <input
              className="modal__inp"
              id="modal-callback-name"
              type="text"
              name="modal-callback-name"
              autoComplete="off"
              placeholder="Ваше имя"
            />
          </div>
        </div>
        <div className="modal__inp-wrapper">
          <label className="modal__label" htmlFor="modal-callback-phone">Телефон</label>
          <div className="modal__inp-inner">
            <InputMask
              mask="+38 (099) 999-99-99"
              maskPlaceholder={null}
              className="modal__inp"
              id="modal-callback-phone"
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
              <span className="modal__btn-text btn__text">Отправить</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CallbackModal