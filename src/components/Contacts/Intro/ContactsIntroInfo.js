import React from 'react'

import sprite from '../../../icons/sprite.svg'

const ContactsIntroInfo = () => {
  return (
    <div className="contacts-intro__info contacts-intro-info">
      <div className="contacts-intro-info__item">
        <div className="contacts-intro-info__title">Бесплатно по всей Украине</div>
        <a className="contacts-intro-info__phone" href="tel:3800800339827">0 800 339 827</a>
      </div>
      <div className="contacts-intro-info__item">
        <div className="contacts-intro-info__title">График работы Call Center</div>
        <div className="contacts-intro-info__schedule">
          <div className="contacts-intro-info__schedule-text">09:00-21:00 пн-пт</div>
          <div className="contacts-intro-info__schedule-text">10:00-20:00 сб-вс</div>
        </div>
      </div>
      <div className="contacts-intro-info__item">
        <div className="contacts-intro-info__title">Написать нам</div>
        <a className="contacts-intro-info__email" href="mailto:dvernoyolimp@gmail.com ">dvernoyolimp@gmail.com</a>
        <ul className="contacts-intro-info__social">
          <li className="contacts-intro-info__social-item">
            <a className="contacts-intro-info__social-link" href="#" target="_blank" rel="noreferrer">
              <svg><use href={`${sprite}#telegram`} /></svg>
            </a>
          </li>
          <li className="contacts-intro-info__social-item">
            <a className="contacts-intro-info__social-link" href="#" target="_blank" rel="noreferrer">
              <svg><use href={`${sprite}#viber`} /></svg>
            </a>
          </li>
          <li className="contacts-intro-info__social-item">
            <a className="contacts-intro-info__social-link" href="#" target="_blank" rel="noreferrer">
              <svg><use href={`${sprite}#whatsapp`} /></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="contacts-intro-info__item">
        <div className="contacts-intro-info__title">Юр. информация</div>
        <div className="contacts-intro-info__desc">
          <p className="contacts-intro-info__text">
            ТОВ «Дверний Олімп Компані» <span>ЄДРПОУ 42571408</span>
          </p>
          <p className="contacts-intro-info__text">
            Дата та номер запису в Єдиному державному реєстрі юридичних осіб та фізичних осіб-підприємців про проведення державної реєстрації: <span>24.10.2018 1 357 102 0000 005979</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactsIntroInfo