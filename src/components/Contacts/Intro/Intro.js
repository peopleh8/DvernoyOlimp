import React from 'react'

import './Intro.scss'

import ContactsIntroInfo from './ContactsIntroInfo'

const ContactsIntro = () => {
  return (
    <div className="contacts-intro intro">
      <div className="container">
        <h1 className="contacts-intro__title title title--dark">Контакты</h1>
        <ContactsIntroInfo />
      </div>
    </div>
  )
}

export default ContactsIntro