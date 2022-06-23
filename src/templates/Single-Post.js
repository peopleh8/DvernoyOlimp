import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import SinglePostIntro from '../components/SinglePost/Intro/Intro'
import SinglePostSimilar from '../components/SinglePost/SinglePostSimilar/SinglePostSimilar'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const SinglePost = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Single Post" />
        <nav className="breadcrumbs breadcrumbs-single-post">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Blog</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Single Post</span>
              </li>
            </ul>
          </div>
        </nav>
        <SinglePostIntro />
        <SinglePostSimilar />
      </Layout>
    </PrefixProvider>
  )
}

export default SinglePost