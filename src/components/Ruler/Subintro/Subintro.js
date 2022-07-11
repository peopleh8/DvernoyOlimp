import React from 'react'

import './Subintro.scss'

import subintro1 from '../../../images/ruler-subintro-1.jpg'
import subintro2 from '../../../images/ruler-subintro-2.jpg'
import subintro3 from '../../../images/ruler-subintro-3.jpg'

const RulerSubintro = () => {
  return (
    <section className="ruler-subintro">
      <div className="container">
        <div className="ruler-subintro__inner">
          <div className="ruler-subintro__content">
            <div className="ruler-subintro__title">Самостоятельный замер:</div>
            <article className="ruler-subintro__article">
              <p>
                а) желателен для предварительного просчета Вашего заказа;
              </p>
              <p>
                б) нужен для оформления заказа, без нашего замера:
              </p>
              <p>
                пункт 1 (на рис.) - ширина проема где будет установлена дверь, <br/>
                пункт 2 (на рис.) - высота проема от чистого (настеленного пола), <br/>
                пункт 3 (на рис.) - толщина стены, где будет устанавливаться коробка.
              </p>
              <h4>
                P.S. Замерять двери самостоятельно можно только, если Вы планируете заказ дверей стандартных размеров, так как если Вы допустите ошибку на пару сантиметров плюс или минус - это не страшно, индивидуально они подгоняются уже по месту. Ведь стандартные двери, независимо от размеров Ваших текущих проемов так и останутся стандартными...
              </h4>
              <img src={subintro2} alt=""/>
              <p>
                ВХОДНЫЕ ДВЕРИ по пожарной безопасности открываются только наружу. Определять открывание входных дверей нужно только с улицы или из подъезда!!!
              </p>
              <img src={subintro3} alt=""/>
            </article>
          </div>
          <div className="ruler-subintro__photo">
            <div className="ruler-subintro__photo-inner">
              <img src={subintro1} alt="" width={275} height={335} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RulerSubintro