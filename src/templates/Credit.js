import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import CreditIntro from '../components/Credit/Intro/Intro'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const Credit = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Credit" />
        <nav className="breadcrumbs breadcrumbs-credit">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Credit</span>
              </li>
            </ul>
          </div>
        </nav>
        <CreditIntro />
      </Layout>
    </PrefixProvider>
  )
}

export default Credit