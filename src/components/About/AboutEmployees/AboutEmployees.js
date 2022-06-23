import React from 'react'

import './AboutEmployees.scss'

import aboutEmployees from '../../../images/about-employeers.jpg'

const AboutEmployees = () => {
  return (
    <section className="about-employees">
      <div className="container">
        <div className="about-employees__wrapper">
          <div className="about-employees__title title title--dark">Наши сотрудники</div>
          <div className="about-employees__preview">
            <img src={aboutEmployees} alt="" width={1280} height={520} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEmployees