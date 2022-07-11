import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Header.scss'

import HeaderTop from './HeaderTop'
import HeaderBot from './HeaderBot'
import HeaderCategories from './HeaderCategories'
import Overlay from '../Overlay/Overlay'

import CallbackModal from '../Modal/CallbackModal'

import { isBrowser } from '../../utils/isBrowser'
import { disableScrollbar } from '../../utils/disableScrollbar'
import { enableScrollbar } from '../../utils/enableScrollbar'

const Header = ({ isOpenFilter, setIsOpenFilter }) => {
  const [ isTablet, setIsTablet ] = useState(false)
  const [ isMobile, setIsMobile ] = useState(false)
  const [ openCatalog, setIsOpenCatalog ] = useState(false)
  const [ isFirsVisible, setIsFirsVisible ] = useState(true)
  const [ isOpenSchedule, setIsOpenSchedule ] = useState(false)
  const [ isOpenSearch, setIsOpenSearch ] = useState(false)
  const [ isOpenMenu, setIsOpenMenu ] = useState(false)

  const closeSchedule = e => !e.target.closest('.header-schedule') && setIsOpenSchedule(false)

  const openSubmenu = e => {
    let target = e.currentTarget,
        submenuParent = target.parentElement.parentElement.parentElement.parentElement,
        submenuTarget = target.nextElementSibling

    submenuTarget.classList.add('open')
    submenuParent.classList.add('open')
    submenuParent.classList.add('overflow')
  }

  const closeSubmenu = e => {
    let target = e.currentTarget,
        submenuParent = target.parentElement.parentElement.parentElement.parentElement.parentElement,
        submenuTarget = target.parentElement

    submenuParent.classList.remove('open')

    if (isBrowser()) {
      setTimeout(() => {
        submenuTarget.classList.remove('open')
        submenuParent.classList.remove('overflow')
      }, 360)
    }
  }

  const openSubsubmenu = e => {
    let target = e.currentTarget,
        subSubmenuParent = target.parentElement.parentElement.parentElement,
        subSubmenuTarget = target.nextElementSibling

    subSubmenuTarget.classList.add('open')
    subSubmenuParent.classList.add('close')
  }

  const closeSubsubmenu = e => {
    let target = e.currentTarget,
        subSubmenuParent = target.parentElement.parentElement.parentElement.parentElement,
        subSubmenuTarget = target.parentElement

    subSubmenuParent.classList.remove('close')

    if (isBrowser()) {
      setTimeout(() => {
        subSubmenuTarget.classList.remove('open')
      }, 360)
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (isBrowser()) window.addEventListener('click', closeSchedule)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        setIsTablet(false)
        setIsOpenMenu(false)
      },
      '(max-width: 1024px)': () => setIsTablet(true),
      '(min-width: 481px)': () => setIsMobile(false),
      '(max-width: 480px)': () => setIsMobile(true),
    })

    return () => {
      if (isBrowser()) window.removeEventListener('click', closeSchedule)
    }
  }, [])

  useEffect(() => {
    isOpenMenu ? disableScrollbar() : enableScrollbar()
  }, [isOpenMenu])

  return (
    <header className="header">
      <HeaderTop
        isTablet={isTablet}
        isMobile={isMobile}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
        openSubmenu={openSubmenu}
        closeSubmenu={closeSubmenu}
        openSubsubmenu={openSubsubmenu}
        closeSubsubmenu={closeSubsubmenu}
      />
      <HeaderBot
        isMobile={isMobile}
        openCatalog={openCatalog}
        setIsOpenCatalog={setIsOpenCatalog}
        isOpenSchedule={isOpenSchedule}
        setIsOpenSchedule={setIsOpenSchedule}
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={setIsOpenSearch}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      { !isTablet && <HeaderCategories
        openCatalog={openCatalog}
        setIsOpenCatalog={setIsOpenCatalog}
        isFirsVisible={isFirsVisible}
        setIsFirsVisible={setIsFirsVisible}
      /> }
      <Overlay
        openCatalog={openCatalog}
        setIsOpenCatalog={setIsOpenCatalog}
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={setIsOpenSearch}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
        isOpenFilter={isOpenFilter}
        setIsOpenFilter={setIsOpenFilter}
      />
      <CallbackModal />
    </header>
  )
}

export default Header