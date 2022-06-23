import React from 'react'

import './ProductCategoryContent.scss'

import ProductCategoryControls from './ProductCategoryControls'
import ProductCategoryBox from './ProductCategoryBox'

const ProductCategoryContent = () => {
  return (
    <div className="product-category-content">
      <div className="container">
        <ProductCategoryControls />
        <ProductCategoryBox />
      </div>
    </div>
  )
}

export default ProductCategoryContent