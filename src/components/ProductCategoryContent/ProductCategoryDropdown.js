import React, { useState, useEffect } from 'react'

import { isBrowser } from '../../utils/isBrowser'

import sprite from '../../icons/sprite.svg'

const ProductCategoryDropdown = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ dropdownList, setDropdownList ] = useState([
    {
      id: 1,
      title: 'По новизне',
      isActive: true
    },
    {
      id: 2,
      title: 'По новизне 1',
      isActive: false
    },
    {
      id: 3,
      title: 'По новизне 2',
      isActive: false
    },
    {
      id: 4,
      title: 'По новизне 3',
      isActive: false
    }
  ])

  const closeDropdown = e => !e.target.closest('.dropdown') && setIsOpen(false)

  const changeActiveDropDownItem = itemId => {
    setDropdownList(dropdownList.map(item => {
      return {
        ...item,
        isActive: item.id === itemId
      }
    }))


    setIsOpen(false)
  }

  useEffect(() => {
    isBrowser() && window.addEventListener('click', closeDropdown)

    return () => isBrowser() &&window.removeEventListener('click', closeDropdown)
  }, [])

  return (
    <div className={`product-category-dropdown dropdown ${isOpen ? 'open' : ''}`}>
      <div
        className="product-category-dropdown__current dropdown__current"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="product-category-dropdown__text dropdown__text">{ dropdownList.filter(item => item.isActive)[0].title }</div>
        <div className="product-category-dropdown__icon dropdown__icon">
          <svg><use href={`${sprite}#big-item-arrow`} /></svg>
        </div>
      </div>
      <div className="product-category-dropdown__list dropdown__list">
        { dropdownList.map(item => {
          return (
            <div
              className={`product-category-dropdown__item dropdown__item ${item.isActive ? 'active' : ''}`}
              key={item.id}
              onClick={() => changeActiveDropDownItem(item.id)}
            >
              { item.title }
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default ProductCategoryDropdown