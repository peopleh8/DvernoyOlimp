import React from 'react'

import './Intro.scss'

import BrandsIntroCategories from './IntroCategories'
import BrandsIntroList from './IntroList'
import BrandsIntroBtnLoad from './IntroBtnLoad'
import BrandsIntroPagination from './IntroPagination'

const BrandsIntro = () => {
  return (
    <section className="brands intro">
      <div className="container">
        <div className="brands__wrapper">
          <h1 className="brands__title title title--dark">Бренды</h1>
          <BrandsIntroCategories />
          <BrandsIntroList />
          <BrandsIntroBtnLoad />
          <BrandsIntroPagination />
        </div>
      </div>
    </section>
  )
}

export default BrandsIntro