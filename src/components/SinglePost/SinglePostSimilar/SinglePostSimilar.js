import React from 'react'

import './SinglePostSimilar.scss'

import SinglePostSlider from './SinglePostSlider'

const SinglePostSimilar = () => {
  return (
    <div className="single-post-similar">
      <div className="container">
        <div className="single-post-similar__title title title--dark">Вам будет интересно</div>
        <SinglePostSlider />
      </div>
    </div>
  )
}

export default SinglePostSimilar