import React from 'react'
import InputMask from 'react-input-mask'

import './ContactsCallback.scss'

const ContactsCallback = () => {
  return (
    <div className="contacts-callback">
      <div className="container">
        <div className="contacts-callback__title">Заказать обратный звонок</div>
        <from className="contacts-callback__form">
          <div className="contacts-callback__inner">
            <div className="contacts-callback__inp-wrapper">
              <label className="contacts-callback__label" htmlFor="contacts-name">Ваше имя</label>
              <div className="contacts-callback__inp-inner">
                <input className="contacts-callback__inp" type="text" name="name" id="contacts-name" placeholder="Как Вас зовут?" autoComplete="off" />
              </div>
            </div>
            <div className="contacts-callback__inp-wrapper">
              <label className="contacts-callback__label" htmlFor="contacts-phone">Ваш номер телефона</label>
              <div className="contacts-callback__inp-inner">
                <InputMask
                  mask="+38 (099) 999-99-99"
                  maskPlaceholder={null}
                  placeholder="+38 (___) ___-__-__"
                  className="contacts-callback__inp"
                  type="tel"
                  id="contacts-phone"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="contacts-callback__inp-wrapper">
              <label className="contacts-callback__label" htmlFor="contacts-time">Желаемое время звонка</label>
              <div className="contacts-callback__inp-inner">
                <input className="contacts-callback__inp" type="text" name="name" id="contacts-time" placeholder="10:00 - 10:30" autoComplete="off" />
              </div>
            </div>
          </div>
          <div className="contacts-callback__bot">
            <p className="contacts-callback__text">Нажимая на кнопку, вы соглашаетесь на обработку <a href="#" target="_blank" rel="noreferrer">персональных данных</a></p>
            <button className="contacts-callback__btn btn">
              <span className="contacts-callback__btn-text btn__text">Отправить сообщение</span>
            </button>
          </div>
        </from>
      </div>
    </div>
  )
}

export default ContactsCallback