import React from 'react'

import 'normalize.css'
import './Layout.scss'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
