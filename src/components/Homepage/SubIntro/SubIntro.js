import React from 'react'

import './Subintro.scss'

import SubintroTop from './SubintroTop'
import SubintroList from './SubintroList'

const MainSubIntro = () => {
  return (
    <div className="main-subintro">
      <div className="container">
        <SubintroTop />
        <SubintroList />
      </div>
    </div>
  )
}

export default MainSubIntro