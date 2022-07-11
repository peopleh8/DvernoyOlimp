import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './MainReasons.scss'

import MainReasonsList from './MainReasonsList'
import MainReasonsSlider from './MainReasonsSlider'

import reasonsBg from '../../../images/reasons-bg.png'

const MainReasons = () => {
  const [ isVisibleSlider, setIsVisibleSlider ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 481px)': () => setIsVisibleSlider(false),
      '(max-width: 480px)': () => setIsVisibleSlider(true)
    })
  }, [])

  return (
    <div className="main-reasons">
      <img src={reasonsBg} alt="" width={1920} height={690} />
      <div className="container">
        <div className="main-reasons__title title title--light">6 причин выбрать Дверной Олимп</div>
        { !isVisibleSlider && <MainReasonsList /> }
        { isVisibleSlider && <MainReasonsSlider /> }
      </div>
    </div>
  )
}

export default MainReasons