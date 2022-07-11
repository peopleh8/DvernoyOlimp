import React from 'react'

import sprite from '../../icons/sprite.svg'

const FooterContacts = () => {
  return (
    <div className="footer__contacts footer-contacts">
      <div className="footer-contacts__title footer-title">КОНТАКТЫ</div>
      <a className="footer-contacts__phone" href="tel:380800339827">0 800 339 827</a>
      <p className="footer-contacts__schedule">
        <span>09:00-21:00 пн-пт</span>
        <span>10:00-20:00 сб-вс</span>
      </p>
      <a className="footer-contacts__email" href="mailto:dvernoyolimp@gmail.com">dvernoyolimp@gmail.com</a>
      <ul className="footer-contacts__social">
        <li className="footer-contacts__social-item">
          <a className="footer-contacts__social-link" href="#" target="_blank" rel="noreferrer">
            <svg><use href={`${sprite}#youtube`} /></svg>
          </a>
        </li>
        <li className="footer-contacts__social-item">
          <a className="footer-contacts__social-link" href="#" target="_blank" rel="noreferrer">
            <svg><use href={`${sprite}#facebook`} /></svg>
          </a>
        </li>
        <li className="footer-contacts__social-item">
          <a className="footer-contacts__social-link" href="#" target="_blank" rel="noreferrer">
            <svg><use href={`${sprite}#instagram`} /></svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterContacts