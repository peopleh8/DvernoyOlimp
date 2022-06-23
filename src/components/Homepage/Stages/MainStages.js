import React from 'react'

import './Stages.scss'

import stagesBg from '../../../images/stages-bg.png'

const MainStages = () => {
  return (
    <div className="main-stages">
      <img src={stagesBg} alt="" width={1920} height={510} />
      <div className="container">
        <div className="main-stages__title title title--light">Этапы работы c Дверной Олимп</div>
        <div className="main-stages__inner">
          <div className="main-stages__item">
            <div className="main-stages__item-inner">
              <div className="main-stages__item-title">Оформление заявки</div>
            </div>
          </div>
          <div className="main-stages__item">
            <div className="main-stages__item-inner">
              <div className="main-stages__item-title">Выезд замерщика</div>
            </div>
          </div>
          <div className="main-stages__item">
            <div className="main-stages__item-inner">
              <div className="main-stages__item-title">Заключение договора и оплата</div>
            </div>
          </div>
          <div className="main-stages__item">
            <div className="main-stages__item-inner">
              <div className="main-stages__item-title">Доставка дверей в течение 3-х* дней</div>
            </div>
          </div>
          <div className="main-stages__item">
            <div className="main-stages__item-inner">
              <div className="main-stages__item-title">Установка с гарантией</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainStages