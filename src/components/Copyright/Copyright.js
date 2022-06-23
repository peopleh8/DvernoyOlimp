import React from 'react'

import './Copyright.scss'

const Copyright = () => {
  return (
    <div className="copyright">
      <p className="copyright__text">
        © 2006 - { new Date().getFullYear() } Компания “Дверной Олимп”. Все права защищены.
        Сайт не является <a href="#" target="_blank" rel="noreferrer">договором публичной оферты</a>
      </p>
    </div>
  )
}

export default Copyright