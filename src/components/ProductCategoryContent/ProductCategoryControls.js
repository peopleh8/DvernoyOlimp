import React from 'react'

import ProductCategoryFilters from './ProductCategoryFilters'
import ProductCategoryDropdown from './ProductCategoryDropdown'
import ProductCategoryBtns from "./ProductCategoryBtns";

const ProductCategoryControls = ({ isSearchPage, isModalExist, setIsOpenFilter }) => {
  return (
    <div className="product-category-controls">
      { (!isSearchPage && !isModalExist) && <ProductCategoryFilters /> }
      <ProductCategoryDropdown />
      <ProductCategoryBtns isSearchPage={isSearchPage} setIsOpenFilter={setIsOpenFilter} />
    </div>
  )
}

export default ProductCategoryControls