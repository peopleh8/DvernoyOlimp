import React from 'react'

import './RulerVideo.scss'

import sprite from '../../../icons/sprite.svg'

import video1 from '../../../images/video-1.jpg'

const RulerVideo = () => {
  return (
    <section className="ruler-video">
      <div className="container">
        <div className="ruler-video__title">Как определить открывание дверей:</div>
        <div className="ruler-video__inner">
          <div className="ruler-video__item video">
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

export default RulerVideo