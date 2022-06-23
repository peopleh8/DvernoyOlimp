import React from 'react'
import  { Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SimpleBar from 'simplebar-react'

import 'simplebar/dist/simplebar.min.css'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

import './ContactsInfo.scss'

import sprite from '../../icons/sprite.svg'

const ContactsInfo = () => {
  const constantsButtons = ['Киев', 'Ирпень', 'Буча', 'Бровары', 'Львов ', 'Одесса']

  return (
    <section className="contacts-info">
      <div className="container">
        <div className="contacts-info__title">Наши магазины</div>
        <div className="contacts-info__pagination" />
        <Swiper
          className="contacts-info__slider contacts-info-slider"
          modules={[Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          speed={500}
          allowTouchMove={false}
          pagination={{
            clickable: true,
            el: '.contacts-info__pagination',
            bulletClass: 'contacts-info__pagination-item',
            bulletActiveClass: 'active',
            renderBullet: (index, className) => {
              return (`
                <div class="${className}">${constantsButtons[index]}</div>
              `)
            }
          }}
        >
          {
            constantsButtons.map(_ => {
              return (
                <SwiperSlide className="contacts-info-slider__item" key={Date.now()}>
                  <div className="contacts-info-slider__item-inner">
                    <div className="contacts-info-slider__item-content">
                      <SimpleBar className="contacts-info-slider__item-content-inner" autoHide={false}>
                        <div className="contacts-info-slider__item-content-elem">
                          <div className="contacts-info-slider__item-content-title">03022, пер. Коломиевский, 17/31-А(м. Васильковская 10 метров)</div>
                          <div className="contacts-info-slider__item-content-inner">
                            <div className="contacts-info-slider__item-content-phones">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#phone`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-link" href="tel:380442212866">044 221 28 66</a>
                                <a className="contacts-info-slider__item-content-link" href="tel:380442212866">044 221 28 66</a>
                              </div>
                            </div>
                            <div className="contacts-info-slider__item-content-email">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#mail`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-link" href="mailto:dvernoyolimp@gmail.com">dvernoyolimp@gmail.com</a>
                              </div>
                            </div>
                            <div className="contacts-info-slider__item-content-schedule">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#clock`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-text">пн-пт: 09.00 - 20.00</a>
                                <a className="contacts-info-slider__item-content-text">сб-вс: 10.00 - 18.00</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="contacts-info-slider__item-content-elem">
                          <div className="contacts-info-slider__item-content-title">03022, пер. Коломиевский, 17/31-А(м. Васильковская 10 метров)</div>
                          <div className="contacts-info-slider__item-content-inner">
                            <div className="contacts-info-slider__item-content-phones">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#phone`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-link" href="tel:380442212866">044 221 28 66</a>
                                <a className="contacts-info-slider__item-content-link" href="tel:380442212866">044 221 28 66</a>
                              </div>
                            </div>
                            <div className="contacts-info-slider__item-content-email">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#mail`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-link" href="mailto:dvernoyolimp@gmail.com">dvernoyolimp@gmail.com</a>
                              </div>
                            </div>
                            <div className="contacts-info-slider__item-content-schedule">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#clock`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-text">пн-пт: 09.00 - 20.00</a>
                                <a className="contacts-info-slider__item-content-text">сб-вс: 10.00 - 18.00</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="contacts-info-slider__item-content-elem">
                          <div className="contacts-info-slider__item-content-title">03022, пер. Коломиевский, 17/31-А(м. Васильковская 10 метров)</div>
                          <div className="contacts-info-slider__item-content-inner">
                            <div className="contacts-info-slider__item-content-phones">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#phone`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-link" href="tel:380442212866">044 221 28 66</a>
                                <a className="contacts-info-slider__item-content-link" href="tel:380442212866">044 221 28 66</a>
                              </div>
                            </div>
                            <div className="contacts-info-slider__item-content-email">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#mail`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-link" href="mailto:dvernoyolimp@gmail.com">dvernoyolimp@gmail.com</a>
                              </div>
                            </div>
                            <div className="contacts-info-slider__item-content-schedule">
                              <div className="contacts-info-slider__item-content-icon">
                                <svg><use href={`${sprite}#clock`} /></svg>
                              </div>
                              <div className="contacts-info-slider__item-content-wrapper">
                                <a className="contacts-info-slider__item-content-text">пн-пт: 09.00 - 20.00</a>
                                <a className="contacts-info-slider__item-content-text">сб-вс: 10.00 - 18.00</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SimpleBar>
                    </div>
                    <div className="contacts-info-slider__item-map">
                      <div className="contacts-info-slider__item-map-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20585.837560150187!2d24.004443573221135!3d49.83814147907564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c7c95b971%3A0xb127b494a0f4df1d!2z0JzRg9C30LXQuS3QkNGA0YHQtdC90LDQuywg0LLRltC00LTRltC7INCb0YzQstGW0LLRgdGM0LrQvtCz0L4g0ZbRgdGC0L7RgNC40YfQvdC-0LPQviDQvNGD0LfQtdGO!5e0!3m2!1suk!2sua!4v1655895737439!5m2!1suk!2sua" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default ContactsInfo