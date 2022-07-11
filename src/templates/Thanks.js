import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'
import ThanksIntro from '../components/Thanks/Thanks'

const Thanks = ({ pageContext, location }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Thanks" />
        <nav className="breadcrumbs breadcrumbs-thanks">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Thanks</span>
              </li>
            </ul>
          </div>
        </nav>
        <ThanksIntro deliveryCode={location?.state?.deliveryCode} />
      </Layout>
    </PrefixProvider>
  )
}

export default Thanks