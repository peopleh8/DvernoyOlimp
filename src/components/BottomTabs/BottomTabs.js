import React from 'react'
import { Link } from 'gatsby'

import './BottomTabs.scss'

const BottomTabs = () => {
  return (
    <div className="bottom-tabs">
      <div className="container">
        <div className="bottom-tabs__inner">
          <div className="bottom-tabs__head">
            <div className="bottom-tabs__head-item active">ТОП Категории</div>
            <div className="bottom-tabs__head-item">Двери</div>
            <div className="bottom-tabs__head-item">ТОП товаров</div>
          </div>
          <div className="bottom-tabs__body">
            <div className="bottom-tabs__body-item">
              <div className="bottom-tabs__body-links">
                <Link className="bottom-tabs__body-link" to="#">двери межкомнатные на рельсах</Link>
                <Link className="bottom-tabs__body-link" to="#">межкомнатные двери скрытые</Link>
                <Link className="bottom-tabs__body-link" to="#">двери входные металлические</Link>
                <Link className="bottom-tabs__body-link" to="#">входные двери с стеклом</Link>
                <Link className="bottom-tabs__body-link" to="#">кованые железные двери</Link>
                <Link className="bottom-tabs__body-link" to="#">раздвижные двери в ванную</Link>
                <Link className="bottom-tabs__body-link" to="#">бронированные металлические двери</Link>
                <Link className="bottom-tabs__body-link" to="#">раздвижные межкомнатные двери</Link>
              </div>
              <div className="bottom-tabs__body-links">
                <Link className="bottom-tabs__body-link" to="#">двери папа карло plato</Link>
                <Link className="bottom-tabs__body-link" to="#">входная белая дверь</Link>
                <Link className="bottom-tabs__body-link" to="#">ручки apecs</Link>
                <Link className="bottom-tabs__body-link" to="#">комнатная дверь</Link>
                <Link className="bottom-tabs__body-link" to="#">белая входная дверь в дом</Link>
                <Link className="bottom-tabs__body-link" to="#">двери из дерева</Link>
                <Link className="bottom-tabs__body-link" to="#">двери межкомнатные с прозрачным стеклом</Link>
                <Link className="bottom-tabs__body-link" to="#">входные двери с ковкой</Link>
              </div>
              <div className="bottom-tabs__body-links">
                <Link className="bottom-tabs__body-link" to="#">дверь экошпон</Link>
                <Link className="bottom-tabs__body-link" to="#">входные двери технические</Link>
                <Link className="bottom-tabs__body-link" to="#">металлическая дверь для дачи</Link>
                <Link className="bottom-tabs__body-link" to="#">входные двери с ковкой и стеклом</Link>
                <Link className="bottom-tabs__body-link" to="#">металлические двери входные</Link>
                <Link className="bottom-tabs__body-link" to="#">массив двери</Link>
                <Link className="bottom-tabs__body-link" to="#">раздвижная межкомнатная дверь</Link>
              </div>
            </div>
            {/*<div className="bottom-tabs__body-item">*/}
            {/*  */}
            {/*</div>*/}
            {/*<div className="bottom-tabs__body-item">*/}
            {/*  */}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomTabs