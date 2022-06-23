import React  from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import MainIntro from '../components/Homepage/Intro/Intro'
import MainSubIntro from '../components/Homepage/SubIntro/SubIntro'
import Bestsellers from '../components/Homepage/Bestsellers/Bestsellers'
import MainReasons from '../components/Homepage/Reasons/MainReasons'
import MainSupport from '../components/Homepage/Support/Support'
import MainStages from '../components/Homepage/Stages/MainStages'
import MainVideos from '../components/Homepage/Videos/Videos'
import MainPosts from '../components/Homepage/Posts/Posts'

import ProductsSlider from '../components/ProductsSlider/ProductsSlider'
import Partners from '../components/Partners/Partners'
import Reviews from '../components/Reviews/Reviews'
import Callback from '../components/Callback/Callback'
import SeoBlock from '../components/SeoBlock/SeoBlock'

import PrefixProvider from '../context/PrefixContext'

import { isBrowser } from '../utils/isBrowser'

const Homepage = ({ pageContext }) => {
  if (!isBrowser()) return null

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Home" />
        <MainIntro />
        <MainSubIntro />
        <Bestsellers />
        <MainReasons />
        <ProductsSlider />
        <MainSupport />
        <Partners />
        <Reviews />
        <MainStages />
        <MainVideos />
        <MainPosts />
        <Callback />
        <SeoBlock />
      </Layout>
    </PrefixProvider>
  )
}

export default Homepage