import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import MontageIntro from '../components/Montage/Intro/Intro'
import MontageSubintro from '../components/Montage/Subintro/Subintro'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const Montage = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Montage" />
        <nav className="breadcrumbs breadcrumbs-montage">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Montage</span>
              </li>
            </ul>
          </div>
        </nav>
        <MontageIntro />
        <MontageSubintro />
      </Layout>
    </PrefixProvider>
  )
}

export default Montage