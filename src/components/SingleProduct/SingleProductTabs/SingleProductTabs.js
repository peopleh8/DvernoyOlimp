import React, { useState, useEffect } from 'react'
import { Tabs, Nav, Content } from 'react-tiny-tabs'
import InputMask from 'react-input-mask'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import 'react-tiny-tabs/dist/index.css'

import './SingleProductTabs.scss'

import ReviewsModal from '../../Modal/ReviewsModal'

import sprite from '../../../icons/sprite.svg'

import video2 from '../../../images/video-2.jpg'

const SingleProductTabs = () => {
  const [ isModalExist, setIsModalExist ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 650px)': () => setIsModalExist(false),
      '(max-width: 649px)': () => setIsModalExist(true)
    })
  }, [])

  return (
    <section className="single-product-tabs">
      <div className="container">
        <Tabs className="single-product-tabs__tab" settings={{fadeTime: '200'}}>
          <Nav className="single-product-tabs__nav">
            <div className="single-product-tabs__nav-item">Описание</div>
            <div className="single-product-tabs__nav-item">Видео</div>
            <div className="single-product-tabs__nav-item">Отзывы (1)</div>
            <div className="single-product-tabs__nav-item">Характеристики</div>
          </Nav>
          <Content className="single-product-tabs__body">
            <div className="single-product-tabs__body-item">
              <div className="single-product-tabs__desc">
                <div className="single-product-tabs__sale">
                  <div className="single-product-tabs__sale-bg">
                    <svg><use href={`${sprite}#percent`} /></svg>
                    <svg><use href={`${sprite}#percent`} /></svg>
                    <svg><use href={`${sprite}#percent`} /></svg>
                  </div>
                  <div className="single-product-tabs__sale-label">Акция</div>
                  <div className="single-product-tabs__sale-title">Акция</div>
                  <p className="single-product-tabs__sale-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="single-product-tabs__desc-inner">
                  <div className="single-product-tabs__desc-item">
                    Производитель: Берислав
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Страна: Украина
                  </div>
                  <div className="single-product-tabs__desc-item">
                    ТИП: Квартира
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Серия: М - 2
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Внешнее полотно и коробка из листовой холоднокатаной стали, толщиной: 1.5 мм;
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Коробка закрытого типа с утеплением (минеральная вата ISOVER) , глубина: 125 мм;
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Антисрезы: <span>4 шт;</span>
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Материалы накладок: Внешняя накладка: МДФ 12 мм - Внутренняя накладка: МДФ 12 мм;
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Накладка Наружная: Wenge South Term
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Накладка Внутренняя: White Supermat Term
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Цвет коробки: RAL 8019 | RAL 9003
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Замки: Mottura project цилиндровый + сувальдный;
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Цилиндр: Mottura project (1+5) с функцией перекодировки
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Накладка на сувальдный замок: Armadillo Line
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Броненакладка: Armadillo Line
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Ручка: Fuaro
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Глазок: Apecs
                  </div>
                  <div className="single-product-tabs__desc-item">
                    Марганцевая пластина: 1
                  </div>
                </div>
              </div>
            </div>
            <div className="single-product-tabs__body-item">
              <div className="single-product-tabs__video">
                <div className="video">
                  <div className="video__preview">
                    <img src={video2} alt="" width={610} height={345} />
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
            <div className="single-product-tabs__body-item">
              <div className="single-product-tabs__reviews">
                <div className="single-product-tabs__reviews-btn-mob-wrapper">
                  <button
                    className="single-product-tabs__reviews-btn btn"
                    type="button"
                    data-fancybox="reviews"
                    data-src="#reviews-modal"
                  >
                    <span className="single-product-tabs__reviews-btn-text btn__text">Добавить отзыв</span>
                  </button>
                </div>
                <div className="single-product-tabs__reviews-content">
                  <div className="single-product-tabs__reviews-item">
                    <div className="single-product-tabs__reviews-head">
                      <div className="single-product-tabs__reviews-name">Марина</div>
                      <div className="single-product-tabs__reviews-rating rating" data-rating="4">
                        { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
                      </div>
                      <div className="single-product-tabs__reviews-date">11.11.21</div>
                    </div>
                    <p className="single-product-tabs__reviews-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="single-product-tabs__reviews-item">
                    <div className="single-product-tabs__reviews-head">
                      <div className="single-product-tabs__reviews-name">Марина</div>
                      <div className="single-product-tabs__reviews-rating rating" data-rating="4">
                        { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
                      </div>
                      <div className="single-product-tabs__reviews-date">11.11.21</div>
                    </div>
                    <p className="single-product-tabs__reviews-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="single-product-tabs__reviews-item">
                    <div className="single-product-tabs__reviews-head">
                      <div className="single-product-tabs__reviews-name">Марина</div>
                      <div className="single-product-tabs__reviews-rating rating" data-rating="4">
                        { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
                      </div>
                      <div className="single-product-tabs__reviews-date">11.11.21</div>
                    </div>
                    <p className="single-product-tabs__reviews-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <form className="single-product-tabs__reviews-form">
                  <div className="single-product-tabs__reviews-title">Добавить отзыв</div>
                  <div className="single-product-tabs__reviews-inps">
                    <div className="single-product-tabs__reviews-inp-wrapper">
                      <label className="single-product-tabs__reviews-label" htmlFor="reviews-name">Имя</label>
                      <div className="single-product-tabs__reviews-inp-inner">
                        <input
                          className="single-product-tabs__reviews-inp"
                          id="reviews-name"
                          autoComplete="off"
                          type="text"
                          name="name"
                          placeholder="Ваше имя"
                        />
                      </div>
                    </div>
                    <div className="single-product-tabs__reviews-inp-wrapper">
                      <label className="single-product-tabs__reviews-label" htmlFor="reviews-phone">Телефон</label>
                      <div className="single-product-tabs__reviews-inp-inner">
                        <InputMask
                          mask="+38 (099) 999-99-99"
                          maskPlaceholder={null}
                          className="single-product-tabs__reviews-inp"
                          id="reviews-phone"
                          name="phone"
                          autoComplete="off"
                          type="tel"
                          placeholder="+380 ("
                        />
                      </div>
                    </div>
                    <div className="single-product-tabs__reviews-rating-wrapper">
                      <span className="single-product-tabs__reviews-label">Рейтинг</span>
                      <div className="single-product-tabs__reviews-from-rating rating" data-rating="0">
                        { new Array(5).fill('').map((_, index) => <svg data-rating-item={5 - index}><use href={`${sprite}#star-review`} /></svg>) }
                      </div>
                    </div>
                    <div className="single-product-tabs__reviews-textarea-wrapper">
                      <label className="single-product-tabs__reviews-label" htmlFor="reviews-name">Отзыв</label>
                      <div className="single-product-tabs__reviews-textarea-inner">
                        <textarea
                          className="single-product-tabs__reviews-textarea"
                          id="reviews-name"
                          autoComplete="off"
                          name="message"
                          placeholder="Сообщение"
                        />
                      </div>
                    </div>
                    <div className="single-product-tabs__reviews-btn-wrapper">
                      <button className="single-product-tabs__reviews-btn btn" type="submit">
                        <span className="single-product-tabs__reviews-btn-text btn__text">Отправить</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="single-product-tabs__body-item">
              <div className="single-product-tabs__chars">
                <div className="single-product-tabs__chars-inner">
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Страна</div>
                      <div className="single-product-tabs__chars-value">Украина</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                  <div className="single-product-tabs__chars-item">
                    <div className="single-product-tabs__chars-item-inner">
                      <div className="single-product-tabs__chars-title">Производитель</div>
                      <div className="single-product-tabs__chars-value">Берислав</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Tabs>
      </div>
      { isModalExist && <ReviewsModal /> }
    </section>
  )
}

export default SingleProductTabs