import React from 'react'

const BlogIntroCategories = ({ categories, changeCategorie }) => {
  return (
    <div className="blog-intro__categories blog-intro-categories">
      {
        categories.map(categorie => {
          return (
            <button
              className={`blog-intro-categories__item ${categorie.isActive ? 'active' : ''}`} key={categorie.id}
              onClick={() => changeCategorie(categorie.id)}
            >
              {categorie.title}
            </button>
          )
        })
      }
    </div>
  )
}

export default BlogIntroCategories