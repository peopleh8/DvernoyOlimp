import React from 'react'

import './AboutIcons.scss'

import sprite from '../../../icons/sprite.svg'

const AboutIcons = () => {
  return (
    <section className="about-icons">
      <div className="container">
        <div className="about-icons__inner">
          <div className="about-icons__item">
            <div className="about-icons__item-inner">
              <div className="about-icons__item-icon"><svg><use href={`${sprite}#about-icon-1`} /></svg></div>
              <div className="about-icons__item-title">Более 10 лет успешной работы</div>
            </div>
          </div>
          <div className="about-icons__item">
            <div className="about-icons__item-inner">
              <div className="about-icons__item-icon"><svg><use href={`${sprite}#about-icon-2`} /></svg></div>
              <div className="about-icons__item-title">Более 10 лет успешной работы</div>
            </div>
          </div>
          <div className="about-icons__item">
            <div className="about-icons__item-inner">
              <div className="about-icons__item-icon"><svg><use href={`${sprite}#about-icon-3`} /></svg></div>
              <div className="about-icons__item-title">Более 10 лет успешной работы</div>
            </div>
          </div>
          <div className="about-icons__item">
            <div className="about-icons__item-inner">
              <div className="about-icons__item-icon"><svg><use href={`${sprite}#about-icon-4`} /></svg></div>
              <div className="about-icons__item-title">Более 10 лет успешной работы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIcons