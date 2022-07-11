import React from 'react'

import './Overlay.scss'

const Overlay = ({
  openCatalog,
  setIsOpenCatalog,
  isOpenSearch,
  setIsOpenSearch,
  isOpenMenu,
  setIsOpenMenu,
  isOpenFilter,
  setIsOpenFilter
}) => {
  return (
    <div
      className={`overlay ${openCatalog || isOpenSearch || isOpenMenu || isOpenFilter ? 'open' : ''}`}
      onClick={() => {
        setIsOpenCatalog(false)
        setIsOpenSearch(false)
        setIsOpenMenu(false)
        isOpenFilter && setIsOpenFilter(false)
      }}
    />
  )
}

export default Overlay