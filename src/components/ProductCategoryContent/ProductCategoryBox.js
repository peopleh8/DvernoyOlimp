import React from 'react'

import ProductCategorySidebar from './ProductCategorySidebar'
import ProductCategoryList from './ProductCategoryList'

const ProductCategoryBox = ({ isSearchPage, isModalExist, isOpenFilter, setIsOpenFilter }) => {
  return (
    <div className="product-category-box">
      <ProductCategorySidebar isSearchPage={isSearchPage} isModalExist={isModalExist} isOpenFilter={isOpenFilter} setIsOpenFilter={setIsOpenFilter} />
      <ProductCategoryList />
    </div>
  )
}

export default ProductCategoryBox