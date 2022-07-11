import React from 'react'

import 'normalize.css'
import './Layout.scss'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children, isOpenFilter, setIsOpenFilter }) => {
  return (
    <div className="wrapper">
      <Header isOpenFilter={isOpenFilter} setIsOpenFilter={setIsOpenFilter} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
