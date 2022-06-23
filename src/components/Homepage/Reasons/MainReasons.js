import React  from 'react'

import './MainReasons.scss'

import reasonsBg from '../../../images/reasons-bg.png'

const MainReasons = () => {
  return (
    <div className="main-reasons">
      <img src={reasonsBg} alt="" width={1920} height={690} />
      <div className="container">
        <div className="main-reasons__title title title--light">6 причин выбрать Дверной Олимп</div>
        <div className="main-reasons__inner">
          <div className="main-reasons__item">
            <div className="main-reasons__item-inner">
              <p className="main-reasons__item-desc">Более 10 лет успешной работы</p>
            </div>
          </div>
          <div className="main-reasons__item">
            <div className="main-reasons__item-inner">
              <p className="main-reasons__item-desc">Продукция от 52 лучших производителей</p>
            </div>
          </div>
          <div className="main-reasons__item">
            <div className="main-reasons__item-inner">
              <p className="main-reasons__item-desc">Изготовление дверей по индивидуальным размерам</p>
            </div>
          </div>
          <div className="main-reasons__item">
            <div className="main-reasons__item-inner">
              <p className="main-reasons__item-desc">Гарантия до 3-х лет</p>
            </div>
          </div>
          <div className="main-reasons__item">
            <div className="main-reasons__item-inner">
              <p className="main-reasons__item-desc">Любая форма оплаты</p>
            </div>
          </div>
          <div className="main-reasons__item">
            <div className="main-reasons__item-inner">
              <p className="main-reasons__item-desc">Более 450 000 счастливых клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainReasons