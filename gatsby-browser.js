import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export const onPreRouteUpdate = ({ prevLocation }) => {
  prevLocation && NProgress.start()
}

export const onRouteUpdateDelayed = () => {
  NProgress.start()
}

export const onRouteUpdate = () => {
  NProgress.done()
}

window.addEventListener('scroll', e => {
  const header = document.querySelector('.header')

  e.currentTarget.scrollY >= 20 && window.innerWidth > 1024
    ? header && header.classList.add('fixed')
    : header && header.classList.remove('fixed')
})

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})