import React from 'react'

import singlePost from '../../../images/single-post.jpg'

const SinglePostPreview = () => {
  return (
    <div className="single-post-intro__top">
      <h1 className="single-post-intro__title title title--dark">А в DARUMI в листопад - АКЦІЯ!</h1>
      <div className="single-post-intro__info">
        <div className="single-post-intro__date">01.12.2021</div>
        <div className="single-post-intro__cat">Название категории</div>
      </div>
      <div className="single-post-intro__preview">
        <img src={singlePost} alt="" width={1280} height={385} />
      </div>
    </div>
  )
}

export default SinglePostPreview