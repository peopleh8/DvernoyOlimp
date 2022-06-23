import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixContext'

import logo from '../../images/logo.png'

const Logo = ({ className }) => {
  const prefix = useContext(PrefixContext)

  return (
    <div className="logo">
      <Link className={`logo__link ${className}`} to={prefix}>
        <img src={logo} alt="" width={163} height={38} />
      </Link>
    </div>
  )
}

export default Logo