import React from 'react'

import './Intro.scss'

import aboutIntro from '../../../images/about-intro.jpg'
import aboutPhoto from '../../../images/about-photo.png'

const AboutIntro = () => {
  return (
    <section className="about-intro intro">
      <div className="container">
        <div className="about-intro__preview about-intro-preview">
          <img src={aboutIntro} alt="" width={1280} height={535} />
        </div>
        <div className="about-intro__content about-intro-content">
          <div className="about-intro-content__side">
            <div className="about-intro-content__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div className="about-intro-content__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing </div>
            <p className="about-intro-content__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="about-intro-content__side">
            <div className="about-intro-content__photo">
              <img src={aboutPhoto} alt="" width={335} height={77} />
            </div>
            <p className="about-intro-content__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro