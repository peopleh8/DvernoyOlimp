import React from 'react'
import { Link } from 'gatsby'

import './Intro.scss'

import bgImg from '../../images/not-fount-bg.jpg'

const NotFountIntro = ({ prefix }) => {
  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <img src={bgImg} alt="" width={1920} height={680} />
        <div className="not-found__content">
          <p className="not-found__desc">Что-то пошло не так...</p>
          <div className="not-found__btn-wrapper">
            <Link className="not-found__btn btn" to={prefix}>
              <span className="not-found__btn-text btn__text">На главную</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFountIntro