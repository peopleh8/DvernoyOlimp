import React from 'react'

import CategoryBlock from "../CategoryBlock/CategoryBlock";

const HeaderCategories = ({ openCatalog, setIsOpenCatalog, isFirsVisible, setIsFirsVisible }) => {
  return (
    <div
      className={`header__categories header-categories ${openCatalog ? 'open' : ''}`}
      onClick={() => setIsOpenCatalog(false)}
    >
      <div className="container">
        <div
          className={`header-categories__inner ${isFirsVisible ? 'visible' : ''} ${openCatalog ? 'visible-pointer' : ''}`}
          onMouseEnter={() => setIsFirsVisible(false)}
          onMouseLeave={() => setIsFirsVisible(true)}
        >
          <CategoryBlock className={'main-intro__catalog-wrapper--header'} />
        </div>
      </div>
    </div>
  )
}

export default HeaderCategories