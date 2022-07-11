import React from 'react'

import './Burger.scss'

const Burger = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <button
      className={`burger ${isOpenMenu ? 'active' : ''}`}
      onClick={() => setIsOpenMenu(true)}
    >
      <span /><span /><span />
    </button>
  )
}

export default Burger