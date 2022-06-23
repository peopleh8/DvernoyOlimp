import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import AboutIntro from '../components/About/Intro/Intro'
import AboutIcons from '../components/About/AboutIcons/AboutIcons'
import AboutStory from '../components/About/AboutStory/AboutStory'
import AboutEmployees from '../components/About/AboutEmployees/AboutEmployees'
import AboutMissions from '../components/About/AboutMissions/AboutMissions'
import AboutVideoblog from '../components/About/AboutVideoblog/AboutVideoblog'

import Reviews from '../components/Reviews/Reviews'
import ContactsInfo from '../components/ContactsInfo/ContactsInfo'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

import { isBrowser } from '../utils/isBrowser'

const About = ({ pageContext }) => {
  if (!isBrowser()) return null

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="About" />
        <nav className="breadcrumbs breadcrumbs-about">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">About</span>
              </li>
            </ul>
          </div>
        </nav>
        <AboutIntro />
        <AboutIcons />
        <AboutStory />
        <Reviews />
        <AboutEmployees />
        <AboutMissions />
        <ContactsInfo />
        <AboutVideoblog />
      </Layout>
    </PrefixProvider>
  )
}

export default About