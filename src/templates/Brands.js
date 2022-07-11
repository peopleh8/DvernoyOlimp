import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import BrandsIntro from '../components/Brands/Intro/Intro'
import ProductsSlider from '../components/ProductsSlider/ProductsSlider'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const Contacts = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Brands" />
        <nav className="breadcrumbs breadcrumbs-brands">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Brands</span>
              </li>
            </ul>
          </div>
        </nav>
        <BrandsIntro />
        <ProductsSlider className={'products-slider--viewed'} />
      </Layout>
    </PrefixProvider>
  )
}

export default Contacts