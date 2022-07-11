import React from 'react'

import './Intro.scss'

import SingleProductSlider from './SingleProductSlider'
import SingleProductContent from './SingleProductContent'
import SingleProductInfo from './SingleProductInfo'

const SingleProductIntro = () => {
  return (
    <div className="single-product-intro intro">
      <div className="container">
        <h1 className="single-product-intro__title title title--dark">Входные двери B 3.11 Венге/Белый супермат М2, Mottura. БЕРИСЛАВ</h1>
        <div className="single-product-intro__inner">
          <SingleProductSlider />
          <SingleProductContent />
          <SingleProductInfo />
        </div>
      </div>
    </div>
  )
}

export default SingleProductIntro