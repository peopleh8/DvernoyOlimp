import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../../context/PrefixContext'

import brandsLogo from '../../../images/brands-logo.png'

const BrandsIntroList = () => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="brands__inner">
      {
        new Array(21).fill('').map((_, index) => {
          return (
            <div className="brands__item brands-item" key={index}>
              <div className="brands-item__inner">
                <div className="brands-item__logo">
                  <img src={brandsLogo} width={245} height={65} alt="" />
                </div>
                <div className="brands-item__title">Папа Карло</div>
                <p className="brands-item__desc">Нас знают и любят благодаря тому, что фабрика дверей Папа Карло зарекомендовала себя как производитель дверей №1 на рынке</p>
                <div className="brands-item__btn-wrapper">
                  <Link className="brands-item__btn" to={`${prefix}single-brand/`}>Узнать больше</Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default BrandsIntroList