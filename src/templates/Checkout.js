import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import CheckoutIntro from '../components/Checkout/Intro'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const Checkout = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Checkout" />
        <nav className="breadcrumbs breadcrumbs-checkout">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Checkout</span>
              </li>
            </ul>
          </div>
        </nav>
        <CheckoutIntro />
      </Layout>
    </PrefixProvider>
  )
}

export default Checkout