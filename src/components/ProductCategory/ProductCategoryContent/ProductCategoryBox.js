import React from 'react'

import ProductCategorySidebar from './ProductCategorySidebar'
import ProductCategoryList from './ProductCategoryList'

const ProductCategoryBox = () => {
  return (
    <div className="product-category-box">
      <ProductCategorySidebar />
      <ProductCategoryList />
    </div>
  )
}

export default ProductCategoryBox