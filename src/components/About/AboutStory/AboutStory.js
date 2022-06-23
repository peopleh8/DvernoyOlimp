import React from 'react'

import './AboutStory.scss'

import AboutStorySlider from './AboutStorySlider'

const AboutStory = () => {
  return (
    <section className="about-story">
      <div className="container">
        <div className="about-story__wrapper">
          <div className="about-story__title title title--dark">История компании</div>
          <AboutStorySlider />
        </div>
      </div>
    </section>
  )
}

export default AboutStory