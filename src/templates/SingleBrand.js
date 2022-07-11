import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import SingleBrandIntro from '../components/SingleBrand/Intro/Intro'
import SingleBrandCollection from '../components/SingleBrand/SingleBrandCollection/SingleBrandCollaction'
import ProductCategoryContent from '../components/ProductCategoryContent/ProductCategoryContent'
import ProductsSlider from '../components/ProductsSlider/ProductsSlider'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const SingleBrand = ({ pageContext }) => {
  const [ isOpenFilter, setIsOpenFilter ] = useState(false)

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout isOpenFilter={isOpenFilter} setIsOpenFilter={setIsOpenFilter}>
        <Seo title="Single Brand" />
        <nav className="breadcrumbs breadcrumbs-single-brand">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Brands</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Single Brand</span>
              </li>
            </ul>
          </div>
        </nav>
        <SingleBrandIntro />
        <SingleBrandCollection />
        <ProductCategoryContent isSearchPage={false} isOpenFilter={isOpenFilter} setIsOpenFilter={setIsOpenFilter} />
        <ProductsSlider className={'products-slider--viewed'} />
      </Layout>
    </PrefixProvider>
  )
}

export default SingleBrand