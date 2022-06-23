import React  from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import ContactsIntro from '../components/Contacts/Intro/Intro'
import ContactsCallback from '../components/Contacts/ContactsCallback/ContactsCallback'
import ContactsInfo from '../components/ContactsInfo/ContactsInfo'

import '../components/Layout/Breadcrumbs.scss'

import PrefixProvider from '../context/PrefixContext'

const Contacts = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title="Contacts" />
        <nav className="breadcrumbs breadcrumbs-contacts">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Contacts</span>
              </li>
            </ul>
          </div>
        </nav>
        <ContactsIntro />
        <ContactsInfo />
        <ContactsCallback />
      </Layout>
    </PrefixProvider>
  )
}

export default Contacts