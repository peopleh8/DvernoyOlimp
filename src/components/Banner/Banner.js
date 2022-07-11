import React from 'react'

import './Banner.scss'

import sprite from '../../icons/sprite.svg'

const Banner = ({ className }) => {
  return (
    <div className={`${className} sidebar-banner`}>
      <div className={`${className}-icon sidebar-banner__icon`}>
        <svg><use href={`${sprite}#banner-user`} /></svg>
      </div>
      <div className={`${className}-title sidebar-banner__title`}>Нужна консультация?</div>
      <p className={`${className}-desc sidebar-banner__desc`}>Перезвоните или напишите нам, мы с радостью поможем</p>
      <a className={`${className}-phone sidebar-banner__phone`} href="tel:380800339827">0 800 339 827</a>
    </div>
  )
}

export default Banner