import React, { useState, useEffect, useContext } from 'react'
import { navigate } from "gatsby"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'

import CheckoutInfo from './CheckoutInfo'
import CheckoutContent from './CheckoutContent'

import { PrefixContext } from '../../context/PrefixContext'

const CheckoutIntro = () => {
  let prefix = useContext(PrefixContext)

  const [ isMobileList, setIsMobileList ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setIsMobileList(false),
      '(max-width: 1024px)': () => setIsMobileList(true)
    })
  }, [])

  return (
    <section className="checkout intro">
      <div className="container">
        <h1 className="checkout__title title title--dark">Оформления заказа</h1>
        <form
          className="checkout__from"
          onSubmit={e => {
            e.preventDefault()
            navigate(`${prefix}thanks/`, { state: { deliveryCode: '11111' } })
          }}
        >
          <CheckoutInfo isMobileList={isMobileList} />
          <CheckoutContent isMobileList={isMobileList} />
        </form>
      </div>
    </section>
  )
}

export default CheckoutIntro
