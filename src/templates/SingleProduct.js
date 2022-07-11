import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import SingleProductIntro from '../components/SingleProduct/Intro/Intro'
import SingleProductTabs from '../components/SingleProduct/SingleProductTabs/SingleProductTabs'
import SingleProductTogether from '../components/SingleProduct/SingleProductTogether/SingleProductTogether'

import ProductsSlider from '../components/ProductsSlider/ProductsSlider'
import BottomTabs from '../components/BottomTabs/BottomTabs'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const SingleProduct = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Single Product" />
        <nav className="breadcrumbs breadcrumbs-single-product">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Catalog</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Product Category</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Single Product</span>
              </li>
            </ul>
          </div>
        </nav>
        <SingleProductIntro />
        <SingleProductTabs />
        <SingleProductTogether />
        <ProductsSlider className={'products-slider--similar'} />
        <ProductsSlider className={'products-slider--viewed'} />
        <BottomTabs />
      </Layout>
    </PrefixProvider>
  )
}

export default SingleProduct