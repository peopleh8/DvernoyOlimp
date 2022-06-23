import React from 'react'
import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share'

import sprite from '../../../icons/sprite.svg'

const SinglePostShare = () => {
  return (
    <div className="single-post-intro__share">
      <div className="single-post-intro__share-text">ПОДЕЛИТЬСЯ:</div>
      <div className="single-post-intro__share-inner">
        <EmailShareButton
          className="single-post-intro__share-btn"
          url={"https://google.com"}
          subject={"Some title"}
          body={"Some title body"}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#at`} /></svg>
          </span>
        </EmailShareButton>
        <TwitterShareButton
          className="single-post-intro__share-btn"
          url={"https://google.com"}
          title={"Some title"}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#twitter`} /></svg>
          </span>
        </TwitterShareButton>
        <FacebookShareButton
          className="single-post-intro__share-btn"
          url={"https://google.com"}
          quote={"Some title"}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#facebook`} /></svg>
          </span>
        </FacebookShareButton>
        <TelegramShareButton
          className="single-post-intro__share-btn"
          url={"https://google.com"}
          title={"Some title"}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#telegram`} /></svg>
          </span>
        </TelegramShareButton>
        <ViberShareButton
          className="single-post-intro__share-btn"
          url={"https://google.com"}
          title={"Some title"}
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#viber`} /></svg>
          </span>
        </ViberShareButton>
        <WhatsappShareButton
          className="single-post-intro__share-btn"
          url={"https://google.com"}
          title={"Some title"}
          separator=":: "
        >
          <span className="single-post-intro__share-btn-inner">
            <svg><use href={`${sprite}#whatsapp`} /></svg>
          </span>
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default SinglePostShare