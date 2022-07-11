import React, { useState } from 'react'
import InputMask from 'react-input-mask'

import './Callback.scss'

import formBg from '../../images/form-bg.png'

const Callback = () => {
  const [ phone, setPhone ] = useState('')

  return (
    <div className="callback">
      <div className="container">
        <div className="callback__wrapper">
          <img src={formBg} alt="" width={1280} height={250} />
          <div className="callback__inner">
            <div className="callback__content callback-content">
              <div className="callback__title title title--light">Замер дверей за 1 день!</div>
            </div>
            <form className="callback__form callback-form">
              <div className="callback__inp-wrapper">
                <label className="callback__label" htmlFor="callback-phone">Ваш номер телефона</label>
                <div className="callback__inp-inner">
                  <InputMask
                    className="callback__inp"
                    id="callback-phone"
                    mask="+38 (099) 999-99-99"
                    maskPlaceholder={null}
                    type="tel"
                    name="phone"
                    autoComplete="off"
                    placeholder="+38 (___) ___-__-__"
                    value={phone}
                    onChange={e => setPhone(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="callback__btn-wrapper">
                <button className="callback__btn btn" type="submit">
                  <span className="callback__btn-text btn__text">Вызвать Замерщика!</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Callback