import React, { useEffect } from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'
import InputMask from 'react-input-mask'

import './Modal.scss'

import { isBrowser } from '../../utils/isBrowser'
import { getScrollbarWidth } from '../../utils/getScrollbarWidth'

import sprite from '../../icons/sprite.svg'

const ReviewsModal = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='reviews']", {
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
    <div className="modal modal-reviews" id="reviews-modal" style={{ display: 'none' }}>
      <div className="modal__top">
        <div className="modal__title">Добавить отзыв</div>
      </div>
      <form className="modal__form">
        <div className="modal__inp-wrapper">
          <label className="modal__label" htmlFor="modal-reviews-name">Имя</label>
          <div className="modal__inp-inner">
            <input
              className="modal__inp"
              id="modal-reviews-name"
              type="text"
              name="modal-reviews-name"
              autoComplete="off"
              placeholder="Ваше имя"
            />
          </div>
        </div>
        <div className="modal__inp-wrapper">
          <label className="modal__label" htmlFor="modal-reviews-phone">Телефон</label>
          <div className="modal__inp-inner">
            <InputMask
              mask="+38 (099) 999-99-99"
              maskPlaceholder={null}
              className="modal__inp"
              id="modal-reviews-phone"
              type="tel"
              name="modal-reviews-phone"
              autoComplete="off"
              placeholder="+380 ("
            />
          </div>
        </div>
        <div className="modal__rating-wrapper">
          <span className="modal__label">Рейтинг</span>
          <div className="modal__rating rating" data-rating="0">
            { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
          </div>
        </div>
        <div className="modal__textarea-wrapper">
          <label className="modal__label" htmlFor="modal-callback-message">Отзыв</label>
          <div className="modal__textarea-inner">
            <textarea
              className="modal__textarea"
              id="modal-reviews-message"
              name="modal-reviews-message"
              autoComplete="off"
              placeholder="Ваше имя"
            />
          </div>
        </div>
        <div className="modal__btns">
          <div className="modal__btn-wrapper">
            <button className="modal__btn btn" type="submit">
              <span className="modal__btn-text btn__text">Отправить</span>
            </button>
          </div>
          <div className="modal__btn-wrapper">
            <button
              className="modal__cancel"
              type="button"
              onClick={() => Fancybox.close()}
            >
              Отмена
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ReviewsModal