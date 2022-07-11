import React from 'react'

import './Intro.scss'

const SearchIntro = ({ searchQuery }) => {
  return (
    <section className="search-intro">
      <div className="container">
        <h1 className="search-intro__title title title--dark">
          Результаты поиска <span>«{ searchQuery }»</span>
        </h1>
      </div>
    </section>
  )
}

export default SearchIntro