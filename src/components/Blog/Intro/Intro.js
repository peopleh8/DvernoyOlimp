import React, { useState, useCallback } from 'react'

import BlogIntroCategories from './BlogIntroCategories'
import BlogIntroList from './BlogIntroList'
import BlogIntroBtn from './BlogIntroBtn'
import BlogIntroPagination from './BlogIntroPagination'

import './Intro.scss'

const BLogIntro = () => {
  const [ categories, setCategories ] = useState([
    {
      id: 1,
      title: 'Все категории',
      isActive: true
    },
    {
      id: 2,
      title: 'Название категории',
      isActive: false
    },
    {
      id: 3,
      title: 'Название категории',
      isActive: false
    },
    {
      id: 4,
      title: 'Название категории',
      isActive: false
    },
    {
      id: 5,
      title: 'Название категории',
      isActive: false
    },
    {
      id: 6,
      title: 'Название категории',
      isActive: false
    },
    {
      id: 7,
      title: 'Название категории',
      isActive: false
    },
  ])

  const changeCategorie = useCallback(catId => {
    setCategories(categories.map(categorie => {
      return {
        ...categorie,
        isActive: categorie.id === catId
      }
    }))
  }, [categories])

  return (
    <section className="blog-intro intro">
      <div className="container">
        <div className="blog-intro__wrapper">
          <h1 className="blog-intro__title title title--dark">Блог</h1>
          <BlogIntroCategories categories={categories} changeCategorie={changeCategorie} />
          <BlogIntroList />
          <BlogIntroBtn />
          <BlogIntroPagination />
        </div>
      </div>
    </section>
  )
}

export default BLogIntro