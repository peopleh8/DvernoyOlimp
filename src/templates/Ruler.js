import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import RulerIntro from '../components/Ruler/Intro/Intro'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'
import RulerSubintro from '../components/Ruler/Subintro/Subintro'
import RulerVideo from '../components/Ruler/RulerVideo/RulerVideo'

const Ruler = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Ruler" />
        <nav className="breadcrumbs breadcrumbs-ruler">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Ruler</span>
              </li>
            </ul>
          </div>
        </nav>
        <RulerIntro />
        <RulerSubintro />
        <RulerVideo />
      </Layout>
    </PrefixProvider>
  )
}

export default Ruler