import React from 'react'

import './Intro.scss'

import SinglePostPreview from './SinglePostPreview'
import SinglePostArticle from './SinglePostArticle'
import SinglePostShare from './SinglePostShare'

const SinglePostIntro = () => {
  return (
    <section className="single-post-intro intro">
      <div className="container">
        <SinglePostPreview />
        <SinglePostArticle />
        <SinglePostShare />
      </div>
    </section>
  )
}

export default SinglePostIntro