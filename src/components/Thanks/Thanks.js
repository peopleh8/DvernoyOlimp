import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Thanks.scss'

import { PrefixContext } from '../../context/PrefixContext'

import sprite from '../../icons/sprite.svg'

const ThanksIntro = ({ deliveryCode }) => {
  let prefix = useContext(PrefixContext)

  return (
    <section className="thanks">
      <div className="container">
        <div className="thanks__inner">
          <div className="thanks__icon">
            <svg><use href={`${sprite}#thanks-check`} /></svg>
          </div>
          <div className="thanks__number">
            Заказ № <span>{deliveryCode || 'Some delivery code'}</span>
          </div>
          <h1 className="thanks__title">Спасибо что выбрали нас</h1>
          <p className="thanks__desc">Наши менеджеры свяжутся с вами в ближайшее время</p>
          <div className="thanks__btn-wrapper">
            <Link className="thanks__btn btn" to={prefix}>
              <span className="thanks__btn-text btn__text">На главную</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThanksIntro