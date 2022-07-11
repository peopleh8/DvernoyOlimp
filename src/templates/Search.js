import React, { useState, useEffect }  from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import SearchIntro from '../components/Search/Intro/Intro'
import ProductCategoryContent from '../components/ProductCategoryContent/ProductCategoryContent'
import ProductsSlider from '../components/ProductsSlider/ProductsSlider'
import Callback from '../components/Callback/Callback'
import BottomTabs from '../components/BottomTabs/BottomTabs'
import SeoBlock from '../components/SeoBlock/SeoBlock'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

import { isBrowser } from '../utils/isBrowser'

const Search = ({ pageContext, location }) => {
  const [ isMobile, setIsMobile ] = useState(false)

  const searchQuery = location?.state?.searchQuery || (isBrowser() && window.location.search.slice(3))

  const refreshURL = () => isBrowser() && window.history.replaceState(null, null, `?s=${searchQuery}`)

  useEffect(() => {
    refreshURL()

    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => setIsMobile(false),
      '(max-width: 991px)': () => setIsMobile(true)
    })
  }, [])
  useEffect(refreshURL, [searchQuery])

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Search Result" />
        <nav className="breadcrumbs breadcrumbs-search">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Search Result</span>
              </li>
            </ul>
          </div>
        </nav>
        <SearchIntro searchQuery={searchQuery} />
        <ProductCategoryContent isSearchPage={true} />
        <ProductsSlider className={'products-slider--viewed'} />
        { !isMobile && <Callback /> }
        { !isMobile && <SeoBlock /> }
        { !isMobile && <BottomTabs /> }
      </Layout>
    </PrefixProvider>
  )
}

export default Search