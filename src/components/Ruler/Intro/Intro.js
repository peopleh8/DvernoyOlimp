import React from 'react'

import Callback from '../../Callback/Callback'

import './Intro.scss'

const RulerIntro = () => {
  return (
    <section className="ruler-intro intro">
      <div className="container">
        <div className="ruler-intro__wrapper">
          <h1 className="ruler-intro__title title title--dark">Замер дверей</h1>
          <Callback />
          <div className="ruler-intro__bot">
            <div className="ruler-intro__subtitle">Замеры - 150 грн, по  Киевскому, Одесскому региону:</div>
            <ul className="ruler-intro__list">
              <li className="ruler-intro__item">Замер до 10 проемов на 1 объекте заказчика - 200 грн.</li>
              <li className="ruler-intro__item">Замер до 20 проемов на 1 объекте заказчика - 250 грн.</li>
              <li className="ruler-intro__item">Замер более 20 проемов на 1 объекте заказчика - 350 грн.</li>
              <li className="ruler-intro__item">Замер по Киевской обл. (кроме г. Киев,  г. Ирпень, г. Буча, г. Бровары) к тарифу замера + 7 грн за 1 км от КП (учтено в обе стороны)</li>
              <li className="ruler-intro__item">Замер по Одесской обл. к тарифу замера + 10 грн. за 1 км от КП (учтено в обе стороны)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RulerIntro