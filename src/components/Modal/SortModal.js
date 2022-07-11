import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

import './Modal.scss'

import { isBrowser } from '../../utils/isBrowser'
import { getScrollbarWidth } from '../../utils/getScrollbarWidth'

const SortModal = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='sort']", {
      showClass: 'fancybox-fadeIn',
      hideClass: 'fancybox-fadeOut',
      dragToClose: false,
      parentEl: isBrowser() && document.querySelector('#___gatsby'),
      on: {
        init: () => {
          if (isBrowser()) document.querySelector('.header').style.paddingRight = getScrollbarWidth()
        },
        destroy: () => {
          if (isBrowser()) document.querySelector('.header').style.paddingRight = '0'
        }
      }
    })

    return () => {
      Fancybox.destroy()
    }
  }, [])

  return (
    <div className="modal modal-sort" id="sort-modal" style={{ display: 'none' }}>
      <div className="modal__title">Сортировка</div>
      <div className="modal__list modal-list">
        <button className="modal-list__item">От дешевых к дорогим</button>
        <button className="modal-list__item">От дорогих к дешевым</button>
        <button className="modal-list__item">По отзывам</button>
        <button className="modal-list__item">По новизне</button>
      </div>
    </div>
  )
}

export default SortModal