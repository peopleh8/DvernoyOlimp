import React from 'react'

import './Intro.scss'

import brandsLogo from '../../../images/brands-logo.png'

const SingleBrandIntro = () => {
  return (
    <section className="single-brand-intro intro">
      <div className="container">
        <div className="single-brand-intro__wrapper">
          <h1 className="single-brand-intro__title title title--dark">Korfad</h1>
          <div className="single-brand-intro__inner">
            <div className="single-brand-intro__photo">
              <div className="single-brand-intro__photo-inner">
                <img src={brandsLogo} width={245} height={65} alt=""/>
              </div>
            </div>
            <p className="single-brand-intro__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleBrandIntro