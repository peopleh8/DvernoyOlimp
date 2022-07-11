import React  from 'react'

import Layout from '../../components/Layout/Layout'
import Seo from '../../components/seo'

import NotFountIntro from '../../components/NotFound/Intro'

import '../../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../../context/PrefixContext'

const Privacy = () => {
  return (
    <PrefixProvider prefix="/uk/">
      <Layout>
        <Seo title="Не занйдено" />
        <NotFountIntro prefix="/uk/" />
      </Layout>
    </PrefixProvider>
  )
}

export default Privacy