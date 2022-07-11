import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './ProductCategoryContent.scss'

import ProductCategoryControls from './ProductCategoryControls'
import ProductCategoryBox from './ProductCategoryBox'
import SortModal from '../Modal/SortModal'

import { enableScrollbar } from '../../utils/enableScrollbar'
import { disableScrollbar } from  '../../utils/disableScrollbar'

const ProductCategoryContent = ({ isSearchPage, isOpenFilter, setIsOpenFilter }) => {
  const [ isModalExist, setIsModalExist ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 650px)': () => setIsModalExist(false),
      '(max-width: 649px)': () => setIsModalExist(true)
    })
  }, [])

  useEffect(() => {
    isOpenFilter ? disableScrollbar() : enableScrollbar()
  }, [isOpenFilter])

  return (
    <div className="product-category-content">
      <div className="container">
        <ProductCategoryControls isSearchPage={isSearchPage} isModalExist={isModalExist} setIsOpenFilter={setIsOpenFilter} />
        <ProductCategoryBox isSearchPage={isSearchPage} isModalExist={isModalExist} isOpenFilter={isOpenFilter} setIsOpenFilter={setIsOpenFilter} />
        { isModalExist && <SortModal /> }
      </div>
    </div>
  )
}

export default ProductCategoryContent