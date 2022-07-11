import React  from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import NotFountIntro from '../components/NotFound/Intro'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const Privacy = () => {
  return (
    <PrefixProvider prefix="/">
      <Layout>
        <Seo title="Не найдено" />
        <NotFountIntro prefix="/" />
      </Layout>
    </PrefixProvider>
  )
}

export default Privacy