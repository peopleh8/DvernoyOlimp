import React, { useState }  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import ProductCategoryIntro from '../components/ProductCategory/Intro/Intro'
import ProductCategoryContent from '../components/ProductCategoryContent/ProductCategoryContent'

import ProductsSlider from '../components/ProductsSlider/ProductsSlider'
import Callback from '../components/Callback/Callback'
import SeoBlock from '../components/SeoBlock/SeoBlock'
import BottomTabs from '../components/BottomTabs/BottomTabs'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const ProductCategory = ({ pageContext }) => {
  const [ isOpenFilter, setIsOpenFilter ] = useState(false)

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout isOpenFilter={isOpenFilter} setIsOpenFilter={setIsOpenFilter}>
        <Seo title="Product Category" />
        <nav className="breadcrumbs breadcrumbs-product-category">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Каталог</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Product Category</span>
              </li>
            </ul>
          </div>
        </nav>
        <ProductCategoryIntro />
        <ProductCategoryContent isSearchPage={false} isOpenFilter={isOpenFilter} setIsOpenFilter={setIsOpenFilter} />
        <ProductsSlider className={'products-slider--viewed'} />
        <Callback />
        <SeoBlock />
        <BottomTabs />
      </Layout>
    </PrefixProvider>
  )
}

export default ProductCategory