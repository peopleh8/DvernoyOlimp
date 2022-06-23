import React from 'react'

import './Intro.scss'

import CatalogCategories from './CatalogCategories'

const CatalogIntro = () => {
  return (
    <section className="catalog-intro intro">
      <div className="container">
        <h1 className="catalog-intro__title title title--dark">Каталог дверей</h1>
        <CatalogCategories />
      </div>
    </section>
  )
}

export default CatalogIntro