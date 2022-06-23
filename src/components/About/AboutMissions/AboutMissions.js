import React from 'react'

import './AboutMissions.scss'

import aboutMission from '../../../images/about-mission.jpg'

const AboutMissions = () => {
  return (
    <section className="about-mission">
      <div className="container">
        <div className="about-mission__title title title--dark">Миссия и ценности</div>
        <div className="about-mission__inner">
          <div className="about-mission__item">
            <div className="about-mission__item-inner">
              <div className="about-mission__item-photo">
                <img src={aboutMission} alt="" width={385} height={295} />
              </div>
              <div className="about-mission__item-title">Наша миссия</div>
            </div>
          </div>
          <div className="about-mission__item">
            <div className="about-mission__item-inner">
              <div className="about-mission__item-photo">
                <img src={aboutMission} alt="" width={385} height={295} />
              </div>
              <div className="about-mission__item-title">Наша миссия</div>
            </div>
          </div>
          <div className="about-mission__item">
            <div className="about-mission__item-inner">
              <div className="about-mission__item-photo">
                <img src={aboutMission} alt="" width={385} height={295} />
              </div>
              <div className="about-mission__item-title">Наша миссия</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMissions