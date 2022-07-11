import React from 'react'

import './Intro.scss'

const MontageIntro = () => {
  return (
    <section className="montage-intro intro">
      <div className="container">
        <h1 className="montage-intro__title title title--dark">Установка дверей</h1>
        <div className="montage-intro__subtitle">Тарифы на проведение работ зависят от месторасположения объекта.</div>
        <div className="montage-intro__inner">
          <div className="montage-intro__item">
            <p className="montage-intro__item-text">Цены для Зон: г. Киев, г. Бровары, г. Ирпень (в т.ч. Романовка), г. Буча, пгт. Гостомель, пгт. Ворзель, г. Одесса В населенных пунктах, не отнесенных к зонам, перечисленным выше, к тарифу установки + 14 грн. за 1 км от КП (учтено в обе стороны)</p>
          </div>
          <div className="montage-intro__item">
            <p className="montage-intro__item-text">Если установка не состоялась по вине клиента, то мастеру клиент оплачивается ложный выезд в размере 300 грн.</p>
          </div>
          <div className="montage-intro__item">
            <div className="montage-intro__item-title">НЕ ВХОДИТ В МОНТАЖ</div>
            <ul className="montage-intro__item-list">
              <li className="montage-intro__item-elem">вынос мусора в мусорный бак либо прилегающую территорию</li>
              <li className="montage-intro__item-elem">влажная уборка</li>
              <li className="montage-intro__item-elem">вытирание пыли</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MontageIntro