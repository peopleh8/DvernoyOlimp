import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


import './AboutVideoblog.scss'

import AboutVideoblogList from './AboutVideoblogList'
import AboutVideoblogSlider from './AboutVideoblogSlider'

const AboutVideoblog = () => {
  const [ isVisibleSlider, setIsVisibleSlider ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 481px)': () => setIsVisibleSlider(false),
      '(max-width: 480px)': () => setIsVisibleSlider(true),
    })
  }, [])

  return (
    <section className="about-videoblog">
      <div className="container">
        <div className="about-videoblog__title title title--dark">Наш видеоблог</div>
        { !isVisibleSlider && <AboutVideoblogList /> }
        { isVisibleSlider && <AboutVideoblogSlider /> }
      </div>
    </section>
  )
}

export default AboutVideoblog