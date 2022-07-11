import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'

import CategoryBlock from '../../CategoryBlock/CategoryBlock'
import IntroSlider from './IntroSlider'
import IntroCatSlider from "./IntroCatSlider";

const MainIntro = () => {
  const [ isTablet, setIsTablet ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setIsTablet(false),
      '(max-width: 1024px)': () => setIsTablet(true),
    })
  }, [])

  return (
    <section className="main-intro">
      <div className="main-intro__wrapper">
        <div className="container">
          <div className="main-intro__inner">
            { !isTablet && <CategoryBlock className={'main-intro__catalog-wrapper--intro'} /> }
            <IntroSlider />
            { isTablet && <IntroCatSlider /> }
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainIntro