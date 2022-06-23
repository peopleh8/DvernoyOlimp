import React from 'react'

import './AboutVideoblog.scss'

import sprite from '../../../icons/sprite.svg'

import video1 from '../../../images/video-1.jpg'

const AboutVideoblog = () => {
  return (
    <section className="about-videoblog">
      <div className="container">
        <div className="about-videoblog__title title title--dark">Наш видеоблог</div>
        <div className="about-videoblog__inner">
          <div className="video about-videoblog__item">
            <div className="video__preview">
              <img src={video1} alt="" width={610} height={345} />
              <button className="video__btn">
                <svg><use href={`${sprite}#video-youtube`} /></svg>
              </button>
            </div>
            <div className="video__info">
              <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
              <div className="video__duration">1:52</div>
            </div>
          </div>
          <div className="video about-videoblog__item">
            <div className="video__preview">
              <img src={video1} alt="" width={610} height={345} />
              <button className="video__btn">
                <svg><use href={`${sprite}#video-youtube`} /></svg>
              </button>
            </div>
            <div className="video__info">
              <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
              <div className="video__duration">1:52</div>
            </div>
          </div>
          <div className="video about-videoblog__item">
            <div className="video__preview">
              <img src={video1} alt="" width={610} height={345} />
              <button className="video__btn">
                <svg><use href={`${sprite}#video-youtube`} /></svg>
              </button>
            </div>
            <div className="video__info">
              <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
              <div className="video__duration">1:52</div>
            </div>
          </div>
          <div className="video about-videoblog__item">
            <div className="video__preview">
              <img src={video1} alt="" width={610} height={345} />
              <button className="video__btn">
                <svg><use href={`${sprite}#video-youtube`} /></svg>
              </button>
            </div>
            <div className="video__info">
              <div className="video__title">Как выбрать идеальную дверь? Межкомнатные двери. Дизайн интерьера в современном стиле</div>
              <div className="video__duration">1:52</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutVideoblog